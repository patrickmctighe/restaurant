import { createHome } from "./home";
import { createWork } from "./work";
import { createAbout } from "./about";

function setupTabs() {
  // Show home content by default
  createHome();
}

setupTabs();

export { setupTabs };
