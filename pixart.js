let button= document.getElementById('set-color');
let brush= document.getElementsByClassName('brush')[0];
let input= document.getElementById("color-field");

button.addEventListener('click', function(){
    event.preventDefault()
   brush.style.backgroundColor = input.value
})


 for(let i = 0; i < 20; i++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    document.body.appendChild(newDiv);
newDiv.addEventListener('click', greeny) 
    function greeny(){
        newDiv.style.backgroundColor= 'green'
    
}
 }
