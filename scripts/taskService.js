var taskService = (function () {
    return {
        server: 'http://learn-todo.gear.host/api/tasks',        
        getTasks: function () {
            var object = this;           
            $.ajax({
                url: object.server,
                type: 'GET',
                success: function (response) {                  
                    console.log('Success', response);
                    for (var i = 0; i < response.length; i++) {
                        createTask(response[i]);                                                                
                    }
                },
                error: function (response) {
                    console.log('Error', response);
                }
            })
        }
    }
  	 
}) ();

$(document).on('click', '.navbar', function () {
    $(this).css('background-color','white');
});