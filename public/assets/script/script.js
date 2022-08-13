$(document).ready(function () {

    // toggle navbar mobile
    $("#togglerButton").each(function (_, navToggler) {
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function () {
            $(target).animate({
                height: "toggle",
            })
        })
    })

    // user avatar dropdown
    var dd_btn = $(".dropdown-button")
    var dd_target = $("#dropdown-target")
    dd_btn.click(function () {
        dd_btn.each(function () {
            if (dd_target.hasClass("hidden")) {
                dd_target.removeClass("hidden").addClass("block");
            } else if (dd_target.hasClass("block")) {
                dd_target.removeClass("block").addClass("hidden");
            }
        })
    })
})