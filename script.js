  let heroes = [["Axe", "Tank"], ["Crystal Maiden", "Support"]];


function displayHero() {
    let heroesContainer = document.getElementById("heroesContainer"); 
    heroesContainer.innerHTML = '';
    for (let i = 0; i < heroes.length; i++) {

    let newElement = document.createElement('div');
    newElement.innerHTML =  `<h1>${newHeroName[i][0]}</h1><p>${newHeroClass[i][1]}</p>`;
    heroesContainer.appendChild(newElement);
    }
}



function addHero (){
    let nameInput = document.getElementById("heroName");
    let classInput = document.getElementById("heroClass"); 
    let newHero = [nameInput.value, classInput.value];
    heroes.push(newHero);
    heroNames.push(nameInput.value);
    heroClasses.push(classInput.value);

    displayHero();

    nameInput.value = "";
    classInput.value = "";
}

let button = document.getElementById("addButton"); 
button.addEventListener("click", addHero);