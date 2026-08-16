(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);


 

        document.addEventListener("DOMContentLoaded", function () {

            const navbar =
                document.getElementById("mainNavbar");

            const mobileToggle =
                document.getElementById("mobileMenuToggle");

            const mobileMenu =
                document.getElementById("mobileMenu");

            const mobileClose =
                document.getElementById("mobileMenuClose");

            const mobileOverlay =
                document.getElementById("mobileMenuOverlay");

            const mobileLinks =
                document.querySelectorAll(
                    ".mobile-nav-link, .mobile-service-link"
                );

            const mobileServicesToggle =
                document.getElementById(
                    "mobileServicesToggle"
                );

            const mobileServicesList =
                document.getElementById(
                    "mobileServicesList"
                );


            /* =====================================================
               SCROLL NAVBAR
            ===================================================== */

            function handleNavbarScroll() {

                if (window.scrollY > 60) {

                    navbar.classList.add("scrolled");

                } else {

                    navbar.classList.remove("scrolled");

                }

            }

            window.addEventListener(
                "scroll",
                handleNavbarScroll,
                {
                    passive: true
                }
            );

            handleNavbarScroll();


            /* =====================================================
               OPEN MOBILE MENU
            ===================================================== */

            function openMobileMenu() {

                mobileMenu.classList.add("active");

                mobileOverlay.classList.add("active");

                mobileToggle.classList.add("active");

                mobileToggle.setAttribute(
                    "aria-expanded",
                    "true"
                );

                mobileToggle.setAttribute(
                    "aria-label",
                    "Close navigation"
                );

                mobileMenu.setAttribute(
                    "aria-hidden",
                    "false"
                );

                document.body.classList.add(
                    "menu-open"
                );

            }


            /* =====================================================
               CLOSE MOBILE MENU
            ===================================================== */

            function closeMobileMenu() {

                mobileMenu.classList.remove("active");

                mobileOverlay.classList.remove("active");

                mobileToggle.classList.remove("active");

                mobileToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                mobileMenu.setAttribute(
                    "aria-hidden",
                    "true"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }


            /* =====================================================
               TOGGLE MOBILE MENU
            ===================================================== */

            mobileToggle.addEventListener(
                "click",
                function () {

                    const isOpen =
                        mobileMenu.classList.contains(
                            "active"
                        );

                    if (isOpen) {

                        closeMobileMenu();

                    } else {

                        openMobileMenu();

                    }

                }
            );


            /* =====================================================
               CLOSE BUTTON
            ===================================================== */

            mobileClose.addEventListener(
                "click",
                closeMobileMenu
            );


            /* =====================================================
               OVERLAY CLICK
            ===================================================== */

            mobileOverlay.addEventListener(
                "click",
                closeMobileMenu
            );


            /* =====================================================
               CLOSE WHEN NAV LINK CLICKED
            ===================================================== */

            mobileLinks.forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeMobileMenu();

                    }
                );

            });


            /* =====================================================
               ESCAPE KEY
            ===================================================== */

            document.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Escape" &&
                        mobileMenu.classList.contains(
                            "active"
                        )
                    ) {

                        closeMobileMenu();

                        mobileToggle.focus();

                    }

                }
            );


            /* =====================================================
               MOBILE SERVICES ACCORDION
            ===================================================== */

            mobileServicesToggle.addEventListener(
                "click",
                function () {

                    const isOpen =
                        mobileServicesToggle.classList.contains(
                            "active"
                        );

                    if (isOpen) {

                        mobileServicesToggle.classList.remove(
                            "active"
                        );

                        mobileServicesList.classList.remove(
                            "active"
                        );

                        mobileServicesToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    } else {

                        mobileServicesToggle.classList.add(
                            "active"
                        );

                        mobileServicesList.classList.add(
                            "active"
                        );

                        mobileServicesToggle.setAttribute(
                            "aria-expanded",
                            "true"
                        );

                    }

                }
            );


            /* =====================================================
               CLOSE MENU WHEN RESIZING TO DESKTOP
            ===================================================== */

            window.addEventListener(
                "resize",
                function () {

                    if (
                        window.innerWidth >= 992
                    ) {

                        closeMobileMenu();

                    }

                }
            );

        });

  /* =========================================================
   PORTFOLIO FILTER
========================================================= */

const portfolioFilters =
    document.querySelectorAll(".portfolio-filter");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

