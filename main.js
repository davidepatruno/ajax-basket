$(document).ready(function(){
  var giocatori = [];
  $('#userinput').keypress(function(event){
    if(event.which == 13){
      var thisinput = $(this);
      var numero_inserito = thisinput.val();
      console.log(numero_inserito);
      $.ajax({
        url: "www.boolean.careers/api/array/basket",
        method: "GET",
        data: {
          n: numero_inserito
        },
        success: function(data){
          console.log(data);
        },
        error: function(){
          alert("non funzia");
        },
      })
    }
  });
});



//   for (var i = 0; i < giocatori.length; i++) {
//     var playercode = giocatori[i].codice_Giocatore;
//     // var divgiocatore = '<div class="playercode">' + codicegiocatore + '</div>';
//
//     // console.log("scrivo l'oggetto");
//     // console.log(giocatori[i].codice_Giocatore);
//     var source = $('#playercode_template').html();
//      //document.getElementById("playercode_template").innerHTML;
//     var template = Handlebars.compile(source);
//     var context = {codicegiocatore : playercode};
//     var html    = template(context);
//     $(".codici_player").append(html);
//   }
//   $('.playercode').click(function(){
//     var thisCode = $(this).text();
//     for (var i = 0; i < giocatori.length; i++) {
//       var playercode = giocatori[i].codice_Giocatore;
//       if (thisCode == playercode) {
//         console.log(giocatori[i]);
//         var source = $('#stats_template').html();
//          //document.getElementById("playercode_template").innerHTML;
//         var template = Handlebars.compile(source);
//         var context = {code : giocatori[i].codice_Giocatore, bounce : giocatori[i].num_Rimbalzi, score : giocatori[i].punti_Segnati, fault : giocatori[i].falli, shoots2 : giocatori[i].successo_duePunti, shoots3 : giocatori[i].successo_trePunti };
//         var html    = template(context);
//         $(".stats_wrapper").html(html);
//       }
//     }
//     console.log($(this).text());
//   })
// })
//
//
//
// function creaCodice(){
//     var codePlayer = "";
//     var casualNumber = "";
//
//     for (var i = 0; i < 3; i++) {
//       //Genero una lettera casuale maiuscola prendendo i valori dall'unicode
//       var casualLetter = String.fromCharCode(Math.floor((Math.random()*(90 - 65 + 1) + 65)));
//       codePlayer += casualLetter;
//     }
//
//     for (var i = 0; i < 3; i++) {
//       casualNumber = Math.floor((Math.random() * 9) + 1);
//       codePlayer += casualNumber;
//     }
//
//     return codePlayer;
// }






// var codgiocatoretemp = $('.template .giocatore_template').clone();
// codgiocatoretemp.text(codiceGiocatore);
// $('.giocatore').append(codgiocatoretemp);
//
// var templatescheda = $('.template .template_scheda').clone();
// var scheda_da_inserire = $('.template .template_scheda .scheda_giocatore').clone();
// scheda_da_inserire.children('.punti_Segnati').text(puntiFatti);
// scheda_da_inserire.children('.num_rimbalzi').text(rimbalzi);
// // $('.scheda_giocatore').append(scheda_da_inserire);
// $('.schede_wrapper').append(templatescheda);
