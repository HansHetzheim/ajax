// document.getElementById("dailyQuote").addEventListener("click", loadQuote);
//
// function loadQuote() {
//   var xhr = new XMLHttpRequest();
//
//   xhr.open("GET", "https://thatsthespir.it/api", true);
//
//   xhr.onload = function(){
//     if(this.status == 200){
//       var quote = JSON.parse(this.responseText);
//       console.log(quote);
//
//       document.getElementById('quote').innerHTML = quote.quote;
//       document.getElementById('photo').innerHTML='<img src="'+quote.photo+'" id="img1">';
//
//
//     }
//   }
//
//   xhr.send();
// }

$('#dailyQuote').click(function(){
  $.ajax({url: "https://thatsthespir.it/api", success: function(quote){
      console.log(quote)
      $('#quote').html("\"" + quote.quote + "\"");
      $('#photo').html('<img src="'+quote.photo+'">');
    }, error: function() {
    alert( "request error..." );
  }});
});
