function sendMessage() {
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');
    if (input.value) {
        const now = new Date();
        const timestamp = now.toLocaleTimeString();

        const userMessage = document.createElement('div');
        userMessage.textContent = `${timestamp} - You: ${input.value}`;
        messages.appendChild(userMessage);

        // Simulate Copilot response
        const copilotResponse = document.createElement('div');
        copilotResponse.textContent = `${timestamp} - Copilot: Here’s a suggestion based on "${input.value}"`;
        messages.appendChild(copilotResponse);

        input.value = '';  // Clear the input field
        messages.scrollTop = messages.scrollHeight;
    }
}
