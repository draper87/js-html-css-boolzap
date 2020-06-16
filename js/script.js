// 1 funzione, dobbiamo aggiungere un messaggio verde quando scriviamo qualcosa all interno dell input e premiamo il tasto Invio/icona
$(document).ready(function() {

  $(document).on('click', '.send i',
    function scriviMessaggio() {
      var template = $('.tonotshow .messaggio').clone();
      var mioValore = $('.text input').val();
      var orario = new Date();
      var ora = orario.getHours();
      var minuti = orario.getMinutes();
      template.children('p').prepend(mioValore);
      template.find('span').text(ora + ':' + minuti);
      template.addClass('greeny');
      $('.main-chat').append(template);
      $('input').val('');
    }
  )

  $('.text input').keypress(function(event) {
    if (event.which === 13 ) {
      var template = $('.tonotshow .messaggio').clone();
      var mioValore = $('.text input').val();
      var orario = new Date();
      var ora = orario.getHours();
      var minuti = orario.getMinutes();
      template.children('p').prepend(mioValore);
      template.find('span').text(ora + ':' + minuti);
      template.addClass('greeny');
      $('.main-chat').append(template);
      $('input').val('');
    }
  })

})
