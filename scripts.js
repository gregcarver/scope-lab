
var button= document.createElement('button');
var text=document.createTextNode('Click');
button.appendChild(text);
document.body.appendChild(button);

var numBoxes=0;

button.addEventListener('click', function(){
    var div=document.createElement('div');
    document.body.appendChild(div);
    div.className="square";
    div.id=(numBoxes++)
  
div.addEventListener('mouseover', function() {
  div.innerHTML=div.id;

  div.addEventListener('mouseleave', function() {
  div.innerHTML="";
    });
  });
});

