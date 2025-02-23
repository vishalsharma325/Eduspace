import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users, BookOpen, Video, Brain } from "lucide-react";
import FeatureCard from "./FeatureCard"; // Import FeatureCard
import PeerMatchingPage from "./PeerMatching";
import SkillExchangePage from "./SkillExchange";
import LiveSessionsPage from "./LiveSessions";
import AiAssistantPage from "./AIAssistant";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connect, Learn, and Grow Together
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our peer-to-peer learning platform where knowledge sharing meets AI-powered matchmaking.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Users}
              title="Peer Matching"
              description="Our AI-powered system connects you with the perfect learning partner based on your skills and goals."
              link="/peer-matching"
            />
            <FeatureCard
              icon={BookOpen}
              title="Skill Exchange"
              description="Share your expertise and learn new skills in a collaborative environment."
              link="/skill-exchange"
            />
            <FeatureCard
              icon={Video}
              title="Live Sessions"
              description="Engage in real-time video sessions for interactive learning experiences."
              link="/live-sessions"
            />
            <FeatureCard
              icon={Brain}
              title="AI Assistant"
              description="Get personalized learning recommendations powered by advanced LLaMA AI."
              link="/ai-assistant"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peer-matching" element={<PeerMatchingPage />} />
        <Route path="/skill-exchange" element={<SkillExchangePage />} />
        <Route path="/live-sessions" element={<LiveSessionsPage />} />
        <Route path="/ai-assistant" element={<AiAssistantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
