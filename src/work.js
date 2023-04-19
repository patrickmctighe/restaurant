import { printLinks } from "./printLinks";
import { swLinks } from "./swLinks.js";
import "./work.css";
import "./btn.css"
import { createHome } from "./home";
import { createAbout } from "./about";

const createWork = () => {
  const tabs = document.createElement("div");
  tabs.setAttribute("class","tabs")
  const page = document.querySelector(".con");
  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("class", "btn");
  homeBtn.innerHTML = "HOME";
  const workBtn = document.createElement("button");
  workBtn.setAttribute("class", "btn");
  workBtn.innerHTML = "WORK";
  const aboutBtn = document.createElement("button");
  aboutBtn.setAttribute("class", "btn");
  aboutBtn.innerHTML = "ABOUT";
  page.append(tabs);
  tabs.append(homeBtn, workBtn, aboutBtn);

  homeBtn.addEventListener("click", () => {
    page.innerHTML = "";
    createHome();
  });

  aboutBtn.addEventListener("click", () => {
    page.innerHTML = "";
    createAbout();
  });

  //print title and links
  const printHead = document.createElement("h1");
  printHead.setAttribute("class","print")
  printHead.innerHTML = "PRINT";
  const printList = document.createElement("ul");
  for (let i = 0; i < printLinks.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list");
    const a = document.createElement("a");
    a.setAttribute("class", "aList");
    a.textContent = printLinks[i].text;
    a.setAttribute("href", printLinks[i].url);
    li.appendChild(a);
    printList.appendChild(li);
  }
  printHead.appendChild(printList);

  // selected writing and links
  const swHead = document.createElement("h1");
  swHead.innerHTML = "SELECTED WRITING";
  const swList = document.createElement("ul");
  for (let i = 0; i < swLinks.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list");
    const a = document.createElement("a");
    a.setAttribute("class", "aList");
    a.textContent = swLinks[i].text;
    a.setAttribute("href", swLinks[i].url);
    li.appendChild(a);
    swList.appendChild(li);
  }
  swHead.appendChild(swList);

  page.append(printHead, swHead);

  return page;
};

export { createWork };
