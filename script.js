function sendMessage() {
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');
    if (input.value) {
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${input.value}`;
        messages.appendChild(userMessage);

        // Simulate Copilot response
        const copilotResponse = document.createElement('div');
        copilotResponse.textContent = `Copilot: Here’s a suggestion based on "${input.value}"`;
        messages.appendChild(copilotResponse);

        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
}
