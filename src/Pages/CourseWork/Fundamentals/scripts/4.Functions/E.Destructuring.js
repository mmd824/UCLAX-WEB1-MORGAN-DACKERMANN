/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/
console.group("Functions: Destructuring");

const readPerson = ({ first, last, email, colors }) => {
    // const { first, last, email, colors } = personObj;
    console.log(`Hey ${first} ${last}, your email is: ${email}`);

    console.log("Your favorite colors are:");

    colors.forEach((color, idk) => {
        console.log(color);
    });
};

const person1 = {
    first: "Morgan",
    last: "Dackermann",
    email: "morgan@me.com",
    colors: ["turquoise blue", "magenta", "orange"],
};

const person2 = {
    first: "Ken",
    last: "Dackermann",
    email: "ken@ken.com",
    colors: ["black", "blue", "gray"],
};

readPerson(person1);
readPerson(person2);

console.groupEnd();
