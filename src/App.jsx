import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import MainSection from "./components/mainSection/MainSection";
import Navbar from "./components/navbar/Navbar";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [tickets, setTickets] = useState([]);
  
  const [inProgress, setInProgress] = useState(() => {
    const saved = localStorage.getItem("inProgressTickets");
    return saved ? JSON.parse(saved) : [];
  });

  const [resolved, setResolved] = useState(() => {
    const saved = localStorage.getItem("resolvedTickets");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Fetch tickets
  useEffect(() => {
    fetch("/tickets.json")
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);

  // ✅ Save inProgress to localStorage
  useEffect(() => {
    localStorage.setItem("inProgressTickets", JSON.stringify(inProgress));
  }, [inProgress]);

  // ✅ Save resolved to localStorage
  useEffect(() => {
    localStorage.setItem("resolvedTickets", JSON.stringify(resolved));
  }, [resolved]);

  // ✅ Add to In Progress
  const handleAddToProgress = (ticket) => {
    const isExist = inProgress.find((item) => item.id === ticket.id);

    if (!isExist) {
      setInProgress((prev) => [...prev, ticket]);
      toast.info(`Ticket #${ticket.id} added to In-Progress!`);
    } else {
      toast.warning(`Ticket #${ticket.id} is already in In-Progress!`);
    }
  };

  // ✅ Complete Ticket
  const handleComplete = (ticket) => {
    setTickets((prev) => prev.filter((item) => item.id !== ticket.id));
    setInProgress((prev) => prev.filter((item) => item.id !== ticket.id));
    setResolved((prev) => [...prev, ticket]);

    toast.success(`Ticket #${ticket.id} completed successfully!`);
  };


  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />
        <MainSection 
          tickets={tickets} 
          inProgress={inProgress}
          resolved={resolved}
          handleAddToProgress={handleAddToProgress}
          handleComplete={handleComplete}
        />
        <Footer />
        <ToastContainer position="top-right" />

      </div>
    </>
  );
}

export default App;
