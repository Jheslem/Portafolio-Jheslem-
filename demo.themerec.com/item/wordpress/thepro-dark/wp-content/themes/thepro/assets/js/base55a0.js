/*!
  * Theme: ThePRO
  * Description: Personal Portfolio Wordpress Theme
  * Author: ThemeREC
  * Author URI: https://www.templatemonster.com/authors/themerec/
  * License: TemplateMonster Website Templates Licenses: https://www.templatemonster.com/licenses
  */

(function($) {
     "use strict";

     // Preloader
     $(window).on("load", function () {
          $(".loader-bar").fadeOut(400), $(".preloader").delay(500).slideUp(700);
     });

     // Navbar
     $(window).on("scroll load", function () {
          // Sticky Navbar
          if ($('body').hasClass('sticky-nabar')) {
               var stickyPlaceHolder = $("#sticky-placeholder"),
                    nav = $("#navbar-main"),
                    navHeader = nav.outerHeight();

               if ($(window).scrollTop() > 90) {
                    nav.addClass('navbar-scrolled');
                    $(".navbar-nav").addClass('navbar-nav-scrolled');
                    stickyPlaceHolder.height(navHeader);
               } else {
                    nav.removeClass('navbar-scrolled');
                    $(".navbar-nav").removeClass('navbar-nav-scrolled');
                    stickyPlaceHolder.height(0);
               }
          }
     });

     // Navbar Menu Toggle Mobile
     $('.navbar-menu-toggle').on("click", function () {
          if ( $(this).hasClass('active') ) {
               $(this).removeClass('active');
          } else {
               $(this).addClass('active');
          }
     });

     // closes the responsive menu on body or menu item click
     $('#tr-bodyContent, .navbar-nav a.nav-link, .navbar-nav a.dropdown-item').on("click", function () {
          $(".navbar-collapse").collapse('hide');
          $('.navbar-menu-toggle').removeClass('active');
     });

     // Back to Top Button
     $(window).on("scroll load", function () {
          if ( $(window).scrollTop() > 300 ) {
               $(".back-top").addClass('show');
          } else {
               $(".back-top").removeClass('show');
          }
     });
     $('a.back-top').on("click", function (e) {
          e.preventDefault();
          $('html, body').animate({scrollTop: 0}, 300);
     });

     
     // Portfolio Grid System & Filter Bar
     $("#portfolio-123", function () {
          var t = $("#portfolio-123 .portfolio-grid"),
               i = $("#portfolio-123 .filter-control li");
          t.imagesLoaded(function () {
               t.isotope({ itemSelector: "#portfolio-123 .single-item", masonry: { horizontalOrder: !0 } }),
                    i.on("click", function () {
                         i.removeClass("tab-active"), $(this).addClass("tab-active");
                         var a = $(this).data("filter");
                         t.isotope({ filter: a, transitionDuration: ".25s" });
                    });
          });
     });

     // Portfolio Lightbox
     $(document).on(
          "click",
          "[data-lightbox]",
          lity.options(
               "template",
               '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><div class="lity-close" data-lity-close aria-label="Close (Press escape to close)"><span class="btn-line"></span></div></div></div></div>'
          )
     );

     // Lightbox Content Popup
     $(".portfolio-item").magnificPopup({
          mainClass: "mfp-scale-portfolio mfp-portfolio",
          type: "inline",
          removalDelay: 120,
          overflowY: "scroll",
          preloader: !1,
          fixedContentPos: !0
     });

     // Share post buttons
          // --- Open window
          $('.share-post a.openwin').on("click", function(e) {
               e.preventDefault();
               var b = $(this),
                    c = "";

               b = e.currentTarget.toString();
               c = $(window).width() / 2 - 450;
               e = $(window).height() / 2 - 300;

               window.open(b, 'window', "left=" + c + ",top=" + e + ",width=900,height=600,toolbar=0")
          });

          // -- Open Print
          $(document).on("click", ".share-post a.openprint", function () {
               return window.print(), !1;
          });

          // Initialize tooltips
          const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
          const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

          // -- Copy Post link
          $(".share-post a.copylink").on("click", function (e) {
               e.preventDefault();
               var url = $(this).attr("href"),
                    copyTooltip = $(this),
                    tooltip = bootstrap.Tooltip.getOrCreateInstance(copyTooltip);

               navigator.clipboard.writeText(url).then(function() {
                    // console.log('Copied!');
                    tooltip.setContent({ '.tooltip-inner': baseOpt.copied_txt })
                    copyTooltip.on('hidden.bs.tooltip', () => {
                         tooltip.setContent({ '.tooltip-inner': baseOpt.copy_txt })
                    })

               }, function() {
                    console.log('Not Copied!');
               });
          });

})(jQuery);