import './about.css'
const createAbout = () => {
  const aboutTab = document.querySelector(".con");
  const aboutText1 = document.createElement("h3");
  aboutText1.setAttribute("class","text")
  const aboutText2 = document.createElement("h3");
  aboutText2.setAttribute("class","text")
  const aboutText3 = document.createElement("h3");
  aboutText3.setAttribute("class","text")
  aboutText1.innerHTML =
    " Aimée has her Master of Letters in Creative Writing from the University of Glasgow. She lives in North Carolina and is working on her second novel. She is the co-founder of <a href='https://www.the-crawfish.com/'>The Crawfish</a>.";
  aboutText2.innerHTML =
    "Aimée is the grand-niece of Beat writer and poet <a href='https://en.wikipedia.org/wiki/Alexander_Trocchi'>Alexander Trocchi</a>.";
  aboutText3.innerHTML =
    "Her poetry has been exhibited at Reverberation in London, a project inspired by The Beatles seminal album ‘Sgt. Pepper’s Lonely Hearts Club Band’. She has exhibited her work at Flint Gallery in Norwich, theprintspace in London, and the Superette Gallery in Paris as a part of Never Turn Back, a photographic project headed by <a href='https://www.deanchalkley.com/theassembly/'>Dean Chalkley</a>. The two have collaborated on a publication titled One which focuses on the idea of subculture and is available through Antenne Books.";
aboutTab.append(aboutText1,aboutText2,aboutText3)

return aboutTab



};

export{createAbout}