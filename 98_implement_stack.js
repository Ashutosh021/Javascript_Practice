var stack = new Array(20);
var top = -1;

function push(val) {
    if (isFull()) {
        console.log("Stack is Full");
    } else {
        top++;
        stack[top] = val;
    }
}

function pop() {
    if (isEmpty()) {
        console.log("Stack is Empty");
    } else {
        let popVal = stack[top];
        top--;
        console.log("pop :- " + popVal);
    }
}

function isEmpty() {
    if (top < 0) return true;
    else return false;
}

function isFull() {
    if (top >= 19) return true;
    else return false;
}

function display() {
    if (isEmpty()) {
        console.log("Empty");
    
    }    else {
        for (let i = top; i >= 0; i--) {
            console.log(stack[i]);
        }
    }
}

display();
push(1);
push(2);
push(3);
push(4);
push(5);
display();
pop();
pop();
display();
