$(document).ready(function() {
    $('#addTaskBtn').click(function() {
        var taskText = $('#taskInput').val();
        if (taskText) {
            $('#taskInprogress').append('<li>' + taskText + '</li>').listview('refresh');
            $('#taskInput').val('');
        }
    });

    $('#resetTasksBtn').click(function() {
        $('#taskInprogress').empty().listview('refresh');
        $('#taskDone').empty().listview('refresh');
    });

    $('#taskInprogress').on('swiperight', 'li', function() {
        // $(this).toggleClass('completed');
        $('#taskDone').append('<li>' + $(this).text() + '</li>').listview('refresh');
        // document.getElementById("#taskInprogress").style.display = "none";
        $(this).hide('fast', function () { 
            $(this).remove();
        })
        $('#taskInprogress').listview('refresh');
        $('#taskDone').listview('refresh');
    });

    $('.taskList').on('swipeleft', 'li', function() {
        $(this).slideUp(function() {
            // $(this).remove();
            $(this).hide('slow', function () { 
                $(this).remove();
            })
            $('#taskInprogress').listview('refresh');
            $('#taskDone').listview('refresh');
        });
    });
});