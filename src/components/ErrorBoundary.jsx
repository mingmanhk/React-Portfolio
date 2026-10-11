import { Component } from "react";

/** Keeps a rendering error from blanking the whole page. */
export default class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    console.error("Render error:", error, info.componentStack);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="error-page">
        <h1>This page didn&apos;t load correctly.</h1>
        <p>Reload to try again, or reach Victor on <a href="https://www.linkedin.com/in/mingmanhk">LinkedIn</a>.</p>
        <button type="button" className="button button--primary" onClick={() => window.location.reload()}>
          Reload page
        </button>
      </main>
    );
  }
}
