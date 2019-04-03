// As a user, i should see the timer increment every second once the page has loaded
let timer = 0
const counter = document.getElementById("counter")
let intervalId

function startCounter(){
  intervalId = setInterval(function(){
      timer++
      counter.innerText = timer
    }, 1000);
}

document.addEventListener('DOMContentLoaded', startCounter())

// As a user, i can manually increment and decrement the counter as i like
const counterUp = document.getElementById('+')
counterUp.addEventListener('click', function(){
  timer++
  counter.innerText = timer
})

const counterDown = document.getElementById('-')
counterDown.addEventListener('click', function(){
  timer--
  counter.innerText = timer
})

// As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
const likeButton = document.getElementById('<3')
const likesUl = document.querySelector('ul')
let timesLiked = 0
let likedNumber = 0.5

likeButton.addEventListener('click', function(){
  if (likedNumber === timer) {
    timesLiked++
  }
  if (likedNumber !== timer && timesLiked === 0) {
    likedNumber = timer
    timesLiked++
    setTimeout(function(){
      let newLikeLi = document.createElement("li")
      newLikeLi.innerText = `${likedNumber} was liked ${timesLiked} time${ timesLiked > 1 ? "s" : ""}`
      likedNumber = 0.5
      timesLiked = 0
      likesUl.appendChild(newLikeLi)
    }, 1000)}
}
)
// As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
const pauseBtn = document.querySelector('#pause')
let pause = false
let buttons = document.querySelectorAll('button')

function pauseUnpause(){
  if (pause){
    buttons.forEach(element => element.disabled = false)
    pause = false
    startCounter()
  } else {
    clearInterval(intervalId)
    buttons.forEach(element => element.disabled = true)
    pauseBtn.disabled = false
    pauseBtn.innerText = "resume"
    pause = true
  }

}
pauseBtn.addEventListener('click', pauseUnpause)

// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
const commentList = document.getElementById('list')
const form = document.getElementById('comment-form')

function postComment(e){
  e.preventDefault()
  let commentInput = document.querySelector('input')
  let commentText = commentInput.value
  if (commentText) {
    let comment = document.createElement('div')
    comment.innerText = commentText
    commentList.appendChild(comment)
    comment.value = ""
  }
}
form.addEventListener('submit', postComment)
