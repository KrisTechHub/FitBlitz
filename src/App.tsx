import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Home from "./components/home";
import Benefits from "./components/benefits";
import OurClasses from "./components/ourclasses";
import ContactUs from "./components/contactus";
import { SelectedPage  } from "./shared/types";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopeOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopeOfPage(true);
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopeOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <div className="app bg-gray-20">
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSlectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
