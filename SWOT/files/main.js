$.scrollify({
    section: '.panel',
    scrollbars: false,
    before: function (i, panels) {
        var ref = panels[i].attr('data-section-name');
        
        $('.pagination a.active').removeClass('active');
        
        $('.pagination a[href=#' + ref + ']').addClass('active');
        
        /*
        if(ref==="features") {
          $(".features .gallery0,.features .gallery1,.features .gallery2").addClass("moved");
  
        }*/
        
        panels[i].find('.gallery0,.gallery1,.gallery2').addClass('moved');
        
        
        if (ref === 'design') {
            $('.features').find('.gallery0,.gallery1,.gallery2').removeClass('moved');
            $('.buy .gallery0').css('top', 0);
        }
        if (ref === 'features') {
            $('.buy .content').removeClass('moved');
            initialPosition();
        }
        if (ref === 'buy') {
            $('.buy .content').addClass('moved');
            
            $('.buy .gallery0').css('top', 0);
        }
    },
    after: function (i, panels) {
        var ref = panels[i].attr('data-section-name');
        
        if (ref === 'home') {
            $('.design').find('.gallery0,.gallery1,.gallery2').removeClass('moved');
        }
        for (var j = 0; j < panels.length; j++) {
            if (j > i) {
                
                //panels[j].find(".moved").removeClass("moved");
            }
        }
    },
    afterResize: initialPosition,
    afterRender: initialPosition,
});

$('.pagination a').on('click', function () {
    $.scrollify.move($(this).attr('href'));
});

$('a.scroll').on('click', function () {
    $.scrollify.move($(this).attr('href'));
});

function initialPosition() {
    var current = $.scrollify.current();
    
    if (current.hasClass('buy') === false) {
        var height = parseInt($('.buy').height());
        var f = parseInt($('.features .gallery1').height()) - 50;
        
        var top = 0 - (height * 0.4) - (height - f);
        $('.buy .gallery0').css('top', top);
    } else {
        $('.features').find('.gallery0,.gallery1,.gallery2').addClass('moved');
    }
}

/* Detect scroll to change logo */

const domImgBlue = document.getElementById('header-logo-blue');
const domImgWhite = document.getElementById('header-logo-white');

window.addEventListener('scroll', checkForLogoColor);

// Run it instantly cause browser can be scrolled down on init
checkForLogoColor();

function checkForLogoColor() {
    if (window.scrollY > 0) {
        domImgBlue.classList.add('visible');
        domImgWhite.classList.remove('visible');
    } else {
        domImgBlue.classList.remove('visible');
        domImgWhite.classList.add('visible');
    }
}