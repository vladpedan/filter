var taskService = (function () {
    return {
        server: 'http://learn-todo.gear.host/api/tasks',        
        getTasks: function () {
            var self = this;           
            $.ajax({
                url: self.server,
                type: 'GET',
                success: function (response) {                  
                    console.log('Success', response);
                    for (var i = 0; i < response.length; i++) {
                        var someTask = createTask(response[i]);                                                                
                    }
                    $('#tasks').append(someTask);
                },
                error: function (response) {
                    console.log('Error', response);
                }
            })
        }
    }
  	 
}) ();

$(document).on('click', '.navbar', function () {
    $(this).css('background-color','red');
});