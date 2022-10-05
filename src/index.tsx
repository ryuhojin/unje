import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Root from "./Root";

const { NODE_ENV } = process.env
console.log(NODE_ENV)
alert(NODE_ENV);
const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>
);
