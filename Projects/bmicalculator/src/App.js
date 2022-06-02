import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import BmiCalculator from "./components/BmiCalculator";
import Nav from "./components/base/Nav";
import Calculations from "./components/pages/Calculations";
import Results from "./components/pages/ResultPage";
import MainContextProvider from "./context/MainContextProvider";

function App() {
  return (
    <MainContextProvider>
      <ChakraProvider>
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<BmiCalculator />} />
          <Route path="/calculations" element={<Calculations />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </ChakraProvider>
    </MainContextProvider>
  );
}

export default App;
