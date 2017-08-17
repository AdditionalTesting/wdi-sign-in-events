var buttonSignIn = document.querySelector('.signin');
var buttonClose = document.querySelector('.close');
var buttonSubmit = document.querySelector('.submit');
var inputField = document.querySelectorAll('form > input')

1.
buttonSignIn.addEventListener('click', function(eventObject) {
  document.querySelector('.modal').style.display = 'block';
;})

2.
buttonClose.addEventListener('click', function(eventObject) {
  document.querySelector('.modal').style.display = '';
})

3.
buttonSubmit.addEventListener('click', function(eventObject) {
  user.classList.add('error')
  pass.classList.add('error')
})

4.
  inputField.forEach(function(i) {
    i.addEventListener('mouseover', function () {
      i.className = '';
    })
  })

5.
