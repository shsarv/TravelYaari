$(document).ready(function() {
    // INIT SIDENAV
    $(".button-collapse").sideNav();

    //INIT SLIDER
    $(".slider").slider({
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });

    //AUTOCOMPLETE
    $(".autocomplete").autocomplete({
        data: {
            "Aruba": null,
            "Cancun Mexico": null,
            "Hawaii": null,
            "Florida": null,
            "California": null,
            "Jamaica": null,
            "Europe": null,
            "The Bahamas": null
        }
    });

    //INIT SCROLLSPY
    $(".scrollspy").scrollSpy();

});