
var button= document.createElement('button');
var text=document.createTextNode('Click');
button.appendChild(text);
var container=document.createElement('container');
container.appendChild(button);
document.body.appendChild(container);

var numBoxes=0;

button.addEventListener('click', function(){
    var div=document.createElement('div');
    document.body.appendChild(div); 
    div.id=(numBoxes++)

  
div.addEventListener('mouseover', function() {
  div.innerHTML=div.id;
});
  div.addEventListener('mouseleave', function() {
  div.innerHTML="";
});

div.addEventListener('click',function(){
div.style.backgroundColor = randomColor();

    function randomColor() {
    var randomRed = Math.floor(Math.random() * 350);
    var randomGreen = Math.floor(Math.random() * 350);
    var randomBlue = Math.floor(Math.random() * 350);
    var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
    return randomColor
    }
});

div.addEventListener('dblclick',function(){
  if(div.id%2==0 ){
      div.nextSibling.remove();    
        } 
  else if (div.id%2==1){
      div.previousSibling.remove();
        }
  else{
        alert('Element does not exist');
        }
      })
    });