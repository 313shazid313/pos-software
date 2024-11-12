
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
const App = () => {

  useEffect(() => {
    initFlowbite();
  }, []);


  return (
    <Navigation />
  )
}

export default App
