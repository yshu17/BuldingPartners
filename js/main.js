$(document).ready(function () {
   const column = $('.coli:nth-child(1)');
   const header = $('.header');

   $(window).on('resize', function () {
      if ($(window).width() > 998) {
         const columnWidth = column.outerWidth();
         header.width(columnWidth);
      } else {
         header.css('width', '');
      }
   }).trigger('resize');

   $(".column-link").click(function (event) {
      event.preventDefault();
      var clickedColumn = $(this).closest(".coli");
      clickedColumn.toggleClass("open");
      $(".coli").not(clickedColumn).removeClass("open");

      if (clickedColumn.hasClass("open")) {
         $(".coli").not(clickedColumn).addClass("hidden");
         clickedColumn.removeClass("hidden");
      } else {
         $(".coli").removeClass("hidden");
      }
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

