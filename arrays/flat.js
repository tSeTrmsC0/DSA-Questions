// flat function coverts multiple nested array into single array.

function myFunction(...arrays){
    console.log(arrays.flat())
}
myFunction([1, 2, 3], [4, 5, 6])