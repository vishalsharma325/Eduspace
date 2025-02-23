function AIChat() {
    const [messages, setMessages] = React.useState([]);
    const [input, setInput] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!input.trim()) return;

        try {
            const apiKey = getGeminiKey();
            if (!apiKey) {
                throw new Error('API key not available');
            }

            setIsLoading(true);
            const userMessage = { role: 'user', content: input };
            setMessages(prev => [...prev, userMessage]);
            setInput("");

            const response = await invokeAIAgent(
                "You are a helpful AI assistant.",
                input
            );

            const aiMessage = { role: 'ai', content: response };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            reportError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section data-name="ai-chat" id="demo" className="py-20">
            <div className="max-w-3xl mx-auto px-6">
                <div data-name="chat-container" className="glass-card p-6 min-h-[500px] flex flex-col">
                    <div data-name="chat-messages" className="flex-1 space-y-4 mb-4 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                data-name={`message-${index}`}
                                className={`p-4 glass-card ${
                                    message.role === 'user' ? 'ml-auto' : 'mr-auto'
                                } max-w-[80%]`}
                            >
                                {message.content}
                            </div>
                        ))}
                        {isLoading && (
                            <div data-name="loading-message" className="p-4 glass-card">
                                <i className="fas fa-circle-notch fa-spin"></i> AI is thinking...
                            </div>
                        )}
                    </div>
                    <form onSubmit={handleSubmit} className="flex gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 glass-input rounded-full px-6 py-3 text-white"
                            placeholder="Type your message..."
                            data-name="chat-input"
                        />
                        <button
                            type="submit"
                            className="glass-card px-6 py-3 rounded-full hover:bg-cyan-600/20"
                            disabled={isLoading}
                            data-name="send-button"
                        >
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
