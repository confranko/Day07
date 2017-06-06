// var btn = document.querySelector('button');
// var nav = document.querySelector('ul');
// click
// btn.addEventListener('click', function(evt){
//     console.log(this);
//     console.log(evt.target.innerText);
//
// });
// mouseenter
// btn.addEventListener('mouseenter', function(evt){
//     evt.target.style.color = 'red';
//     evt.target.style.backgroundColor = 'green';
//
// });
//
// mouseleave
// btn.addEventListener('mouseleave', function(evt){
//   evt.target.style.color = 'black';
//   evt.target.style.backgroundColor = 'white';
//
//
// });
// window.addEventListener('scroll', function(evt){
//   console.clear();
//   console.log(evt.pageY);
//   if(evt.pageY > 35){
//     nav.classList.add('vis');
//   }else{
//     nav.classList.remove('vis');
//   }
// });
// textContent saves as strings
// innerhtml saves as html
//
// var setDiv = document.querySelector("div#set");
// setDiv.innerHTML = '<p>Lines up my nose</p>';
// var getDiv = document.querySelector('div#get');
// console.log(getDiv.innerHTML);


var submitBtn = document.querySelector('input[type=submit]');
// var inputText = document.querySelector('input[type=text]');
// var inputPass = document.querySelector('input[type=password]');
var form = document.querySelector('form');


submitBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  for(var i = 0, i < form.length; i++){
    console.log(form[i]);
  }
  // var text = inputText.value;
  // var pass = inputPass.value;
  // alert(inputText.value + " " + inputPass.value);
  console.log(form);
});










//"listen" for keypress, grab the keycode, textContent or innerHTML to set
//the code to the window
//keycode.info
