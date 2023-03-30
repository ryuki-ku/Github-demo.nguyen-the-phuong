// const newText = document.getElementById("button").addEventListener("click", () => {
//     console.log('Hello world');
// })

const clickButton = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  //Hàm tách ra lấy URL
  const getTodo = async (url) => {
    return (await fetch(url)).json();
  };

  //level 1 Fetch API calls
  // fetch(url)
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.error(err));

  //Level 2 Fetch API calls
  //   const todo = await getTodo(url);
  //   const data = await todo.json();
  //   console.log(data);

  //Level 3 Fetch API calls
  const data = await getTodo(url);
  console.log(`title: ${data.title}`);
};
