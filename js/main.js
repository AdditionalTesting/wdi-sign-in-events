var buttonSignIn = document.querySelector('.signin');
var buttonClose = document.querySelector('.close');

1.
buttonSignIn.addEventListener('click', function(eventObject) {
  document.querySelector('.modal').style.display = 'block';
;})

2.
buttonClose.addEventListener('click', function(eventObject) {
  document.querySelector('.modal').style.display = '';
})

3.
