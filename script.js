var arrlength = 60;
var tablesize = 10;
var start = 1;
var end = 10;
var cur = 1;
var max = 6;


function dispindexbuttons() {

    $(".index_buttons").remove();
    $(".index_buttons").append('<button onclick="prev()">previous</button>');

    for (var i = 1; i <= max; i++) {
        $(".index_buttons").append('<button onclick="indexpagination()" index="' + i + '">' + i + '</button>');

    }
    $(".index_buttons").append('<button onclick="next()">next</button>');
}
dispindexbuttons();

function highlight() {
    start = ((cur - 1) * tablesize) + 1;
    end = (start + tablesize) - 1;
    if (end > arrlength) {
        end = arrlength;
    }
    $(".footer span").text('showing' + start + 'to' + end + 'of' + arrlength + 'entries');
    $(".index_buttons button").removeClass('active');
    $(".index_buttons button[index='" + cur + "']").addClass('active');

}