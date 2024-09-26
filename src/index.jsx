import React from "react";
import ReactDOMClient from "react-dom/client";
import { MdP } from "./screens/MdP";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MdP />);
