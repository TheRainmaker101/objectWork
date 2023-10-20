/* a list of enemies, create a program to distinguish how dangerous they are //

function to create and return an enemy */

const createEnemy = (eName, weapon, strength) => {

console.log(`spawning enemy ${eName} ...`);

const enemy = {

    eName,
    weapon,
    strength,
};

console.log('enemy ready!');

};

// create a range of enemies 

const enemyArray = [

    createEnemy('jBomb', 'katana', 27),
    createEnemy('terrance', 'brick', 99),
    createEnemy('patricia', 'car', 247),
    createEnemy('dBlock', 'shotgun', 123),
];