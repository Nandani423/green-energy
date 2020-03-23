// creating shortcut for printing
const p = console.log;

// get the references to interactive HTML elements
const action = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.container');
let Array = [
    action[0],
    action[1],
    action[2]
];

// create array that will store the data
let contents = [
    {
        headingContent: "Solar Panels on Roof",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imgUrl: "./img/solar.jpg",
        imgAlt: "Solar Panels on Roof"
    },
    {
        headingContent: "Solar INDUSTRY",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imgUrl: "./img/industry.jpg",
        imgAlt: "Solar INDUSTRY"
    },
    {
        headingContent: "Building PROJECT",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        imgUrl: "./img/project.jpg",
        imgAlt: "Building PROJECT"
    }
];
// create function that handles click-event
function  clickBtn(ev) {
    
    // Brightspsce Ref: Week 6
    let clickedButton = ev.target;
    
    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = Array.indexOf(clickedButton);
    p(index);
    
    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element
    p(clickedButton.id);
    // handle moving id-active to the currently clicked button 

        // remove currently present id="active"
        for (let i = 0; i<action.length; i++){
            // claiming that current element in the loop containe attribute
            if(action[i].id){
                // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
                action[i].removeAttribute('id');
            }  
        }

        // assign id="active" to the currently clicked button
        clickedButton.id='active';    
    
    // load the corresponding data into <div class="container"></div>
    cntnr.innerHTML = `
        <h2>${contents[index].headingContent}</h2>
        <div class="mainContent">
                    <div class="left">
                        <img src="${contents[index].imgUrl}" alt="${contents[index].imgAlt}">
                    </div>
                    <div class="right">
                        <p>${contents[index].bodyText}</p>
                    </div>
                </div>`;
}
// register your buttons for click event
for(let i = 0; i<action.length; i++){ 
    action[i].addEventListener('click', clickBtn);  
}

function preloader() {
     action[0].id='active'
     cntnr.innerHTML = `
        <h2>${contents[0].headingContent}</h2>
        <div class="mainContent">
                    <div class="left">
                        <img src="${contents[0].imgUrl}" alt="${contents[0].imgAlt}">
                    </div>
                    <div class="right">
                        <p>${contents[0].bodyText}</p>
                    </div>
                </div>`;
};

window.addEventListener("load", preloader);
