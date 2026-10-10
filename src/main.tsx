import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// After a new deploy, an open tab may request page chunks that no longer exist. Reload once into the new build.
window.addEventListener('vite:preloadError', (event) => {
  try {
    if (sessionStorage.getItem('chunk-reload')) return;
    sessionStorage.setItem('chunk-reload', '1');
  } catch {
    /* storage blocked: still reload once per page load */
  }
  event.preventDefault();
  window.location.reload();
});
window.addEventListener('load', () => {
  try {
    sessionStorage.removeItem('chunk-reload');
  } catch {
    /* ignore */
  }
});

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Production pages are server-rendered by scripts/prerender.mjs, so hydrate them; the dev server sends an empty root.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
