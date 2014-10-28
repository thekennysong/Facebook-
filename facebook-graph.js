var Search = {
  makeP: function(data) {
    var html = Search.designate(data);
    $("#results").html(html);
  },

  designate: function(data) {

    var facebookTemplateFunction = Handlebars.compile($('#page-template').html());
    return facebookTemplateFunction(data);
  }
}

jQuery(function(){
  $('#search').submit(function(e) {
    e.preventDefault();

    var word = $('#searchGroup').val();

    $.ajax({
        url: "fb.php?search="+word,
        dataType: 'json',
        success: function(data) {
            Search.makeP(data);
        }
    });

  });
});
