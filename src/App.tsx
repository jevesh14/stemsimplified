
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BreakthroughBriefs from "./pages/BreakthroughBriefs";
import DelveDeeper from "./pages/DelveDeeper";
import Games from "./pages/Games";
import Profile from "./pages/Profile";
import About from "./pages/About";
import RecentArticles from "./pages/RecentArticles";
import ArticleRequests from "./pages/ArticleRequests";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/breakthrough-briefs" element={<BreakthroughBriefs />} />
          <Route path="/delve-deeper" element={<DelveDeeper />} />
          <Route path="/games" element={<Games />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/recent-articles" element={<RecentArticles />} />
          <Route path="/article-requests" element={<ArticleRequests />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
