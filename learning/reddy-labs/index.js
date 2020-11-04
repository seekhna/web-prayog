$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

window.addEventListener("scroll",function(event){
  const scrolled= window.scrollY;
  if(scrolled>=50)
  {document.querySelector("nav").classList.add("backdrop-blur");
   document.querySelectorAll("img")[0].classList.add("imagext");
   document.querySelectorAll("img")[1].classList.add("imagext");
   document.querySelectorAll("ul")[1].classList.add("symba");
   document.querySelectorAll("a")[3].classList.add("symbal");
   document.querySelectorAll("a")[4].classList.add("symbal");
   document.querySelectorAll("a")[3].innerHTML='<i class="fas fa-phone-alt"></i>';
   document.querySelectorAll("a")[4].innerHTML='<i class="far fa-envelope"></i>';

  }
  else
  {document.querySelector("nav").classList.remove("backdrop-blur");
   document.querySelectorAll("img")[0].classList.remove("imagext");
   document.querySelectorAll("img")[1].classList.remove("imagext");
   document.querySelectorAll("a")[3].innerHTML='<i class="fas fa-phone-alt"></i> +91-7036004562';
   document.querySelectorAll("a")[4].innerHTML='<i class="far fa-envelope"></i> manivishalburra@gmail.com';
   document.querySelectorAll("ul")[1].classList.remove("symba");
   document.querySelectorAll("a")[3].classList.remove("symbal");
   document.querySelectorAll("a")[4].classList.remove("symbal");
 }
})
