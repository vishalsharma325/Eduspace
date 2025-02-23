import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-indigo-600">P2P Learning</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/peer-matching" className="text-gray-700 hover:text-indigo-600">Peer Matching</Link>
          <Link to="/skill-exchange" className="text-gray-700 hover:text-indigo-600">Skill Exchange</Link>
          <Link to="/live-sessions" className="text-gray-700 hover:text-indigo-600">Live Sessions</Link>
          <Link to="/ai-assistant" className="text-gray-700 hover:text-indigo-600">AI Assistant</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
