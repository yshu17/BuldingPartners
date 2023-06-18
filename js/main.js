$(document).ready(function () {


   const column = $('.coli:nth-child(1)');
   const header = $('.header');
   const navbarBtns = $('.navbar__btn');
   const sectionAbout = $('.about');

   function resizer() {
      $(window).on('resize', function () {
         if ($(window).width() > 998) {
            const columnWidth = column.outerWidth();
            header.width(columnWidth - 1);
         } else {
            header.css('width', '');
         }
      }).trigger('resize');
   }
   resizer();

   $(".column-link").click(function (event) {
      event.preventDefault();
      var clickedColumn = $(this).closest(".coli");
      clickedColumn.toggleClass("open");
      $(".coli").not(clickedColumn).removeClass("open");

      if (clickedColumn.hasClass("open")) {
         navbarBtns.show().stop().animate({ right: '0%' }, 1000);
         navbarBtns.css('display', 'flex');
         $(".coli").not(clickedColumn).addClass("hidden");
         clickedColumn.removeClass("hidden");

         // Плавное появление блока "About" посередине экрана
         sectionAbout.css({
            display: 'block',
            opacity: 0,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
         }).animate({
            opacity: 1
         }, 1000);
         /////////////////////////////////////////////////////

      } else {
         navbarBtns.stop().animate({ right: '-100%' }, 2000, function () {
            $(this).hide();
         });
         $(".coli").removeClass("hidden");
      }
   });

   $(".main-page").click(function (event) {
      event.preventDefault();

      // Плавное исчезновение блока "About"
      sectionAbout.animate({
         opacity: 0
      }, 500, function () {
         $(this).hide();
      });
      /////////////////////////////////////////////////////
      
      $(".coli").removeClass("open").removeClass("hidden");
      navbarBtns.stop().animate({ right: '-100%' }, 2000, function () {
         $(this).hide();
      });
   });

   $(".column-link").hover(
      function () {
         var button = $(this);
         setTimeout(function () {
            button.addClass("animate-height");
         }, 600);
      },
      function () {
         var button = $(this);
         setTimeout(function () {
            button.removeClass("animate-height");
         }, 600);
      }
   );
});
