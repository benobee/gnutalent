import $ from "jquery";
import "owl.carousel";
import Scrollmap from "scrollmap";

(function() {
    var Site = {
        init: function() {
            this.animations();
            this.carousel();
        },
        animations: function() {
            Scrollmap.trigger({
                target: ".image-block-v2.design-layout-collage",
                surfaceVisible: 0.2
            });
        },
        carousel: function() {
            $(".owl-carousel").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                stagePadding: 0,
                autoplayTimeout: 7000,
                autoplayHoverPause: true,
                autoplaySpeed: 1000,
                nav: false,
                navText: false
            });
        }
    };

    $(document).ready(function() {
        Site.init();
    });

})();