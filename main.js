$(document).ready(function(){
  var giocatori = [];
  $('#userinput').keypress(function(event){
    if(event.which == 13){
      var thisinput = $(this);
      var numero_inserito = thisinput.val();
      console.log(numero_inserito);
      $.ajax({
        url: "https://www.boolean.careers/api/array/basket",
        method: "GET",
        data: {
          n: numero_inserito
        },
        success: function(data){
          console.log(data);
          for (var i=0; i < data.response.length; i++){
            giocatori.push(data.response[i]);
          }
          for (var i = 0; i < giocatori.length; i++) {
            var cod_giocatore = giocatori[i].playerCode;

            console.log(giocatori[i].playerCode);
            var source = $('#playercode_template').html();
             //document.getElementById("playercode_template").innerHTML;
            var template = Handlebars.compile(source);
            var context = {codicegiocatore : cod_giocatore};
            var html    = template(context);
            $(".codici_player").append(html);
          }
          $('.playercode').click(function(){
            var thisCode = $(this).text();
            for (var i = 0; i < giocatori.length; i++) {
              var cod_giocatore = giocatori[i].playerCode;
              if (thisCode == cod_giocatore) {
                console.log(giocatori[i]);
                var source = $('#stats_template').html();
                 //document.getElementById("playercode_template").innerHTML;
                var template = Handlebars.compile(source);
                var context = {code : giocatori[i].playerCode, bounce : giocatori[i].rebounds, score : giocatori[i].points, fault : giocatori[i].fouls, shoots2 : giocatori[i].twoPoints, shoots3 : giocatori[i].threePoints };
                var html    = template(context);
                $(".stats_wrapper").html(html);
              }
            }
          });
        },
        error: function(){
          alert("non funzia");
        },
      })
    }
  });
});
