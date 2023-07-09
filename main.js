// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

likeBtns = document.getElementsByClassName('like')

for (let el of likeBtns) {
  btnClicker(el)

}

function btnClicker(btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    //waits for response from server to toggle the like or catch error
    mimicServerCall()
      .then(function (response) {
        return response

      })
      .then(function () {

        toggle(btn)
      })
      .catch(function (error) {

        div1 = document.getElementsByTagName('div')[0]
        div1.classList.remove('hidden')
        div1.textContent = `Error: ${error}`
        setTimeout(() => div1.classList.add('hidden'), 3000)
      })

  })


}

//toggles heart on/off
function toggle(heart) {
  span = heart.querySelector('span')

  if (span.classList.contains('activated-heart')) {

    span.classList.remove('activated-heart')
    span.textContent = `${EMPTY_HEART}`

  } else {

    span.classList.add('activated-heart')
    span.textContent = `${FULL_HEART}`

  }
  console.log(heart)
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
