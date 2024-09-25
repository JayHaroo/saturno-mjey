import React from "react";
import ReactDOMClient from "react-dom/client";
import { Sm } from "./screens/Sm";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Sm />);
