import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("React application initializing...");

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
  console.log("React render initiated.");
} else {
  console.error("Root element not found");
}
