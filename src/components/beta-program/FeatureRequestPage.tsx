import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  Lightbulb,
  Users,
  Zap,
  CheckCircle,
  Shield,
  Mail,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import feedbackService from "../../lib/utils/feedbackService";
import { useToast } from "../../hooks/use-toast";

// Define the feature request type matching backend
interface FeatureRequest {
  id: string;
  user_id: string | null;
  title: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  votes: number;
  created_at: string;
  updated_at: string;
  implemented_at: string | null;
}

const FeatureRequestPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    featureTitle: "",
    featureDescription: "",
    useCase: "",
    category: "",
    priority: "",
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // State for feature requests
  const [featureRequests, setFeatureRequests] = useState<FeatureRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Valid categories and priorities from backend
  const validCategories = [
    { value: "ui", label: "UI/UX" },
    { value: "functionality", label: "Functionality" },
    { value: "performance", label: "Performance" },
    { value: "content", label: "Content" },
    { value: "other", label: "Other" },
  ];

  const validPriorities = [
    { value: "nice-to-have", label: "Nice to have" },
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
    { value: "critical", label: "Critical" },
  ];

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  // Fetch feature requests from backend
  const fetchFeatureRequests = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await feedbackService.getFeatureRequests();
      if (response.success && response.requests) {
        // Sort by votes descending (backend already does this)
        setFeatureRequests(response.requests);
      } else {
        setError("Failed to load feature requests");
      }
    } catch (err) {
      console.error("Error fetching feature requests:", err);
      setError("Failed to load feature requests. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle voting for a feature
  const handleVote = async (featureId: string) => {
    try {
      const result = await feedbackService.voteForFeature(featureId);
      if (result.success) {
        // Optimistically update local state
        setFeatureRequests((prev) =>
          prev.map((feature) =>
            feature.id === featureId
              ? { ...feature, votes: result.votes || feature.votes + 1, hasVoted: true }
              : feature
          )
        );
        toast({
          title: "Vote Recorded",
          description: "Thank you for voting! Your vote helps prioritize features.",
        });
      } else {
        toast({
          title: "Unable to Vote",
          description: result.message || "You may have already voted for this feature.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error voting for feature:", error);
      toast({
        title: "Error",
        description: "Failed to submit vote. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Handle commenting on a feature
  const handleComment = async (featureId: string) => {
    try {
      const result = await feedbackService.addComment(featureId, "I'm interested in this feature!");
      if (result.success) {
        toast({
          title: "Interest Registered",
          description: "Thank you for your interest! Our team will consider your feedback.",
        });
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to register interest.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error commenting on feature:", error);
      toast({
        title: "Error",
        description: "Failed to register interest. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.featureTitle.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please provide a feature title",
      });
      return;
    }

    if (!formData.featureDescription.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please provide a detailed description of your feature",
      });
      return;
    }

    if (!formData.useCase.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please describe a use case for this feature",
      });
      return;
    }

    if (!formData.category) {
      setSubmitStatus({
        type: "error",
        message: "Please select a category for your feature",
      });
      return;
    }

    if (!formData.priority) {
      setSubmitStatus({
        type: "error",
        message: "Please select a priority level for your feature",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Send data to the backend API
      const result = await feedbackService.submitFeatureRequest({
        title: formData.featureTitle,
        description: `${formData.featureDescription}\n\nUse Case: ${formData.useCase}`,
        category: formData.category,
        priority: formData.priority,
      });

      if (result.success) {
        // Show success message
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your feature request! Our team will review it and consider it for future development. You'll receive a confirmation email with your request ID.",
        });

        // Reset form
        setFormData({
          featureTitle: "",
          featureDescription: "",
          useCase: "",
          category: "",
          priority: "",
        });

        // Refresh the feature requests list
        fetchFeatureRequests();
      } else {
        throw new Error(result.message || "Failed to submit feature request");
      }
    } catch (error) {
      console.error("Error submitting feature request:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "There was an error submitting your feature request. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Status badge styling
  const getStatusBadge = (status: string) => {
    const badges: Record<string, string> = {
      open: "bg-gray-100 text-gray-700",
      planned: "bg-blue-100 text-blue-700",
      in_progress: "bg-yellow-100 text-yellow-700",
      implemented: "bg-green-100 text-green-700",
      closed: "bg-red-100 text-red-700",
    };
    return badges[status] || "bg-gray-100 text-gray-700";
  };

  // Priority badge styling
  const getPriorityBadge = (priority: string) => {
    const badges: Record<string, string> = {
      "nice-to-have": "bg-gray-100 text-gray-700",
      low: "bg-blue-100 text-blue-700",
      medium: "bg-yellow-100 text-yellow-700",
      high: "bg-orange-100 text-orange-700",
      critical: "bg-red-100 text-red-700",
    };
    return badges[priority] || "bg-gray-100 text-gray-700";
  };

  // Category label
  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      ui: "UI/UX",
      functionality: "Functionality",
      performance: "Performance",
      content: "Content",
      other: "Other",
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen px-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 mb-8">
        <div className="container-custom py-6">
          <Link to="/" className="inline-flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <div className="text-center">
            <Lightbulb className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h1 className="text-3xl font-bold mb-2">Request a Feature</h1>
            <p className="text-lg text-gray-600">
              Help us shape the future of ColabWize by suggesting new features and
              improvements
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8 max-w-5xl">
        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How Feature Requests Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-blue-600 mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit</h3>
              <p className="text-gray-600">
                Share your idea with our team and community. Public or anonymous submissions welcome.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Vote</h3>
              <p className="text-gray-600">
                Community members vote on features they want. Sorting is by votes + recency.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Build</h3>
              <p className="text-gray-600">
                We prioritize and build the most requested features. Status updates: Open → Planned → In Progress → Implemented.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Request Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Submit Your Feature Request</h2>
          <div className="border border-gray-200 rounded-xl p-8 mb-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="featureTitle"
                  className="block text-sm font-medium mb-1">
                  Feature Title
                </label>
                <input
                  type="text"
                  id="featureTitle"
                  value={formData.featureTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Briefly describe your feature idea"
                />
              </div>

              <div>
                <label
                  htmlFor="featureDescription"
                  className="block text-sm font-medium mb-1">
                  Detailed Description
                </label>
                <textarea
                  id="featureDescription"
                  value={formData.featureDescription}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your feature in detail. What problem does it solve? How would you use it?"></textarea>
              </div>

              <div>
                <label
                  htmlFor="useCase"
                  className="block text-sm font-medium mb-1">
                  Use Case
                </label>
                <textarea
                  id="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe a specific situation where this feature would be useful"></textarea>
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select a category</option>
                  {validCategories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium mb-1">
                  Priority Level
                </label>
                <select
                  id="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">How important is this feature to you?</option>
                  {validPriorities.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              {/* Status message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50">
                  {isSubmitting ? "Submitting..." : "Submit Feature Request"}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Popular Feature Requests */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Community Feature Requests</h2>
          <p className="text-gray-600 mb-6">
            Browse and vote on feature requests from the community. Sorted by votes and recency.
            You can submit your own request above or vote on existing ones.
          </p>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg">
              {error}
              <button
                onClick={fetchFeatureRequests}
                className="ml-4 text-blue-600 hover:underline text-sm">
                Retry
              </button>
            </div>
          )}

          {/* Loading indicator */}
          {loading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600">Loading feature requests...</span>
            </div>
          )}

          {!loading && !error && featureRequests.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No feature requests yet. Be the first to submit one!
            </div>
          )}

          {!loading && !error && featureRequests.length > 0 && (
            <div className="space-y-4">
              {featureRequests.map((feature) => (
                <div key={feature.id} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(feature.status)}`}>
                          {feature.status.replace("_", " ")}
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityBadge(feature.priority)}`}>
                          {feature.priority}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {getCategoryLabel(feature.category)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                        <Star className="h-4 w-4 mr-1 text-yellow-500" />
                        {feature.votes.toLocaleString()} votes
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleVote(feature.id)}
                      className={`text-sm font-medium flex items-center gap-1 ${
                        (feature as any).hasVoted
                          ? "text-gray-500 cursor-not-allowed"
                          : "text-blue-600 hover:text-gray-700"
                      }`}
                      disabled={(feature as any).hasVoted}>
                      <Star className={`h-4 w-4 ${(feature as any).hasVoted ? "fill-current" : ""}`} />
                      {(feature as any).hasVoted ? "Voted" : "Vote"}
                    </button>
                    <span className="text-gray-300">•</span>
                    <button
                      onClick={() => handleComment(feature.id)}
                      className="text-sm font-medium text-gray-600 hover:text-gray-800">
                      Comment / Show Interest
                    </button>
                    <span className="text-gray-300 ml-auto text-xs">
                      Submitted {formatDate(feature.created_at)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Community Guidelines */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Be specific and detailed in your feature descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Search existing requests before submitting a new one</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Be respectful and constructive in comments and discussions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Vote for features you genuinely want to see implemented</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Use the "Use Case" field to explain your specific workflow need</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What Happens After You Submit?</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Review & Triage</h3>
                  <p className="text-gray-600 text-sm">
                    Our product team reviews all submissions within 5 business days.
                    We check for duplicates, clarity, and alignment with our roadmap.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Star className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Community Voting</h3>
                  <p className="text-gray-600 text-sm">
                    Approved requests are published for community voting.
                    Top-voted requests get prioritized in planning cycles.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Zap className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Development & Updates</h3>
                  <p className="text-gray-600 text-sm">
                    When a feature moves to "In Progress", the original requester
                    is notified via email. Status updates are posted on the request.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Release & Recognition</h3>
                  <p className="text-gray-600 text-sm">
                    Implemented features are announced in release notes.
                    Contributors are acknowledged in our credits and Discord.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Roadmap */}
        <div className="text-center mt-12">
          <Link
            to="/roadmap"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequestPage;