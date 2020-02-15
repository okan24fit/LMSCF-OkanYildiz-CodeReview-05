
$(".like-button").on("click", function(e) {
    var $counter = $(this).find(".count");
    var count = $counter.text() | 0; //corose current count to an int
    $counter.text(count + 1); //set new count
});