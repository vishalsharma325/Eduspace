function Features() {
    const features = [
        {
            icon: "fa-robot",
            title: "Advanced AI",
            description: "State-of-the-art artificial intelligence powered by cutting-edge algorithms"
        },
        {
            icon: "fa-brain",
            title: "Neural Networks",
            description: "Deep learning capabilities that evolve and improve over time"
        },
        {
            icon: "fa-microchip",
            title: "Smart Processing",
            description: "Lightning-fast processing for real-time AI applications"
        }
    ];

    return (
        <section data-name="features" id="features" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 data-name="features-title" className="text-4xl font-bold text-center mb-16">
                    <span className="gradient-text">Revolutionary</span> Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} data-name={`feature-${index}`} className="glass-card p-8">
                            <div className="text-4xl mb-6 gradient-text">
                                <i className={`fas ${feature.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
