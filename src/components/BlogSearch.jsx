// src/components/BlogSearch.jsx

import { useState } from "react";

export default function BlogSearch() {
  const [topic, setTopic] = useState("");

  const handleSearch = () => {
    if (!topic.trim()) {
      alert("Please enter a blog topic first.");
      return;
    }

    const dork = `site:medium.com OR site:dev.to OR site:hashnode.com "${topic}"`;
    const searchURL = `https://www.google.com/search?q=${encodeURIComponent(
      dork
    )}`;

    window.open(searchURL, "_blank");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        🔍 AI-Free Blog Search
      </h2>

      <input
        type="text"
        placeholder="Enter your blog topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Search on Google using Dork
      </button>
    </div>
  );
}
