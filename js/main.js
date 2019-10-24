$(document).on('click','.bars',()=>{
    $('.nav-links').toggle('slow');
})
$(document).ready(()=>{
    if(screen.width <= 768){
        $('.nav-links').css('display','none');
    }
   
});