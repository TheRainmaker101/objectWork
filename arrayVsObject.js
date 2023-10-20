/* a list of enemies, create a program to distinguish how dangerous they are //

function to create and return an enemy */

const createEnemy = (eName, weapon, strength) => ({
    eName,
    weapon,
    strength,
});

// create a range of enemies in order of most dangerous first

const enemyArray = [

    createEnemy('patricia', 'car', 247),
    createEnemy('dBlock', 'shotgun', 123),
    createEnemy('terrance', 'brick', 99),
    createEnemy('jBomb', 'katana', 27),
];

// print all enemies

console.log(enemyArray);

// list them from least to most dangerous - remember to create a copy before reversing

const orderSwitch = [];

orderSwitch.push(enemyArray.reverse());

console.log(orderSwitch);

// re reverse the enemy array, likely not best practice!

enemyArray.reverse();

// print just the names in both orders


let strongFirst = [];

for (let i = 0; i < enemyArray.length; i++){

    strongFirst.push(enemyArray[i].eName)

};

console.log(`From weakest to strongest enemies we have ... 
    ${strongFirst.join(', ')}`);


console.log(`\n \n `);
    
let weakFirst = [];
    
    for (let i = enemyArray.length -1; i > -1; i--){

        weakFirst.push(enemyArray[i].eName)
    
};
    
console.log(`Enemies, most dangerous first, are ... 
    ${weakFirst.join(', ')}`);
    
// arrays are useful where an order is really important

// what weapon does the strongest enemy use?

console.log(enemyArray);

console.log(`The most dangerous enemy is using a ${enemyArray[0].weapon}
as a weapon!`);