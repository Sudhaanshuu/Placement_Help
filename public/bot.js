const API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-large";
const API_KEY = "#"; // take from env

const chatbot = document.getElementById("chatbot");
const sendButton = document.querySelector("#chatbot-input button");
const userInputElement = document.getElementById("user-input");
const chatContent = document.getElementById("chatbot-messages");
const micButton = document.getElementById("mic-btn");

// Custom responses for specific scenarios
const customResponses = {

    default: [
        "As Princy, your AI placement and education assistant, I'd be happy to help with that. Let me think...",
        "Interesting question! As an AI focused on educational support and placement help, I'll do my best to assist you. One moment please...",
        "I'm Princy, your placement and education AI, and I'm here to help with queries like this. Let me process that for you..."
    ]
};

async function query(data) {
    const response = await fetch(API_URL, {
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

function addUserMessage(message) {
    const userMessage = document.createElement("div");
    userMessage.textContent = message;
    userMessage.classList.add("message", "user");
    chatContent.appendChild(userMessage);
    userInputElement.value = "";
}

function addChatbotMessage(message) {
    const chatbotMessage = document.createElement("div");
    chatbotMessage.textContent = message;
    chatbotMessage.classList.add("message", "bot");
    chatContent.appendChild(chatbotMessage);

    // Speak the response
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(speech);
    }
}

function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbot-window");
    chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "flex" : "none";
}

async function getResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Check for greetings
    if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hey")) {
        return customResponses.greeting[Math.floor(Math.random() * customResponses.greeting.length)];
    }

    // For all other messages, use the Hugging Face API
    try {
        const promptedMessage = `Answer the following question as Princy, an AI assistant for placement preparation and educational support: ${userMessage}`;
        const response = await query({ "inputs": promptedMessage });
        let botResponse = response[0].generated_text;

        // Ensure the response mentions Princy and educational/placement assistance if it doesn't already
        if (!botResponse.toLowerCase().includes("princy") && !botResponse.toLowerCase().includes("placement") && !botResponse.toLowerCase().includes("education")) {
            botResponse = `As per my knowledge ${botResponse}`;
        }

        return botResponse;
    } catch (error) {
        console.error("Error:", error);
        return "As Princy, your AI placement and education assistant, I want to ensure I give you accurate information. Could you please try again?";
    }
}

sendButton.addEventListener("click", async() => {
    const userMessage = userInputElement.value.trim();
    if (userMessage === "") return;

    addUserMessage(userMessage);
    addChatbotMessage("Thinking...");

    const response = await getResponse(userMessage);

    // Remove the "Thinking..." message
    chatContent.removeChild(chatContent.lastChild);

    addChatbotMessage(response);
});

function startSpeechRecognition() {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
        addChatbotMessage("Speech recognition is not supported in your browser.");
        return;
    }

    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = async(event) => {
        const spokenText = event.results[0][0].transcript;
        addUserMessage(spokenText);
        addChatbotMessage("Thinking...");

        const response = await getResponse(spokenText);

        // Remove the "Thinking..." message
        chatContent.removeChild(chatContent.lastChild);

        addChatbotMessage(response);
    };

    recognition.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
        addChatbotMessage("I'm having trouble understanding you. Could you please type your question instead?");
    };

    recognition.start();
}

micButton.addEventListener("click", startSpeechRecognition);

// Initial state for the chatbot
chatbot.style.display = "block";
toggleChatbot();

// Initial greeting
addChatbotMessage(customResponses.greeting[0]);