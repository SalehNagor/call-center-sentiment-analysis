import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import VoiceAnalysisHub from './pages/voice-analysis-hub';
import CustomerInsights from './pages/customer-insights';
import SentimentOverview from './pages/sentiment-overview';
import PerformanceAnalytics from './pages/performance-analytics';
import CallDetails from './pages/call-details';
import AgentPerformanceCards from './pages/agent-performance-cards';
import AdminUserManagement from './pages/admin-user-management';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<SentimentOverview />} />
        <Route path="/voice-analysis-hub" element={<VoiceAnalysisHub />} />
        <Route path="/customer-insights" element={<CustomerInsights />} />
        <Route path="/sentiment-overview" element={<SentimentOverview />} />
        <Route path="/performance-analytics" element={<PerformanceAnalytics />} />
        <Route path="/call-details/:callId" element={<CallDetails />} />
        <Route path="/agent-performance-cards" element={<AgentPerformanceCards />} />
        <Route path="/admin-user-management" element={<AdminUserManagement />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;