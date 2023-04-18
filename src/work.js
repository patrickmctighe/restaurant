import { printLinks } from "./printLinks";
import { swLinks } from "./swLinks.js";
import './work.css'
const createWork = () => {
    // content area
  const workTab = document.querySelector(".con");

//print title and links
  const printHead = document.createElement("h1");
  printHead.innerHTML = "PRINT";
  const printList = document.createElement("ul");
  for (let i = 0; i < printLinks.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class","list")
    const a = document.createElement("a");
    a.setAttribute('class',"aList")
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
  for(let i = 0; i < swLinks.length; i++){
    const li = document.createElement("li");
    li.setAttribute("class","list")
    const a = document.createElement("a");
    a.setAttribute('class',"aList")
    a.textContent = swLinks[i].text;
    a.setAttribute("href", swLinks[i].url);
    li.appendChild(a);
    swList.appendChild(li);
  }
  swHead.appendChild(swList);

  workTab.append(printHead, swHead);

  return workTab;
};

export { createWork };
