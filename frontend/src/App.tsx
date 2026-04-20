import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { PageTransition } from "@/components/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <HashRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <AnimatedRoutes>
                <Route path="/" element={<PageTransition transition="fade"><Index /></PageTransition>} />
                <Route path="/about" element={<PageTransition transition="fade"><About /></PageTransition>} />
                <Route path="/services" element={<PageTransition transition="fade"><Services /></PageTransition>} />
                <Route path="/news" element={<PageTransition transition="fade"><News /></PageTransition>} />
                <Route path="/contact" element={<PageTransition transition="fade"><Contact /></PageTransition>} />
                <Route path="*" element={<PageTransition transition="fade"><NotFound /></PageTransition>} />
              </AnimatedRoutes>
            </main>
            <Footer />
            {/* Mobile floating CTA */}
            <div className="md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'var(--brand-navy)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '10px 16px', display: 'flex', gap: '8px' }}>
              <a href="tel:13958503261" style={{ flex: 1, textAlign: 'center', backgroundColor: 'var(--brand-gold)', color: 'var(--brand-navy)', padding: '10px 0', borderRadius: '0px', fontWeight: 600, fontSize: '14px', textDecoration: 'none', fontFamily: 'var(--font-serif)' }}>📱 手机咨询</a>
              <a href="tel:057683886633" style={{ flex: 1, textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', padding: '10px 0', borderRadius: '0px', fontWeight: 600, fontSize: '14px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'var(--font-serif)' }}>☎️ 座机咨询</a>
            </div>
          </div>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
