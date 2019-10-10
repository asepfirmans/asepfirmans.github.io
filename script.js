const close= document.querySelector(".close");
 close.addEventListener('click',function(){
     const kotak=document.querySelector('.kotak')
    kotak.style.display="none";
 });
// kotak.style.display="none";
//alert("ok")
// function tutupKotak(){
//  close.onclick=tutupKotak   
// }
//container
const container = document.querySelector('.container');
const jumbo =document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb')
container.addEventListener('click',function(e){
    if(e.target.className=='thumb'){
        jumbo.src=e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');  
        },500);

        thumbs.forEach(function(thumb){
            // if(thumb.classList.contains('active')){
            //     thumb.classList.remove('active')
            // }
            thumb.className='thumb';
        });

        e.target.classList.add('active');

    }

})
