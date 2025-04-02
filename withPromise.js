const token = ~~[Math.random() * 12345];

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
  console.log("Sedang generate ID...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token, username });
    }, 500);
  });
}

function getUser(token) {
  console.log("Processing API key now...");
  return new Promise((resolve) => {
    if (token) {
      setTimeout(() => {
        resolve({ apiKey: "ifbdi23" });
      }, 500);
    }
  });
}

function getPictures(apiKey) {
  console.log("Processing pictures now...");
  return new Promise((resolve) => {
    if (apiKey) {
      setTimeout(() => {
        resolve({ pic: pictures });
      }, 1500);
    }
  });
}

// Eksekusi dengan Promise chaining
login("user123")
  .then((user) => {
    console.log("User logged in:", user);
    return getUser(user.token);
  })
  .then((api) => {
    console.log("API Key obtained:", api);
    return getPictures(api.apiKey);
  })
  .then((data) => {
    console.log("Pictures received:", data.pic);
  })
  .catch((error) => console.error("Error:", error));
