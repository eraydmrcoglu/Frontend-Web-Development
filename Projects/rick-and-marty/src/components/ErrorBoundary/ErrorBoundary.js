import { Component } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

export class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error && this.state.errorInfo) {
      return (
        <Alert status="error">
          <AlertIcon />
          An error occurred.
        </Alert>
      );
    }
    return this.props.children;
  }
}
