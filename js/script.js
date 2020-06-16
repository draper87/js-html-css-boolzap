// 1 funzione, dobbiamo aggiungere un messaggio verde quando scriviamo qualcosa all interno dell input e premiamo il tasto Invio/icona
$(document).ready(function() {

  $(document).on('click', '.send i',
    function() {
      // var template = $('.modello p').clone();
      var mioValore = $('.text input').val();
      var orario = new Date();
      var ora = orario.getHours();
      var minuti = orario.getMinutes();
      // template.prepend(mioValore);
      $('.main-chat').append('<div class="template greeny"><p class="greeny">' + mioValore + '<span>' + ora + ':' + minuti + '</span></p></div>');
      $('input').val('');

    }
  )

})
