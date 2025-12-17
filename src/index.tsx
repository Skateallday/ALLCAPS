import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Second from "./Second.tsx";
import Albums from "./albums";

const rootElement = document.getElementById("root");
const secondElement = document.getElementById("second");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Albums />
    </StrictMode>
  );
}

if (secondElement) {
  createRoot(secondElement).render(
    <StrictMode>
      <Second />
    </StrictMode>
  );
}
