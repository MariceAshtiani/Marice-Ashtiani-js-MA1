// Question 1

const cat = "complain";

function complainingCat (grump) {
    console.log(grump);
}

complainingCat("Meow!");




// Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";




// Question 3
heading.style.fontSize = "2em";




// Question 4
heading.classList.add("subheading");



// Question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}



// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "New paragraph";
resultsContainer.style.backgroundColor = "yellow";



// Question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function catInfo(list) {

    for (let i = 0; i < cats.length; i++) {
        console.log(cats[i].name);
    }
}

catInfo(cats);



// Question 8
const container = document.querySelector(".cat-container");

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {
        
        let catAge = "";
        if (cats[i].age) {
            catAge = cats[i].age;
        } else {
            catAge = "Age unknown";
        }

        html = html + `<div>
                        <h5> ${cats[i].name} </h5>
                        <p>  ${catAge}  </p>
                      </div>`
    }
    return html;
};

const catList = createCats(cats);
console.log(catList);

container.innerHTML = catList;