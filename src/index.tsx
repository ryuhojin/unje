import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Root from "@/Root";
import "@/styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>
);
