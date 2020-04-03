(function ($) {

  //// ---> Check issue element
  jQuery.fn.exists = function () {
    return jQuery(this).length;
  }

  $(function () {

    if (!is_mobile()) {

      if ($('.phonefield').exists()) {
        $('.phonefield').mask('+375-99-999-99-99');
      }

      if ($('.form_check').exists()) {

        $('.form_check').each(function () {

          var form = $(this),
            btn = form.find('.btn btn-success');

          $('body').on('click keypress', '.us', function (key) {
            $this = $(this);
            $maxLen = 30;
            // ограничение по длине
            if ($this.val().length > $maxLen)
              return false;

          });

          //  Клик по кнопке
          btn.click(function () {
            if ($(this).hasClass('disabled')) {
              lightEmpty();
              return false
            } else {
              form.submit();
            }
          });

        });

      }
    }

  });

})(jQuery);