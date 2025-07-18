import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Careers from "./pages/careers";
import Features from "./pages/features";
import HomePage from "./pages/homepage";
import AboutUs from "./pages/aboutUs";
import Roadmap from "./pages/roadmap";
import UserGrowth from "./pages/userGrowth";
import CherrySniper from "./pages/cherrySniper";
import CherryToken from "./pages/cherry";
import Dashboard from "./pages/dashboard";
import PageLayout from "./layouts/PageLayout";
import ScrollToTop from "./components/ScrollToTop";
import SolanaWalletProvider from "./components/WalletProvider";
import Rewards from "./pages/rewards/index";

function App() {
  const location = useLocation();

  return (
    <SolanaWalletProvider>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageLayout>
                <HomePage />
              </PageLayout>
            }
          />
          <Route
            path="/homepage"
            element={
              <PageLayout>
                <HomePage />
              </PageLayout>
            }
          />
          <Route
            path="/careers"
            element={
              <PageLayout>
                <Careers />
              </PageLayout>
            }
          />
          <Route
            path="/features"
            element={
              <PageLayout>
                <Features />
              </PageLayout>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <PageLayout>
                <AboutUs />
              </PageLayout>
            }
          />
          <Route
            path="/roadmap"
            element={
              <PageLayout>
                <Roadmap />
              </PageLayout>
            }
          />
          <Route
            path="/userGrowth"
            element={
              <PageLayout>
                <UserGrowth />
              </PageLayout>
            }
          />
          <Route
            path="/cherrySniper"
            element={
              <PageLayout>
                <CherrySniper />
              </PageLayout>
            }
          />
          <Route
            path="/cherry"
            element={
              <PageLayout>
                <CherryToken />
              </PageLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PageLayout>
                <Dashboard />
              </PageLayout>
            }
          />
          <Route
            path="/rewards"
            element={
              <PageLayout>
                <Rewards />
              </PageLayout>
            }
          />
          <Route
            path="*"
            element={
              <PageLayout>
                <HomePage />
              </PageLayout>
            }
          />
        </Routes>
      </AnimatePresence>
    </SolanaWalletProvider>
  );
}

export default App;
