/*document.addEventListener('DOMContentLoaded',function(){
    document.addEventListener('click',function(){
        document.getElementsByClassName('button-class');
    })
});*/

var button= document.createElement('button');
//var body=document.getElementsByTagName('body');
//button.className='button-class';//
var text=document.createTextNode('Click');
button.appendChild(text);
document.body.appendChild(button);

document.addEventListener('click', function(){
    var div=document.createElement('div');
    document.body.appendChild(div);
    div.className="square";
});


