// code your solution here


function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun()); 
console.log(saturdayFun("go to the beach")); 

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}


console.log(mondayWork()); 
console.log(mondayWork("work from home")); 


function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing")); // "You are !!!amazing!!!"

const simplePromptFunction = wrapAdjective();
console.log(simplePromptFunction()); // "You are *special*!"