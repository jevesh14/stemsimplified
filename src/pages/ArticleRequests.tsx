import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ArticleRequests = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t9gty7m",    
        "template_qde9lgg",     
        {
          topic: topic,
          description: description,
        },
        "dLB5rDPUqEO--3lw9"        
      )
      .then(() => {
        toast.success("Article request sent successfully!");
        setTopic("");
        setDescription("");
      })
      .catch(() => {
        toast.error("Failed to send the request. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          Request An Article
        </h1>
        <p className="text-gray-600 mb-8">
          Is there a STEM topic you'd like us to explain? Submit your request below.
        </p>

        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Topic
              </label>
              <Input
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Quantum Computing, Renewable Energy"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please describe what aspects of this topic you'd like us to cover..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticleRequests;
