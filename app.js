document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();

    if (message) {
        // Display user message
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message';
        userMessage.textContent = `You: ${message}`;
        chatBox.appendChild(userMessage);

        // Simulate Copilot response
        const copilotResponse = document.createElement('div');
        copilotResponse.className = 'chat-message';
        copilotResponse.textContent = `Copilot: Here's a suggestion based on "${message}"`;
        chatBox.appendChild(copilotResponse);

        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
