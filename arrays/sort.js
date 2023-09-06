// sort an array in such a way that b should be in ascending order

function myFunction(arr) {
    const sort = (x, y) => x.b - y.b;
    return arr.sort(sort);
}
myFunction([{a:1,b:2},{a:5,b:4}])