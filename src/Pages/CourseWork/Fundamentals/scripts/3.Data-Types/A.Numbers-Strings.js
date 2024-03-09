/*===================================
||
|| Data Types: Numbers and Strings
||
===================================*/
/*---------------------------
| Data Types: Numbers
---------------------------*/
console.group("Numbers and Strings");

const myNum1 = 824;
const myNum2 = 767;
console.log(myNum1 + myNum2);

console.groupEnd();

/*---------------------------
| Data Types: Strings
---------------------------*/
console.group("DataTypes: Strings");

const myStr1 = "I went to the";
const myStr2 = " park.";
console.log(myStr1 + myStr2);

console.groupEnd();
/*---------------------------
| Data Types: Template Strings
---------------------------*/
console.group("DataTypes: Template Strings");

const myStr3 = "Yet another string";

const myTempStr = `
    I can write

    multi-line stuff

    here.

    ${myNum1}

`;

console.log(myTempStr);

console.groupEnd();
