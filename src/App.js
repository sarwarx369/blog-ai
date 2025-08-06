import React, { useState, useEffect } from "react";
import BlogSearch from "./components/BlogSearch";
import {
  User,
  Eye,
  DollarSign,
  FileText,
  Clock,
  Plus,
  TrendingUp,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const BloggingAI = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [totalEarnings, setTotalEarnings] = useState(30.7);
  const [totalViews, setTotalViews] = useState(15351);
  const [publishedPosts, setPublishedPosts] = useState(2);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "10 AI Tools That Will Change Your Life in 2025",
      content:
        "Artificial Intelligence is revolutionizing how we work, create, and live. Here are the top 10 AI tools that are transforming industries and creating new opportunities for businesses and individuals alike.",
      views: 8245,
      earnings: 18.3,
      createdAt: "2025-01-15",
    },
    {
      id: 2,
      title: "The Future of Remote Work: Trends and Predictions",
      content:
        "Remote work has become the new normal. Let's explore what the future holds for distributed teams, digital nomads, and the evolving workplace culture in our interconnected world.",
      views: 7106,
      earnings: 12.4,
      createdAt: "2025-01-12",
    },
  ]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAIContent = async (title) => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const aiTopics = [
      "Technology and Innovation",
      "Digital Marketing Strategies",
      "Personal Development",
      "Health and Wellness",
      "Financial Freedom",
      "AI and Machine Learning",
      "Cryptocurrency and Blockchain",
      "E-commerce Success Stories",
      "Social Media Marketing",
      "Content Creation Tips",
    ];

    const randomTopic = aiTopics[Math.floor(Math.random() * aiTopics.length)];
    const content = `This is an AI-generated comprehensive article about ${
      title || randomTopic
    }. The content explores current trends, emerging technologies, and practical strategies that can help readers succeed in today's competitive landscape. From basic concepts to advanced techniques, this guide covers everything you need to know about ${
      title || randomTopic
    }. We'll dive deep into real-world applications, case studies, and actionable insights that you can implement immediately to see results.`;

    const newViews = Math.floor(Math.random() * 2000) + 500;
    const newEarnings =
      Math.floor(newViews * 0.002 * 100) / 100 + Math.random() * 3;

    const newPost = {
      id: posts.length + 1,
      title: title || `Complete Guide to ${randomTopic}`,
      content: content,
      views: newViews,
      earnings: newEarnings,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setPosts([newPost, ...posts]);
    setPublishedPosts(publishedPosts + 1);
    setTotalViews(totalViews + newPost.views);
    setTotalEarnings(totalEarnings + newPost.earnings);
    setNewPostTitle("");
    setIsGenerating(false);
  };

  const DashboardCard = ({ title, value, subtitle, icon: Icon, color }) => (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-300 text-sm font-medium">{title}</h3>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div className="text-white text-2xl font-bold mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{subtitle}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Blog AI
              </h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <User className="w-4 h-4" />
              <span>Welcome, Developer</span>
            </div>
          </div>
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3">
        <div className="flex space-x-6">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentPage === "dashboard"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentPage("posts")}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentPage === "posts"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setCurrentPage("analytics")}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentPage === "analytics"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            Analytics
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto">
        {currentPage === "dashboard" && (
          <div className="space-y-6">
            {/* ✅ BlogSearch Component Added Here */}
            <BlogSearch />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DashboardCard
                title="Total Earnings"
                value={`$${totalEarnings.toFixed(2)}`}
                subtitle={`Available: $${totalEarnings.toFixed(2)}`}
                icon={DollarSign}
                color="text-green-400"
              />
              <DashboardCard
                title="Total Views"
                value={totalViews.toLocaleString()}
                subtitle={`Across ${publishedPosts} posts`}
                icon={Eye}
                color="text-blue-400"
              />
              <DashboardCard
                title="Blog Posts"
                value={publishedPosts}
                subtitle="Published articles"
                icon={FileText}
                color="text-purple-400"
              />
              <DashboardCard
                title="Next Withdrawal"
                value="Available now"
                subtitle="30-day cooldown"
                icon={Clock}
                color="text-yellow-400"
              />
            </div>

            {/* (Rest of the dashboard content continues as before...) */}

            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>AI Content Generator</span>
              </h3>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Enter blog post title or leave empty for AI suggestion"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                  onClick={() => generateAIContent(newPostTitle)}
                  disabled={isGenerating}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 px-6 py-2 rounded-md font-medium flex items-center space-x-2 transition-all"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Generate Post</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {posts.slice(0, 3).map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-white mb-1">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {post.content.substring(0, 120)}...
                      </p>
                      <div className="text-xs text-gray-500 mt-2">
                        Published: {post.createdAt}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-green-400 font-bold text-lg">
                        ${post.earnings.toFixed(2)}
                      </div>
                      <div className="text-gray-400 text-sm flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === "posts" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">All Posts ({posts.length})</h2>
              <button
                onClick={() => generateAIContent("")}
                disabled={isGenerating}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 px-4 py-2 rounded-md font-medium flex items-center space-x-2 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>New AI Post</span>
              </button>
            </div>

            <div className="grid gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.content}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>Created: {post.createdAt}</span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views.toLocaleString()} views</span>
                        </span>
                        <span className="px-2 py-1 bg-green-900 text-green-300 rounded-full text-xs">
                          Published
                        </span>
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-2xl font-bold text-green-400">
                        ${post.earnings.toFixed(2)}
                      </div>
                      <div className="text-gray-400 text-sm">Earned</div>
                      <div className="text-xs text-gray-500 mt-1">
                        ${((post.earnings / post.views) * 1000).toFixed(2)}/1K
                        views
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Analytics Dashboard</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <span>Performance Metrics</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <span className="text-gray-300">
                      Average Views per Post
                    </span>
                    <span className="text-white font-bold">
                      {Math.round(totalViews / publishedPosts).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <span className="text-gray-300">
                      Average Earnings per Post
                    </span>
                    <span className="text-green-400 font-bold">
                      ${(totalEarnings / publishedPosts).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <span className="text-gray-300">
                      Earnings per 1000 Views
                    </span>
                    <span className="text-green-400 font-bold">
                      ${((totalEarnings / totalViews) * 1000).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <span className="text-gray-300">Total Revenue</span>
                    <span className="text-green-400 font-bold">
                      ${totalEarnings.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span>Growth Trends</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Views Growth</span>
                    </div>
                    <span className="text-green-400 font-bold">+23%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Earnings Growth</span>
                    </div>
                    <span className="text-green-400 font-bold">+15%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">Content Production</span>
                    </div>
                    <span className="text-blue-400 font-bold">+50%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">Engagement Rate</span>
                    </div>
                    <span className="text-purple-400 font-bold">+8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Analytics */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">
                Top Performing Posts
              </h3>
              <div className="space-y-3">
                {posts
                  .sort((a, b) => b.earnings - a.earnings)
                  .slice(0, 5)
                  .map((post, index) => (
                    <div
                      key={post.id}
                      className="flex items-center justify-between p-3 bg-gray-700 rounded"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-white font-medium">
                          {post.title}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">
                          ${post.earnings.toFixed(2)}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {post.views.toLocaleString()} views
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
export default BloggingAI;
