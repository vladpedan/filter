var taskService = (function () {
    return {
        baseUrl: 'http://learn-todo.gear.host/api/tasks',        
        getTasks: function () {
            var self = this;           
            $.ajax({
                url: self.baseUrl,
                type: 'GET',
                success: function (response) {                  
                    console.log('Success', response);
                    for (var i = 0; i < response.length; i++) {
                        var someTask = createTask(response[i]);                                                                
                    }
                    $('.checkbox.completed').find('.line-through').prop('checked', true);
                },
                error: function (response) {
                    console.log('Error', response);
                }
            })
        },

        addTask: function (task) {
            var self = this;
            $.ajax({
                url: self.baseUrl,
                type: 'POST',
                data: task,
                success: function (response) {
                    console.log('Success', response);
                    createTask(response);                   
                },
                error: function (response) {
                    console.log('Error', response);
                }
            })
        },

        deleteTask: function (taskId) {         
            var self = this;
            $.ajax({
                url: self.baseUrl + '/' + taskId,
                type: 'DELETE',
                success: function (response) {
                    console.log('Success', response);
                },
                error: function (response) {                    
                    console.log('Error', response);
                }
            })
        },

        updateTask: function (task) {
            console.log(task);
            var self = this;
            $.ajax({
                url: self.baseUrl,
                type: 'PUT',
                data: task,
                success: function (response) {
                    console.log('success', response);
                },
                error: function (response) {
                    console.log('error', response);
                }
            })
        },
    }
  	 
}) ();

$(document).on('click', '.navbar', function () {
    $(this).css('background-color','red');
});