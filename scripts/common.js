$("input[type='checkbox']").change(function() {
	if($(this).is(":checked")) {
		$(this).parent().css("text-decoration", "line-through");
	} else {
		$(this).parent().css("text-decoration", "none");
	}
 })