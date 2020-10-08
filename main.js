// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const emptyHearts = document.querySelectorAll('.like-glyph')
const hearts = document.querySelectorAll('.activated-heart')
const modal = document.querySelector('#modal')

for (i=0; i < emptyHearts.length; i++){
  emptyHeart(emptyHearts[i])
}

//Set to fullHeart status, give it ability to set to empty heart status
function fullHeart(target){
  target.textContent = FULL_HEART;
  target.classList.value = 'activated-heart'
  target.addEventListener('click', function(e){
    removeLike(e)
  })
}

//Set to emptyHeart status, give it ability to set to full heart status
function emptyHeart(target){
    target.textContent = EMPTY_HEART;
    target.classList.value = 'like-glyph'
    target.addEventListener('click', function(e){
      addLike(e)
    })

}

function addLike(e){
  let element = e.target
  mimicServerCall()
  .then(function(){
    fullHeart(element)
  })
  .catch(function(error){
    modal.children[1].innerText = error
    modal.classList.value = ""
    setTimeout(function(){
      modal.classList.value = "hidden";
    },
    5000);
  })
}

function removeLike(e){
  let element = e.target
  mimicServerCall()
  .then(function(){
    emptyHeart(element)
  })
  .catch(function(error){
    modal.children[1].innerText = error
    modal.classList.value = ""
    setTimeout(function(){
      modal.classList.value = "hidden";
    },
    5000);
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
