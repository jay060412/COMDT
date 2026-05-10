import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("ComDoctor: App initializing...");

window.addEventListener('error', (event) => {
  console.error("ComDoctor Runtime Error:", event.error);
});

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
  console.log("ComDoctor: Render sequence started.");
} else {
  console.error("ComDoctor: Critical Error - Root element not found.");
}
