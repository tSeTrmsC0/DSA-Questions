// Insert character after every n characters (backwards)
// Write a function that takes two strings (a and b) as arguments. Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'. Return the resulting string.



// ------------------------------ My Code -----------------------------------

a = "zxyzxyzxyzxyzxyz";
b = "*";
let str = "";
let rev= "";
let third=""
let rev_str = "";

// Reverse string

for(let i=a.length-1 ;i>=0 ;i--){
    rev+=a[i];
}

// string convert to chunks or substrings of 3 to add special characters in between

for(let i=0 ;i<rev.length ;i+=3){
    third = rev.substr(i,3)
    third.length==3 ? str = str.concat(third,b) : str = str.concat(third);
}

// reverse again

for(let i=str.length-1 ;i>=0 ;i--){
    rev_str+=str[i];
}
console.log(rev_str);



// ------------------------------ Solution Code -------------------------


function myFunction(a, b) {
    let result = [];
    let rest = a;
    while (rest.length) {
        result.push(rest.slice(-3));
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b);
}