function App() {
    return (
        <div data-name="app">
            <Header />
            <main>
                <Hero />
                <Features />
                <AIChat />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
