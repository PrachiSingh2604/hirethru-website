import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add fontawesome
const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
document.head.appendChild(fontAwesomeLink);

// Add Google Font - Inter
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
document.head.appendChild(fontLink);

// Add page title
const titleElement = document.createElement("title");
titleElement.textContent = "HireThru - IT Recruitment Services";
document.head.appendChild(titleElement);

createRoot(document.getElementById("root")!).render(<App />);
