var queue = [20];
var st = 0;
var en = -1;
var size = 20;

function push(val) {
  if (isFull()) {
    console.log("Queue is Full");
  } else {
    en++;
    queue[en] = val;
  }
}

function pop() {
  if (isEmpty()) {
    console.log("Queue is Empty");
  } else {
    let popVal = queue[st];
    console.log("popVal : " + popVal);
    st++;
  }
}

function isEmpty() {
  if (st > en) return true;
  else return false;
}

function isFull() {
  if (en >= size - 1) return true;
  else return false;
}

function display() {
  if (isEmpty()) {
    console.log("Queue is Empty");
  } else {
    for (let i = st; i <= en; i++) {
      console.log(queue[i]);
    }
  }
}

display();
push(5);
push(4);
push(3);
push(2);
push(1);
push(0);  
display();
pop();
display();
