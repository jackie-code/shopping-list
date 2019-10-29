$("#js-shopping-list-form").submit(function(){
    this.preventDefault();
    alert("handler called");
    $("ul.shopping-list").append(
        "<li>" +
        $("#shopping-list-entry").val() + "</li>"
    );
});

// "checks" the button by adding a class with .toggleClass that draws a line through it
$(".shopping-item-toggle").click(function(){
    $("button.shopping-item-toggle").toggleClass("m__checked");
});

// also could have done this and made the background color green instead of a line through the shoppint item
// $(.shopping-item-toggle).click(function(){
//     $(button.shopping-item-toggle).css("background-color", "green");
// });


// permanently removes items from the list
$("button.shopping-item-delete").click(function(){
    $("span.shopping-item").closest("li").remove();
});
