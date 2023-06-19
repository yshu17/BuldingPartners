$(document).ready(function () {
   const column = $('.coli:nth-child(1)');
   const header = $('.header');
   const navbarBtns = $('.navbar__btn');
   const section = $('.section');

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

   function showSection(sectionClass) {
      section.removeClass('active').stop().animate({ opacity: 0 }, 300, function () {
         $(this).hide();
      });
      $(sectionClass).show().stop().animate({ opacity: 1 }, 1000).addClass('active');
   }

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

         var target = clickedColumn.data("target");

         switch (target) {
            case ".about":
               showSection('.about');
               break;
            case ".practice":
               showSection('.practice');
               break;
            case ".clients":
               showSection('.clients');
               break;
            case ".career":
               showSection('.career');
               break;
            case ".contacts":
               showSection('.contacts');
               break;
         }
      } else {
         navbarBtns.stop().animate({ right: '-100%' }, 2000, function () {
            $(this).hide();
         });
         $(".coli").removeClass("hidden");
         section.removeClass('active').stop().animate({ opacity: 0 }, 500, function () {
            $(this).hide();
         });
      }
      // Проверка, выбрана ли категория ".contacts"
      $(".contact-us").toggle(target !== ".contacts");
   });

   $(".main-page").click(function (event) {
      event.preventDefault();

      $(".coli").removeClass("open").removeClass("hidden");
      navbarBtns.stop().animate({ right: '-100%' }, 2000, function () {
         $(this).hide();
      });
      section.stop().animate({ opacity: 0 }, 500, function () {
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

   $(".categories-item a").click(function (event) {
      event.preventDefault();
      var practiceTitle = $(".practice__title");
      var contentWrapper = $(".span-wrapper");
      var categoryName = $(this).text(); // Получить текст названия категории
      var categoryContent = $(this).siblings("span").html(); // Получить содержимое categories-item

      $(this).parent().addClass("active").siblings().removeClass("active");
      // Плавное исчезновение текущего текста заголовка и содержимого
      practiceTitle.stop().animate({ opacity: 0 }, 300, function () {
         practiceTitle.text(categoryName);
         practiceTitle.animate({ opacity: 1 }, 300);
      });

      contentWrapper.stop().slideUp(400, function () {
         contentWrapper.html(categoryContent);
         contentWrapper.slideDown(800);
      });
   });
});
