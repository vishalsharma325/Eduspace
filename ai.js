const GEMINI_API_KEY = "AIzaSyD2ihzKvPnTsl3lKyfeHjPC_vlxG2fRtpo"; 
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

async function sendMessage() {
    const inputField = document.getElementById("user-input");
    const userText = inputField.value.trim();
    const chatBox = document.getElementById("chat-box");

    if (!userText) return;

    // Append user message to chat
    chatBox.innerHTML += `<p class="user">${userText}</p>`;
    inputField.value = "";

    // Show "Thinking..." indicator
    chatBox.innerHTML += `<p class="bot" id="loading">Thinking...</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    // API Request
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userText }] }]
            })
        });

        const data = await response.json();
        document.getElementById("loading").remove();

        if (data && data.candidates && data.candidates.length > 0) {
            const botResponse = data.candidates[0].content.parts[0].text;
            chatBox.innerHTML += `<p class="bot">${botResponse}</p>`;
        } else {
            chatBox.innerHTML += `<p class="bot">Sorry, I couldn't understand that.</p>`;
        }
    } catch (error) {
        console.error("Error:", error);
        chatBox.innerHTML += `<p class="bot">Error: Unable to connect to AI.</p>`;
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}
