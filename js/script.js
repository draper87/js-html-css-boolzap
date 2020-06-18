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
    var allContatti = $('.contatti .singolo-contatto');

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

  // cliccando sul messaggio appare un menu a tendina
  $(document).on('click', '.messaggio',
    function() {
      $(this).children('.dropdown').toggleClass('vedi');
      $(this).siblings().children('.dropdown').removeClass('vedi');
    }
  )


  // cliccando su Cancella messaggio il messaggio viene rimosso dalla cronologia chat
  $(document).on('click', '.cancella',
    function() {
      $(this).parents('.messaggio').remove();
    }
  )


  // Cliccando sul contatto scelto viene mostrata la relativa chat
  $(document).on('click', '.contatti .singolo-contatto',
    function() {
     var dataContact = $(this).attr('data-contact');
     var immagine = $(this).find('img').attr('src');
     var nomeAttuale = $(this).find('h4').text();
     console.log(immagine);
     console.log(dataContact);
     $(this).siblings().removeClass('selezionato');
     $(this).addClass('selezionato');
     var selettoreChat = '.single-chat[data-chat="' + dataContact + '"]';
     console.log(selettoreChat);
     $(selettoreChat).siblings().removeClass('active');
     $(selettoreChat).addClass('active');
     $('.attuale').find('img').attr('src', immagine);
     $('.attuale').find('h4').text(nomeAttuale);
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
      $('.main-chat .single-chat.active').append(template);
      $('.main-chat').scrollTop($('.main-chat').prop('scrollHeight'));
      $('input').val('');

      // Ottengo 'Ok' come risposta ogni volta che scrivo qualcosa in chat
      setTimeout(function() {
        var templateWhite = $('.tonotshow .messaggio').clone();
        var valoreWhite = 'ok';
        templateWhite.children('p').prepend(valoreWhite);
        templateWhite.find('span').text(ora + ':' + minuti);
        templateWhite.addClass('white');
        $('.main-chat .single-chat.active').append(templateWhite);
        $('.main-chat').scrollTop($('.main-chat').prop('scrollHeight'));
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
