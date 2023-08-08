$(function () {
  $('.umb').hover(
    function () {
      this.src =
        'images/Umbrella' +
        String(Number(this.getAttribute('data-u')) + 1) +
        '.png';
      $('html').css('cursor', 'pointer');
    },
    function () {
      this.src =
        'images/Umbrella' +
        String(Number(this.getAttribute('data-u'))) +
        '.png';
      $('html').css('cursor', 'default');
    }
  );
});
