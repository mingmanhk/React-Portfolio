import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./components/ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Analytics } from "@vercel/analytics/react";

// Lazy load App component for code splitting
const App = React.lazy(() => import("./App"));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--bg-900, #020617)',
    color: 'var(--text-primary, #f8fafc)'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '4px solid rgba(24, 198, 255, 0.2)',
        borderTopColor: '#18c6ff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 1rem'
      }}></div>
      <p>Loading...</p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <App />
        <Analytics />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
