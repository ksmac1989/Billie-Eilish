var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


$('#search').keyup(function(){

  var searchField = $('#search').val();
  var myExp = new RegExp(searchField, "i");

  $.getJSON('./json/tour.json', function(data) {
      var output = '<ul class = "searchresults">';
      $.each(data, function(key, val){

          if ((val.Date.search(myExp) != -1) ||  
          (val.Location.search(myExp)!= -1) || 
          (val.City.search(myExp)!= -1) || 
          (val.Time.search(myExp) != -1)) {
              output += '<li>';
              output += '<h4>' + val.Date + '</h4>';
              output += '<h5>' + 'Location: ' + '<em>' + val.Location + '</em>' + '</h5>';
              output += '<h5>' + 'City/Country: ' + '<em>' + val.City + '</em>' + '</h5>';
              output += '<h5><a href="./map/' + val.Map + '.html" target="_blank">' + 'map' + '</a></h5>';
              output += '</li>';
          }

      });
      output += '</ul>';
      $('#update').html(output);
  });
})

// $(function() {
//   $("#animate").hover(
//       function() {
//           $(this).attr("src", "./img/about/music/music-01-scratch.gif");
//       },
//       function() {
//           $(this).attr("src", "./img/about/music/music-01-scratch.png");
//       }                         
//   );                  
// });

