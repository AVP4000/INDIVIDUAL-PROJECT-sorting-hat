// Creating arrays for student and expelled students
// Need to renderToDom and cardsOnDom

// Create arrays for students and expelled students
const students = [
    {
      id: 1,
      name: "Godric Gryffindor",
      house: "Gryffindor",
      color: '#9E0501',
    },
    {
      id: 2,
      name: "Helga Hufflepuff",
      house: "Hufflepuff",
      color: '#F3CF00',
    },
    {
      id: 3,
      name: "Rowena Ravenclaw",
      house: "Ravenclaw",
      color: '#530a53',
    },
    {
      id: 4,
      name: "Salazar Slytherin",
      house: "Slytherin",
      color: '#4A9D54',
    },    
    {
      id: 5,
      name: "Severus Snape",
      house: "Slytherin",
      color: '#4A9D54',
    },    
    {
      id: 6,
      name: "Pomona Sprout",
      house: "Hufflepuff",
      color: '#F3CF00',
    },
    {
      id: 7,
      name: "Cho Chang",
      house: "Ravenclaw",
      color: '#530a53',
    },    
    {
      id: 8,
      name: "Harry Potter",
      house: "Gryffindor",
      color: '#9E0501',
    }, 
    
  ];

  const expelledS = [];

// Need to renderToDom and cardsOnDom

const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

//Function 'renderToFom' that takes in a div id and html that will go to where the selected div is
  const cardsOnDom = (array) => {
    let domString = "";
    for(const student of array) {
      domString += `<div class="card mb-3" style="max-width: 720px;border-color:${student.color};border-width:10px;>
      <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">House: ${student.house}</p>
          <a href="#" class="btn btn-danger" id="expel--${student.id}">Expel</a>
        </div>
      </div>
    </div>
  </div>`;
    }
    renderToDom('#enrolledStudents', domString);
  };
  

// intro, student form, enrolled vs expelled student
// const introBtn = document.querySelector("#introB");
const form = document.querySelector('form');
const enrolledStudents = document.querySelector("#enrolledStudents");
const expelledStudents = document.querySelector("#expelledStudents");

 
// New Student Form
const createNewStudent = (e) => {
    e.preventDefault(); // EVERY TIME YOU CREATE A FORM

// House Randomizer for Student Form
const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
const randomHouse = Math.floor(Math.random() * houses.length);
const randomize = houses[randomHouse]; 

// Colors for random house
const houseColors = {
    Gryffindor: '#9E0501', 
    Hufflepuff: '#F3CF00', 
    Ravenclaw: '#530a53', 
    Slytherin: '#4A9D54', 
  };

// NewStudentObject
const newStudentObj = {
      id: students.length + 1,
      name: document.querySelector("#new-student").value,
      house: randomize, 
      color: houseColors[randomize], 
    };
    
students.push(newStudentObj);
cardsOnDom(students);

// form reset
form.reset();
};

form.addEventListener('submit', createNewStudent);


// create const "houseFilter" WORKING
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

//Create ExpelledDom
const renderToExpelledDom = (array) => {
let expelledStudentsDomString = "";
array.forEach((expelledStudent) => { 
    expelledStudentsDomString +=
    `<div>
     <div class="card" style="width: 18rem;">
     <img src="https://vignette.wikia.nocookie.net/villains/images/3/39/Hp-maab21252.jpg/revision/latest?cb=20180504040442" class="card-img-top" alt="...">
     <div class="card-body">
       <p class="card text-center">The Darkness Claims Another <b>${expelledStudent.name}</b> WANTED DEAD OR ALIVE</p>
     </div>
   </div>
     </div>`
});
renderToDom('#expelledStudents', expelledStudentsDomString);
   };

// Expel Array -  WORKING/CAN DELETE
// Here we will be using event bubbling
// 1. Target the app div if it already hasnt been done: const app = document.querySelector("#app");
// 2. Add an event listener to capture clicks

enrolledStudents.addEventListener('click', (e) => {
    // console.log(e.target.id);
    
  // 3. check e.target.id includes "expel"
    if (e.target.id.includes("expel")) {
      // destructuring: https://github.com/orgs/nss-evening-web-development/discussions/11
      const [, studentId] = e.target.id.split("--");
  
  // 4. add logic to remove from array
  // .findIndex is an array method
  const index = students.findIndex((student) => Number(studentId) === student.id);
  
      // .splice modifies the original array
  
  // 5. Repaint the DOMs with the updated array
  const expelledStudent = students.splice(index, 1);
  expelledS.push(expelledStudent[0]);
      cardsOnDom(students);

    //   expelledS.push(...students.splice(index, 1));
    
      renderToExpelledDom(expelledS); 
    }
  });


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
