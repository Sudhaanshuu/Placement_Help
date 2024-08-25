// protection.js

// Warn the user when trying to navigate away from the page
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = '';
    return '';
});

// Prompt the user when trying to change tabs or minimize the window
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        alert('Violation of exam environment: You are leaving the exam page.');
    }
});

// Prompt the user when attempting to copy text
document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('Violation of exam environment: Copying text is not allowed.');
});

// Prompt the user when attempting to paste text
document.addEventListener('paste', function(e) {
    e.preventDefault();
    alert('Violation of exam environment: Pasting text is not allowed.');
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Violation of exam environment: Right-click is disabled.');
});

// Prevent keyboard shortcuts (like Ctrl+C, Ctrl+V)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && (e.key === 'c' || e.key === 'v')) || e.key === 'F12') {
        e.preventDefault();
        alert('Violation of exam environment: Keyboard shortcuts are disabled.');
    }
});