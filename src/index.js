import { createHome } from "./home";

import "./home.css";
function setupTabs() {
  // Show home content by default
  createHome();
}

setupTabs();

export { setupTabs };
