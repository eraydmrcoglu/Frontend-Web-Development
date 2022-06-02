import "./App.css";
import { Container } from "@chakra-ui/react";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import RickMortyContainer from "./containers/RickMortyContainer";

function App() {
  return (
    <ErrorBoundary>
      <Container maxW="container.lg" my={"30px"} pt={"20px"}>
        <RickMortyContainer />
      </Container>
    </ErrorBoundary>
  );
}

export default App;
