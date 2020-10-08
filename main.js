// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likes = document.querySelectorAll(".like-glyph")

for (let heart of likes) {
  heart.addEventListener('click', clickedHeart)
}

function clickedHeart(e) {
  let heart = e.target
  mimicServerCall("Mike")
    .then(function (serverMessage) {
      if (heart.innerHTML == EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.classList.remove("like-glyph")
        heart.classList.add("activated-heart")
        console.log("good")
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.classList.remove("activated-heart")
      }
    })
    .catch(function (error) {
      console.log("bad")
      let err = document.getElementById("modal")
      err.classList.remove("hidden")
      let message = document.getElementById('modal-message')
      message.innerText = `${error}`
      setTimeout(function () {
        // let err = document.getElementById("modal")
        err.classList.add("hidden")
      }, 5000)
    })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
