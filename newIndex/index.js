//Using Promise
function httpgetAsync(theURL, resolve) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) resolve(xmlHttp);
  };

  xmlHttp.open("GET", theURL, true);
  xmlHttp.send(null);
}
//Khởi tạo dữ liệu
const promiseCodition = new Promise((resolve, reject) => {
  httpgetAsync("https://picsum.photos/200/300", resolve);
});

const promiseCodition2 = new Promise((resolve, reject) => {
  httpgetAsync("https://picsum.photos/200/300", resolve);
});

const promiseCodition3 = new Promise((resolve, reject) => {
  httpgetAsync("https://picsum.photos/200/300", resolve);
});

//Async Await request
async function executeAsync() {
  const getData = await promiseCodition;
  console.log(getData);
  document.getElementById("pic1").setAttribute("src", getData.responseURL);

  const getData2 = await promiseCodition2;
  document.getElementById("pic2").setAttribute("src", getData2.responseURL);

  const getData3 = await promiseCodition3;
  document.getElementById("pic3").setAttribute("src", getData3.responseURL);
}
//Khởi chạy code
executeAsync();

//chaining => khởi chạy dữ liệu
// promiseCodition
//   .then((data) => {
//     console.log(data);
//     document.getElementById('pic1').setAttribute('src', data.responseURL);

//     return promiseCodition2;
//   })
//   .then((data) => {
//     console.log(data);
//     document.getElementById('pic2').setAttribute('src', data.responseURL);

//     return promiseCodition3;
//   })
//   .then((data) => {
//     console.log(data);
//     document.getElementById('pic3').setAttribute('src', data.responseURL);

//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //CallBack Hell => No Use
// httpgetAsync("https://picsum.photos/200/300", (data) => {
//     console.log(data);
//     document.getElementById('pic1').setAttribute('src', data.responseURL);

// httpgetAsync("https://picsum.photos/200/300", (data) => {
//     console.log(data);
//     document.getElementById('pic2').setAttribute('src', data.responseURL);

// httpgetAsync("https://picsum.photos/200/300", (data) => {
//     console.log(data);
//     document.getElementById('pic3').setAttribute('src', data.responseURL);
//         });
//     });
// });

function myFunction(x, y, z, c) {
  console.log(x, y, z, c);
}
const args = [0, 1, 2];
myFunction(...args, 3);

const parts = ["shoulders", "knees"];
const lyrics = ["head", "and", "toes"];

lyrics.splice(1, 0, ...parts);

console.log(lyrics);