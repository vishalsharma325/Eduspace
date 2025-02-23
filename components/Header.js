function Header() {
    return (
        <header data-name="header" className="glass fixed w-full z-50 px-6 py-4">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <div data-name="logo" className="text-2xl font-bold gradient-text">
                    FutureAI
                </div>
                <div data-name="nav-links" className="hidden md:flex space-x-8">
                    <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
                    <a href="#demo" className="hover:text-cyan-400 transition-colors">Demo</a>
                    <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                </div>
                <button data-name="try-button" className="px-6 py-2 rounded-full glass-card hover:bg-cyan-600/20">
                    Try Now
                </button>
            </nav>
        </header>
    );
}
