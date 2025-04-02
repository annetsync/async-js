// function satu() {
//     console.log("satu");
// }
// function dua() {
//   setTimeout(() => {
//     console.log("dua");
//   }, 0) // maupun 0 tetep setTimeOut dia async jadi tetep belakangan
// }
// function tiga() {
//     console.log("tiga");
// }

// satu();
// dua();
// tiga();

// // asynchronous = function yang dapat berjalan secara pararel

const token = ~~[Math.random() * 12345];

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
  console.log("Sedang generate ID...");
  setTimeout(() => {
    return ({ token, username });
  }, 500);
}

function getUser(token) {
  console.log("processing api key now...");
  if (token)
    setTimeout(() => {
     return ( { apiKey: "ifbdi23" } );
    }, 500);
}n

function getPictures(apiKey) {
  console.log("processing pictures now...");
  if (apiKey) 
    setTimeout(() => {
       return ({pic: pictures})
    }, 1500)
}

