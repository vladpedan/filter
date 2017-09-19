$('#tasks').on('click', '.line-through', function () {
	var taskRow = $(this).parents('.checkbox');
    taskRow.toggleClass('completed');

    var task = {
        id: taskRow.data('taskid'),
        title: taskRow.find('label').text(),
        isDone: $(this).prop('checked')
    };

    taskService.updateTask(task);
});

$('#tasks').on('click', '.close', function () {
    var taskId = $(this).parents('.checkbox').data('taskid');
    $(this).parent().remove();
    if (taskId != undefined) {
        taskService.deleteTask(taskId);
    } 
});

function createTask(task) {
	var createdDiv = '<div class="checkbox'+ (task.isDone ? ' completed' : '') +'" data-taskid='+ task.id +'><label><input type="checkbox" value="" class="line-through">' + task + '</label> <button class="close" type="submit"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
	return $('#tasks').append(createdDiv);;
}

$('.input-group-btn').click(function () {
    var text = $('#taskName').val();
    if (text !=''){
      $('#tasks').append(createTask(text));
    } else {
    	alert('Write something')
    }

});
