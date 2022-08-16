// Navbar For mobile devices 
function darken_screen(yesno){
    if( yesno == true ){
        document.querySelector('.screen-darken').classList.add('active');
    }
    else if(yesno == false){
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas(){
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id){
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
        
        let offcanvas_id = everyelement.getAttribute('data-trigger');
        
        everyelement.addEventListener('click', function (e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);
              
        });
    });

    document.querySelectorAll('.btn-close').forEach(function(everybutton){
        
        everybutton.addEventListener('click', function (e) {
            e.preventDefault();
            close_offcanvas();
          });
    });

    document.querySelector('.screen-darken').addEventListener('click', function(event){
        close_offcanvas();
    });
    
}); 
// DOMContentLoaded  end


document.addEventListener("DOMContentLoaded", function(){

window.addEventListener('scroll', function() {

if (window.scrollY > 50) {
    document.getElementById('navbar_main').classList.add('fixed-top');
    document.getElementById('navbar_main').style.padding = '0px 20px';
    document.getElementById('logoImg').style.width = '110px';
    // add padding top to show content behind navbar
    navbar_height = document.querySelector('.navbar').offsetHeight;
} else {
     document.getElementById('navbar_main').classList.remove('fixed-top');
     document.getElementById('navbar_main').style.padding = '5px 20px';
     document.getElementById('logoImg').style.width = '130px';
     // remove padding top from body
    document.body.style.paddingTop = '0';
} 
});
});