//Stays in index.js
const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
move(character).withArrowKeys(100, 250);
move(newImage('assets/tree.png')).withArrowKeys(200, 450);
let direction = null;
let x = 100;
let y = 250;
//Up to here


function handleDirectionChange(direction){ //Stays in index.js
if(direction === null){
    character.src = 'assets/green-character/static.gif'
}
if(direction === 'west'){
    character.src = 'assets/green-character/west.gif'
}
if(direction === 'north'){
    character.src = 'assets/green-character/north.gif'
}
if(direction === 'east'){
    character.src = 'assets/green-character/east.gif'
}
if(direction === 'south'){
    character.src = 'assets/green-character/south.gif'
}
}

move(character).withArrowKeys(100, 250, handleDirectionChange);

function moveWithArrowKeys(left, bottom, callback){
    let direction = null;
    let x = left;
    let y = bottom;
}






//Stays in index,js
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
