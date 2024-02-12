import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

// Import the useClient hook
import useClient from "./hooks/useClient";

export default function Home() {
  // Use the useClient hook to ensure the EmailSection component is only rendered on the client side
  const client = useClient();

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/* Render the EmailSection only on the client side */}
        {client && <EmailSection />}
      </div>
      <Footer />
    </main>
  );
}
