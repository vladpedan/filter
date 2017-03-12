taskService.getTasks();


$('#tasks').on('click', '.line-through', function () {
	var taskRow = $(this).parents('.checkbox');
    taskRow.toggleClass('completed');
    var task = {
        id: taskRow.data('taskid'),
        title: taskRow.find('label').text(),
        isDone: $(this).prop('checked')
    };
});

$(document).on('click', '.close', function () {
    $(this).parent().remove();
});

function createTask(text) {
	var createdDiv = '<div class="checkbox'+ (task.isDone ? ' completed' : '') +'" data-taskid='+ task.id +'><label><input type="checkbox" value="" class="done-checkbox">' + task.title + '</label><i class="fa fa-times" aria-hidden="true"></i></button><hr></div>';
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

