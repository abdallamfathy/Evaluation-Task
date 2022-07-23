// const btn = document.getElementById('best');
// const trend = document.getElementById('trend');
// btn.addEventListener('click',()=>{
//     trend.classList.remove('bg-btnColor');
//     // btn.classList.add('btn');
// });
var container = document.getElementById('container')
var btns = container.getElementsByClassName('btnn');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

var navv = document.getElementById('navv');
var navBtns = navv.getElementsByClassName('navBtn');

for (var i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("activee");
      current[0].className = current[0].className.replace(" activee", "");
      this.className += " activee";
    });
  }


 

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 15,
        mousewheel: true,
        keyboard: {
          enabled: true,
        },
        loop:true,
        
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
        
      });


      // const instance_swiper = new Swiper(".mySwiper", {
      //   on: {
      //     slideChange: function () {
      //       const index_currentSlide = instance_swiper.realIndex;
      //       const currentSlide = instance_swiper.slides[index_currentSlide]
      //       //
      //       currentSlide.style.background = "red";
      //     },
      //   },
      // });

      
      // var element = document.getElementsByClassName("swiper-slide");

      // var element  = document.querySelector("swiper-slide-active");
      // element.addEventListener('click',()=>{
      //   element.classList.add("bzoooooooooooooooooooooooooooooooooooooooooooo");
      // });
      // element.classList.add("active-slider");
      

       swiper.on('activeIndexChange', function () {

        var element  = document.querySelector(".swiper-slide-next");
        var c = element.querySelector(".card")
        // c.classList.add("bzoooooooooooo");
         if (c.classList.contains('test')) {
            c.classList.remove('test');
          } else {
            c.classList.add('test');
        }
        // var element = document.querySelector(".swiper-slide");
        // console.error(swiper.activeIndex);
        //  var c = element.querySelector('.card');
        
        // if (c.classList.contains('test')) {
        //     c.classList.remove('test');
        //   } else {
        //     c.classList.add('test');
        //  }
       });
        
        // var next = document.querySelector(".swiper-slide-next");
        // var n = element.querySelector('.card');
        // 
        
     

  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });