$(document).on('change', "input[type='checkbox']", function() {
	if($(this).is(":checked")) {
		$(this).parent().css("text-decoration", "line-through");
	} else {
		$(this).parent().css("text-decoration", "none");
	}
 })

$(document).on('click', '.close', function () {
    $(this).parent().remove();
});

function createTask(text) {
	var createdDiv = '<div class="checkbox"><label><input type="checkbox" value="">' 
	+ text + '</label><button class="close" type="submit"><i class="fa fa-times" aria-hidden="true"></i></button><hr></div>';
	return createdDiv;
}

$('.input-group-btn').click(function () {
    var text = $('#taskName').val();
    if (text !=''){
      $('#tasks').append(createTask(text))
    } else {
    	alert('Write something')
    }

});

