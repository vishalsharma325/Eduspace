function Hero() {
    return (
        <section data-name="hero" className="min-h-screen flex items-center justify-center pt-20">
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h1 data-name="hero-title" className="text-5xl md:text-7xl font-bold mb-8">
                    The Future of <span className="gradient-text">AI</span> is Here
                </h1>
                <p data-name="hero-subtitle" className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                    Experience the next generation of artificial intelligence with our cutting-edge platform
                </p>
                <div data-name="hero-cta" className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 rounded-full glass-card text-lg font-semibold hover:bg-cyan-600/20">
                        Get Started
                    </button>
                    <button className="px-8 py-4 rounded-full glass-card text-lg font-semibold hover:bg-purple-600/20">
                        Watch Demo
                    </button>
                </div>
                <div data-name="hero-image" className="mt-20 animate-float">
                    <div className="w-64 h-64 mx-auto glass-card rounded-full flex items-center justify-center">
                        <i className="fas fa-brain text-6xl gradient-text"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
