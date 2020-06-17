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

      // Ottengo 'Ok' come risposta ogni volta che scrivo qualcosa in chat
      setTimeout(function() {
        var templateWhite = $('.tonotshow .messaggio').clone();
        var valoreWhite = 'ok';
        templateWhite.children('p').prepend(valoreWhite);
        templateWhite.find('span').text(ora + ':' + minuti);
        templateWhite.addClass('white');
        $('.main-chat').append(templateWhite);
      }, 1000);
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

      setTimeout(function() {
        var templateWhite = $('.tonotshow .messaggio').clone();
        var valoreWhite = 'ok';
        templateWhite.children('p').prepend(valoreWhite);
        templateWhite.find('span').text(ora + ':' + minuti);
        templateWhite.addClass('white');
        $('.main-chat').append(templateWhite);
      }, 1000);

    }

  })

})
