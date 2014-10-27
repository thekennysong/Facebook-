var FacebookSearch = {
  renderPage: function(data) {
    var html = FacebookSearch.setTemplate(data);
    $("#results").html(html);
  },

  setTemplate: function(data) {

    var facebookTemplateFunction = Handlebars.compile($('#page-template').html());
    return facebookTemplateFunction(data);
  }
}

jQuery(function(){
  $('#search').submit(function(e) {
    e.preventDefault();

    var searchTerm = $('#searchGroup').val();

    $.ajax({
        url: "fb.php?search="+searchTerm,
        dataType: 'json',
        success: function(data) {
          FacebookSearch.renderPage(data);
        }
    });

  });
});