const featuredCase =
    document.querySelector(".featured-case");


portfolioFilters.forEach(filterButton => {

    filterButton.addEventListener("click", () => {

        /* Remove active state */
        portfolioFilters.forEach(button => {
            button.classList.remove("active");
        });

        filterButton.classList.add("active");


        const selectedFilter =
            filterButton.dataset.filter;


        /* Filter cards */
        portfolioItems.forEach(item => {

            const category =
                item.dataset.category;

            const shouldShow =
                selectedFilter === "all" ||
                category === selectedFilter;


            if (shouldShow) {

                item.classList.remove(
                    "portfolio-hidden"
                );

                item.style.opacity = "0";
                item.style.transform = "translateY(15px)";

                setTimeout(() => {

                    item.style.opacity = "1";
                    item.style.transform = "translateY(0)";

                }, 50);

            } else {

                item.classList.add(
                    "portfolio-hidden"
                );

            }

        });


        /* Featured project */

        if (featuredCase) {

            const featuredCategory =
                featuredCase.dataset.category;

            if (
                selectedFilter === "all" ||
                selectedFilter === featuredCategory
            ) {

                featuredCase.style.display = "";

            } else {

                featuredCase.style.display = "none";

            }

        }

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const portfolioReveal =
    document.querySelectorAll(".reveal-portfolio");


const portfolioObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    portfolioObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


portfolioReveal.forEach(element => {

    portfolioObserver.observe(element);

});
/* =========================================================
   BLOG SCROLL REVEAL
========================================================= */

const blogRevealElements =
    document.querySelectorAll(".reveal-blog");

const blogObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


blogRevealElements.forEach(element => {

    blogObserver.observe(element);

});


/* =========================================================
   NEWSLETTER DEMO
========================================================= */

const newsletterForm =
    document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button =
            newsletterForm.querySelector("button");

        button.innerHTML =
            'Subscribed <i class="bi bi-check-lg"></i>';

        button.disabled = true;

    });

}

 document.addEventListener("DOMContentLoaded", function () {

    const filterButtons =
        document.querySelectorAll(".portfolio-filter-btn");

    const portfolioItems =
        document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter =
                this.getAttribute("data-filter");

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            portfolioItems.forEach(function (item) {

                const categories =
                    item.getAttribute("data-category");

                if (
                    filter === "all" ||
                    categories.includes(filter)
                ) {

                    item.classList.remove(
                        "portfolio-hidden"
                    );

                } else {

                    item.classList.add(
                        "portfolio-hidden"
                    );

                }

            });

        });

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase() || "index.html";

    document.querySelectorAll(".desktop-navigation a").forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (!linkPage || linkPage.startsWith("#")) {
            return;
        }

        if (linkPage.toLowerCase() === currentPage) {
            link.classList.add("active");

            /* Activate Services parent */
            const dropdown = link.closest(".dropdown");

            if (dropdown) {
                const servicesLink = dropdown.querySelector(".services-link");

                if (servicesLink) {
                    servicesLink.classList.add("active");
                }
            }
        }

    });

});

 
document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase() || "index.html";


    /* =========================================
       DESKTOP NAVIGATION
    ========================================= */

    document.querySelectorAll(".desktop-navigation a").forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (!linkPage || linkPage.startsWith("#")) {
            return;
        }

        if (linkPage.toLowerCase() === currentPage) {

            link.classList.add("active");

            const dropdown = link.closest(".dropdown");

            if (dropdown) {

                const servicesLink =
                    dropdown.querySelector(".services-link");

                if (servicesLink) {
                    servicesLink.classList.add("active");
                }

            }

        }

    });


    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    document.querySelectorAll(
        ".mobile-navigation a"
    ).forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (!linkPage || linkPage.startsWith("#")) {
            return;
        }

        if (linkPage.toLowerCase() === currentPage) {

            link.classList.add("active");

            /* Activate mobile Services */
            const servicesList =
                link.closest(".mobile-services-list");

            if (servicesList) {

                const servicesToggle =
                    document.querySelector(
                        "#mobileServicesToggle"
                    );

                if (servicesToggle) {
                    servicesToggle.classList.add("active");
                }

                /* Automatically open Services */
                servicesList.classList.add("show");

                if (servicesToggle) {
                    servicesToggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );
                }

            }

        }

    });

});
 