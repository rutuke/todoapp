<<<<<<< HEAD
//checking off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// deleting function of X
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        // removes the li instead of just diplay:none
        $(this).remove();
    });
    //stop the event from bubbling up - only works on the span
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // assigning the new to do
        var newTodo = $(this).val();
        $(this).val("");
        // adding new li to ul
        $("ul").append("<li><i class='fa fa-trash-o' aria-hidden='true'></i> "+ newTodo +"</li>");
    }
});

$(".fa-pencil-square-o").click(function(){
    $("input[type='text'").fadeToggle();
});

=======
//checking off todos by clicking
$("li").click(function(){
    // if li is gray turn it black, else turn gray
    if($(this).css("color") === "gray"){
        $(this).css("color", "gray");
    }
    $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
});

>>>>>>> db8eaaf624152d9e74c483d31ea916abd80319d8
