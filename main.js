// Creating arrays for student and expelled students
// Need to renderToDom and cardsOnDom

// Create arrays for students and expelled students
const students = [
    {
      id: 1,
      name: "Godric Gryffindor",
      house: "Gryffindor",
    },
    {
      id: 2,
      name: "Helga Hufflepuff",
      house: "Hufflepuff",
    },
    {
      id: 3,
      name: "Rowena Ravenclaw",
      house: "Ravenclaw",
    },
    {
      id: 4,
      name: "Salazar Slytherin",
      house: "Slytherin",
    },    
    {
      id: 5,
      name: "Severus Snape",
      house: "Slytherin",
    },    
    {
      id: 6,
      name: "Pomona Sprout",
      house: "Hufflepuff",
    },
    {
      id: 7,
      name: "Cho Chang",
      house: "Ravenclaw",
    },    
    {
      id: 8,
      name: "Harry Potter",
      house: "Gryffindor",
    }, 
    
  ];

  const expelledStudents = [
   // id: students.length + something, 
    name: "Moldy Voldy",
    house: "A Voldy Moldy One",
  ]


// Need to renderToDom and cardsOnDom
//Function 'renderToFom' that takes in a div id and html that will go to where the selected div is
  const renderToDom = (divId, htmlToRender) => {
    // Const 'SelectedDiv' and uses a .querySelector to grab the divId we want to target
      const selectedDiv = document.querySelector(divId);
    // Accessing the Innerhtml of the selected div and applying the html we need to render here
      selectedDiv.innerHTML = htmlToRender;
    };

  const cardsOnDom = (array) => {
    let domString = "";
    for (const student of array) {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">House: ${student.house}</p>
      <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
      </div>
    </div>`;
    }
    renderToDom("#app", domString);
  }
  
  const createDomString = (student) => {
    return `<div class="card" style="width: 18rem;">
     <div class="card-body">
     <h5 class="card-title">${student.name}</h5>
     <p class="card-text">House: ${student.house}</p>
     <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
        </div>
      </div>`;
  };
  
  let domString = "";
  let filterValue = 0;

  const app = document.querySelector("#studentForm");

  students.forEach((student) => {
    domString += createDomString(student);
    app.innerHTML = domString;
  });

// create const"houseFilter"
  const houseFilter = (house) => {
    //console.log('heres house: ', house)
     domString = "";
     students.forEach((student) => {
       if (student.house === house) {
         domString += createDomString(student);
       }
       filterValue = 1;
       app.innerHTML = domString;
     });
   };


// filters to target "houseFilter"
const allFilterb = document.querySelector("#allB")
const gryffFilterb = document.querySelector("#gryffB")
const hufflFilterb = document.querySelector("#hufflB")
const ravenFilterb = document.querySelector("#ravenB")
const slythFilterb = document.querySelector("#slythB")

gryffFilterb.addEventListener("click", () => {
    houseFilter('Gryffindor')
  });
hufflFilterb.addEventListener("click", () => {
  houseFilter('Hufflepuff')
});
ravenFilterb.addEventListener("click", () => {
    houseFilter('Ravenclaw')
  });
slythFilterb.addEventListener("click", () => {
  houseFilter('Slytherin')
});
allFilterb.addEventListener("click", () => {
cardsOnDom(students)
});