// $(function () {
// })
$(document).ready(function () {
  let show = true;
  let countbox = ".stats__top";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    let w_height = $(window).height(); // Высота окна браузера
    let d_height = $(document).height(); // Высота всего документа
    let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.stats__main-number').css('opacity', '1');
      $('.stats__main-number').spincrement({
        thousandSeparator: "",
        duration: 4000
      });
      show = false;
    }
  });
});
