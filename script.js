
// section 2 tabs JS starts
$(document).ready(function () {
    $("ul#tabs li").click(function (e) {
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum + 1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child(" + nthChild + ")").addClass("active");
        }
    });
});

// section 2 tabs JS ends


function geekAlert() {
    alert("An Online Computer Science"
        + "Portal for Geeks");
}