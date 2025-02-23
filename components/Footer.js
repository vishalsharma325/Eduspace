function Footer() {
    return (
        <footer data-name="footer" className="glass mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div data-name="footer-about">
                        <h3 className="text-xl font-bold gradient-text mb-4">FutureAI</h3>
                        <p className="text-gray-300">
                            Pushing the boundaries of artificial intelligence and human interaction.
                        </p>
                    </div>
                    <div data-name="footer-links">
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" className="text-gray-300 hover:text-white">Features</a></li>
                            <li><a href="#demo" className="text-gray-300 hover:text-white">Demo</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-social">
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div data-name="footer-newsletter">
                        <h4 className="font-semibold mb-4">Stay Updated</h4>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="glass-input px-4 py-2 rounded-l-full w-full"
                            />
                            <button className="glass-card px-4 rounded-r-full hover:bg-cyan-600/20">
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
                    <p>&copy; 2024 FutureAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
