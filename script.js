const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

//-----------------------------------------

function grill (currentObject) {
    
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);

};

grill (hamburger);
grill (zucchini);
grill (chickenBreast);
grill(corn);
grill(steak);
console.log(cookedFood);
// const detailedInventory = [
//     {
//       name: "Coat",
//       quantity: 9,
//       price: 79.99
//     },
//     {
//       name: "Gloves",
//       quantity: 24,
//       price: 12.99
//     },
//     {
//       name: "Hats",
//       quantity: 16,
//       price: 9.99
//     },
//     {
//       name: "Scarves",
//       quantity: 6,
//       price: 14.99,
//     }
//   ]
  
//   function flattenArray(){
//     const arrayOfNames = [];
//     for(let i = 0; i < detailedInventory.length; i++){
//       arrayOfNames.push(detailedInventory[i].name);
//     }
//     console.log("this is inside the function", arrayOfNames);
//     return arrayOfNames;
//   }
  
//   const justTheNames = flattenArray();
//   console.log("this is what it looks like outside the function", justTheNames);