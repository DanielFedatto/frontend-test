$(document).ready(function() {
    // Slider dos Banners
    $('#banner-slider').slick({
        dots: true,
        arrows: false,
        draggable: false,
    });
    // Slider da Galeria
    $('#gallery-slider').slick ({
        dots: false,
        arrows: true,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    // Função da lista de Accordions
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }

        e.preventDefault();
    });
});