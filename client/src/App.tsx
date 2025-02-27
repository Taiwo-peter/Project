import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Signup from "@/pages/Signup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import service pages
import CloudMigration from "@/pages/services/CloudMigration";
import CloudSecurity from "@/pages/services/CloudSecurity";
import CloudOptimization from "@/pages/services/CloudOptimization";
import ManagedServices from "@/pages/services/ManagedServices";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/cloud-migration" component={CloudMigration} />
        <Route path="/services/cloud-security" component={CloudSecurity} />
        <Route path="/services/cloud-optimization" component={CloudOptimization} />
        <Route path="/services/managed-services" component={ManagedServices} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;