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

  const expelledStudents = [];

// Need to renderToDom and cardsOnDom

const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

//Function 'renderToFom' that takes in a div id and html that will go to where the selected div is
  const cardsOnDom = (array) => {
    let domString = "";
    for(const student of array) {
      domString += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">House: ${student.house}</p>
          <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
        </div>
      </div>
    </div>
  </div>`;
    }
    renderToDom('#enrolledStudents', domString);
  };
  

// create const "houseFilter"
const houseFilter = (array, house) => {
    //console.log('heres house: ', house)
const stuArray=[]
for(const stu of array) {
    if (stu.house === house) {
      stuArray.push(stu);
    }
  }
  return stuArray; // Returns filtered array of students by house
};

// intro, student form, enrolled vs expelled student
const introBtn = document.querySelector("#introB");
const form = document.querySelector('form');
const enrolledStudents = document.querySelector("#enrolledStudents");
const expelledStudents = document.querySelector("#expelledStudents");

// House Randomizer for Student Form 
const randomize = () => {
const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
const randomHouse = Math.floor(Math.random() * houses.length);
return houses[randomHouse];
};  

// New Student Form
const createNewStudent = (e) => {
    e.preventDefault(); // EVERY TIME YOU CREATE A FORM
    
    const newStudentObj = {
      id: students.length + 1,
      name: document.querySelector('#new-student').value,
      house: houses[randomHouse]   
    }};
    
students.push(newStudentObj);
cardsOnDom(students);

// form reset
form.reset();

form.addEventListener("submit", createNewStudent);

//FILTER HOUSE
  const filter = (array, houseString) => {
    let newHouseArray = [];
  
    for (const students of array) {
      if (students.house === houseString) {
        newHouseArray.push(students);
      }
    }
    console.log(newHouseArray);
  
    cardsOnDom(newHouseArray);
    console.log(cardsOnDom(newHouseArray));
  };


// Expel Array  
const expel = (array) => {
    let = domString = "";
    for (expelledStudents of array) {
        domString += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${expelledStudents.name}</h5>
            <p class="card-text">House: ${expelledStudents.house}</p>
          </div>
        </div>
      </div>
    </div>`;
      }
      console.log(student);
      expelledStudents.innerHTML = domString;
    };  


// filters to target "houseFilter"
const allFilterb = document.querySelector("#allB")
const gryffFilterb = document.querySelector("#gryffB")
const hufflFilterb = document.querySelector("#hufflB")
const ravenFilterb = document.querySelector("#ravenB")
const slythFilterb = document.querySelector("#slythB")

gryffFilterb.addEventListener("click", () => {
    let gryff = houseFilter(students, "Gryffindor"); 
    cardsOnDom(gryff);
  });

hufflFilterb.addEventListener("click", () => {
  let huffl = houseFilter(students, "Hufflepuff");
  cardsOnDom(huffl);
});

ravenFilterb.addEventListener("click", () => {
  let raven = houseFilter(students, "Ravenclaw");
cardsOnDom(raven);
  });

slythFilterb.addEventListener("click", () => {
  let slyth = houseFilter(students, "Slytherin");
  cardsOnDom(slyth);
});

allFilterb.addEventListener("click", () => {
cardsOnDom(students);
});



const startApp = () => {
cardsOnDom(students);
  };
  
// startApp();