// 1 funzione, dobbiamo aggiungere un messaggio verde quando scriviamo qualcosa all interno dell input e premiamo il tasto Invio/icona
$(document).ready(function() {

  $(document).on('click', '.send i',
    function() {
      var template = $('.template.greeny p').clone();
      var mioValore = $('.text input').val();
      template.children('p').prepend(mioValore);
      $('.main-chat').append(template);
      $('input').val('');
    }
  )

})
