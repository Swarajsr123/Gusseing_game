const box = document.querySelectorAll('.box');
const body=document.querySelector("body")


box.forEach(function(box){
  console.log(box);
  box.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target); 
    if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
    }  if(e.target.id === 'red'){
        body.style.backgroundColor = e.target.id;
    }  if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
    } else(e.target.id === 'violet');{
        body.style.backgroundColor = e.target.id;
    }


  })
});