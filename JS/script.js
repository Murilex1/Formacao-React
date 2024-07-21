//Conditional annotations

const note = 5;

// if - else
if(note < 5 ) {
    console.log("Below avarage");
} else if (note > 5 && note < 7){
    console.log("In average");
} else {
    console.log("Above average")
}

//switch - case
switch(note) {
    case 5:
        console.log("Below avarage");
        break;
    case 10:
        console.log("In avarage");
        break;
    default:
        console.log("Above avarage");
}


//Repeat loop annotations

//For
for(let i = 1; i < 10; i++) {
    console.log("Value: ",i);
}

console.log("Or");

for(let i = 1; i < 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`);
}

console.log("==============")

//While
let i = 0
while(i < 10) {
    console.log(`${i} x 5 = ${i * 5}`);
    i++;
}

//Foreach

const values = [1,2,3,4,5,6,7,8,9,10];
values.forEach((value,index) => {
    console.log(`${i} x 5 = ${i * 5}`);
    i++;
})