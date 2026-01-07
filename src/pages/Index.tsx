import { useState } from "react";
import Header from "../components/Header";
import Home from "./Home";
import Catalog from "./Catalog";
import Support from "./Support";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "catalog":
        return <Catalog />;
      case "support":
        return <Support />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
};

export default Index;