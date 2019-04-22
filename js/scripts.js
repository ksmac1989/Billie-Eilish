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

  $.getJSON('./json/ticket.json', function(data) {
      var output = '<ul class = "searchresults">';
      $.each(data, function(key, val){

          if ((val.Date.search(myExp) != -1) ||  
          (val.Location.search(myExp)!= -1) || 
          (val.City.search(myExp)!= -1) || 
          (val.Time.search(myExp) != -1)) {
              output += '<li>';
              output += '<h5>' + val.Date + '</h5>';
              output += '<h6>' + 'Location: ' + val.Location + '</h6>';
              output += '<h6>' + 'City/Country: ' + val.City + '</h6>';
              output += '<h6>' + 'Status: ' + val.Status + '</h6>';
              output += '</li>';
          }

      });
      output += '</ul>';
      $('#update').html(output);
  });
})
