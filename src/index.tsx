import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Root from "./Root";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>
);
