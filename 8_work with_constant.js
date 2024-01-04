const a = 5;
// a=6; can't update the value of const
console.log(a);

// constants are block-scoped
{
    const a = 50;
    console.log("inside braces "+a);
}
console.log(a);

const arr = ['work', 'exercise', 'eat'];
console.log(arr);

// add elements to arr array
arr[3] = 'hello';
console.log(arr);

