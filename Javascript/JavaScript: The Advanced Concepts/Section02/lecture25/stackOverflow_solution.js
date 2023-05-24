const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    setTimeout(removeItemsFromList, 0);
    // using the set timeout send the function call to webAPI to prevent synchronous nature of calling the below function.
    // As soon as it became asynchronous, the stack overflow error is gone.
  }
}

removeItemsFromList();

list;
