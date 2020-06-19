// 1 funzione, dobbiamo aggiungere un messaggio verde quando scriviamo qualcosa all interno dell input e premiamo il tasto Invio/icona
$(document).ready(function() {

  // Cliccando l icona viene aggiunto un messaggio verde
  $(document).on('click', '.send i',
    function() {
      scriviMessaggio();
    }
  )

  // Premendo il tasto Invio viene aggiunto un messaggio verde
  $('.inviotesto input').keypress(function(event) {
    if (event.which === 13 ) {
      scriviMessaggio();
    }
  })

  // Scrivo il nome di un contatto e me lo restituisce tra la lista dei contatti
  $('.find-wrapper input').keyup(function() {
    var valoreInput = $(this).val().toLowerCase();
    var allContatti = $('.contatti .singolo-contatto');

    // eseguo ciclo each per verificare ogni contatto
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

  // quando faccio il focus sul input di scrivi messaggio deve comparire/scomparire l icona microfono
  $('.write-chat .inviotesto input').focusin(function() {
    $('.send i').removeClass('fa-paper-plane').addClass('fa-microphone');
  })

  $('.write-chat .inviotesto input').focusout(function() {
    $('.send i').removeClass('fa-microphone').addClass('fa-paper-plane');
  })


  // Cliccando sul contatto scelto viene mostrata la relativa chat
  $(document).on('click', '.contatti .singolo-contatto',
    function() {
     // prendo l attributo data-contact del selettore
     var dataContact = $(this).attr('data-contact');
     // prendo il link all immagine del contatto scelto e relativo nome
     var immagine = $(this).find('img').attr('src');
     var nomeAttuale = $(this).find('h4').text();

     // rimuovo la classe "evidenzia in grigio" a tutti i selettori fratelli di quello selezionato
     $(this).siblings().removeClass('evidenziaGrigio');
     // aggiungo la classe evidenzia in grigio al nostro selettore
     $(this).addClass('evidenziaGrigio');

     // creo variabile che linka al selettore collegato al contatto da noi cliccato
     var selettoreChat = '.single-chat[data-chat="' + dataContact + '"]';

     // vado a rimuovere la classe active a tutti i fratelli della chat collegata al contatto clicatto
     $(selettoreChat).siblings().removeClass('active');

     // vado ad aggiungere la classe active alla chat collegata al contatto clicatto
     $(selettoreChat).addClass('active');

     // vado ad aggiungere avatar e nome nel header della chat
     $('.attuale').find('img').attr('src', immagine);
     $('.attuale').find('h4').text(nomeAttuale);
    }
  )

  // Funzione che aggiunge il messaggio verde e restituisce il messaggio bianco con scritto ok
  function scriviMessaggio() {
    // clono il codice html del mio modello per i messaggi della chat
    var template = $('.tonotshow .messaggio').clone();

    // prendo il valore del messaggio scritto dall utente
    var mioValore = $('.inviotesto input').val();

    // Creo delle variabili per il timestamp
    var orario = new Date();
    var ora = orario.getHours();
    var minuti = orario.getMinutes();
    var oraCorrente = aggiungiZero(ora) + ':' + aggiungiZero(minuti);

    // Se il messaggio è diverso da '' allora procedere al invio del messaggio
    if (mioValore != '') {
      template.children('p').prepend(mioValore);
      template.find('span').text(oraCorrente);
      template.addClass('greeny');
      $('.main-chat .single-chat.active').append(template);

      // funzione che permette di scrollare in giu automaticamente la finestra della chat
      $('.main-chat').scrollTop($('.main-chat').prop('scrollHeight'));
      // svuoto il valore dell input
      $('input').val('');

      // Ottengo 'Ok' come risposta ogni volta che scrivo qualcosa in chat dopo un intervallo di 1 secondo
      setTimeout(function() {
        template = $('.tonotshow .messaggio').clone();
        var valoreWhite = 'ok';
        template.children('p').prepend(valoreWhite);
        template.find('span').text(oraCorrente);
        template.addClass('white');
        $('.main-chat .single-chat.active').append(template);
        $('.main-chat').scrollTop($('.main-chat').prop('scrollHeight'));
      }, 1000);
    }
}
    // Funzione che corregge il formato orario 00:00
    function aggiungiZero(numero) {
      if (numero < 10) { // se il numero restituito è inferiore a 10 allora aggiungiamo il numero 0 davanti
        return '0' + numero;
      }
      return numero;
    }

})
