const getTodo = (callback) => {
  setTimeout(() => {
    callback({ text: "Complete code example" });
  }, 2000);
};
getTodo((todo) => {
  console.log(todo.text);
});
console.log("This is the first output");
