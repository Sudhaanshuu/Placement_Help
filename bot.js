const chatbot = document.getElementById("chatbot");
const sendButton = document.querySelector("#chatbot-input button");
const userInputElement = document.getElementById("user-input");
const chatContent = document.getElementById("chatbot-messages");
const micButton = document.getElementById("mic-btn");

// Function to add user message to the chat
function addUserMessage(message) {
    const userMessage = document.createElement("div");
    userMessage.textContent = message;
    userMessage.classList.add("message", "user");
    chatContent.appendChild(userMessage);
    userInputElement.value = "";
}

// Function to add chatbot message to the chat and speak it
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

// Function to toggle the chatbot window visibility
function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbot-window");
    chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "flex" : "none";
}

// Send button event listener
sendButton.addEventListener("click", () => {
    const userMessage = userInputElement.value.trim();
    if (userMessage === "") return;

    addUserMessage(userMessage);

    let response;
    switch (userMessage.toLowerCase()) {
        case "hi":
            response = "Hi, I'm SUKU , an AI assistant for placement preparation.";
            break;
        case "what can you do for me":
            response = "I can do many things related to placement. How can I assist you?";
            break;
        default:
            response = "I'm sorry, I did not understand.";
            break;
    }

    addChatbotMessage(response);
});

// Function to start speech recognition
function startSpeechRecognition() {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
        addChatbotMessage("Wating...");
        return;
    }

    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        addUserMessage(spokenText);

        let response;
        switch (spokenText.toLowerCase()) {
            case "hi":
                response = "Hi, I'm SUKU, an AI assistant for placement preparation.";
                break;
            case "what can you do for me?":
                response = "I can do many things related to placement. How can I assist you?";
                break;
            default:
                response = "I'm sorry, I did not understand.";
                break;
        }

        addChatbotMessage(response);
    };

    recognition.onerror = (event) => {
        addChatbotMessage("wait...");
    };

    recognition.start();
}

// Mic button event listener
micButton.addEventListener("click", startSpeechRecognition);

// Initial state for the chatbot
chatbot.style.display = "block";
toggleChatbot();

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        console.log('Result:', event.results[0][0].transcript);
    };

    recognition.onerror = (event) => {
        console.error('Error:', event.error);
    };

    recognition.start();
} else {
    console.log("Speech Recognition not supported.");
}