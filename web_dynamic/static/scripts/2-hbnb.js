$(document).ready(function(){

    $(".check").click(function(){

        $("ul[data-id=':amenity_id']").prop("checked", true);

    });

    $(".uncheck").click(function(){

		$("ul[data-id=':amenity_id']").prop("checked", false);

    });

});
// api status
  $(function () {
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
      if (String(textStatus) === String('success')) {
	  	$('#api_status').addClass('available');
	   } else {
	    $('#api_status').removeClass('available');
	   }
    });
  });
});
