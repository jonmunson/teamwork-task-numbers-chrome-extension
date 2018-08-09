
$(window).bind("load", function() {

    setTimeout(appendTaskNumber, 6000);

    function appendTaskNumber() {

        for (var i = 0; i < $("p.task-name a").length; i++) { 
            
            taskNumberString = $("p.task-name a")[i].hash;           // get the task number
            taskNumberString = taskNumberString.replace(/\D/g,'');  // strip the text

            $("p.task-name a")[i].prepend("#" + taskNumberString + " : ");
        }

    }
});







