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

