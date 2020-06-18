// 1 funzione, dobbiamo aggiungere un messaggio verde quando scriviamo qualcosa all interno dell input e premiamo il tasto Invio/icona
$(document).ready(function() {

  // Cliccando l icona viene aggiunto un messaggio verde
  $(document).on('click', '.send i',
    function() {
      scriviMessaggio();
    }
  )

  // Premendo il tasto Invio viene aggiunto un messaggio verde
  $('.text input').keypress(function(event) {
    if (event.which === 13 ) {
      scriviMessaggio();
    }
  })

  // Scrivo il nome di un contatto e me lo restituisce tra la lista dei contatti
  $('.find-wrapper input').keyup(function() {
    var valoreInput = $(this).val().toLowerCase();
    var allContatti = $('.contatti .contatto');

    allContatti.each(function() {
      var nomeContatto = $(this).find('h4').text().toLowerCase();
      if (nomeContatto.includes(valoreInput)) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    })
  })



  // Cliccando sul contatto scelto viene mostrata la relativa chat
  $(document).on('click', '.contatti .contatto',
    function() {
     // codice
    }
  )

  // Funzione che aggiunge il messaggio verde e restituisce il messaggio bianco con scritto ok
  function scriviMessaggio() {
    var template = $('.tonotshow .messaggio').clone();
    var mioValore = $('.text input').val();
    var orario = new Date();
    var ora = orario.getHours();
    var minuti = orario.getMinutes();
    var oraCorrente = aggiungiZero(ora) + ':' + aggiungiZero(minuti);
    if (mioValore != '') {
      template.children('p').prepend(mioValore);
      template.find('span').text(oraCorrente);
      template.addClass('greeny');
      $('.main-chat').append(template);
      $('.main-chat').scrollTop($('.main-chat').height());
      $('input').val('');

      // Ottengo 'Ok' come risposta ogni volta che scrivo qualcosa in chat
      setTimeout(function() {
        var templateWhite = $('.tonotshow .messaggio').clone();
        var valoreWhite = 'ok';
        templateWhite.children('p').prepend(valoreWhite);
        templateWhite.find('span').text(ora + ':' + minuti);
        templateWhite.addClass('white');
        $('.main-chat').append(templateWhite);
        $('.main-chat').scrollTop($('.main-chat').height());
      }, 1000);
    }
}
    // Funzione che corregge il formato orario 00:00
    function aggiungiZero(numero) {
      if (numero < 10) {
        return '0' + numero;
      }
      return numero;
    }


})
