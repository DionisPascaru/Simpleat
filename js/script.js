$(document).ready(function(){
    // fix top-bar on page scroll
    function fixedBar(){
        var topBar =   $(window).width() < 768 ? $('.top-bar .action-btn-right') : $('.top-bar ');
        $(window).scrollTop() > 200 ? topBar.addClass('fixed-top-bar') : topBar.removeClass('fixed-top-bar');
    };
    
    $(window).scroll(function(){ fixedBar(); });
    fixedBar();

    // scroll top button
    $('.order-btn').click(function() {
        $("html, body").animate({
            scrollTop: 100
        }, 1000);
        return false;
    });

    // drop-down list items
    $('.list-label').on('click', function(){
        $('.list-items').toggle(100);
    });

    $('.list-items li').on('click', function(){
        var itemText = $(this).text();
        $('.list-label').text(itemText);
        $('.list-items').toggle(100);
    });

    // checkbox popup window
    $('.action-form--item').click(function(e) {
        e = $(this);
        var checkbox =  e.children('input[type="checkbox"]').is(':checked');
        
        if (checkbox){
            $('.message-box').remove();
            e.append(`<div class="message-box">
                <p>By subscribing you will recive 12 bottles of Simpleat monthly.</p>
                <p>You can cancel your subscription anytime.<a href="#">Learn more</a></p>
            </div>`);   
        } else {
            $('.message-box').remove();
        }
    });

    $('.action-form--item').on('focusout', function() {
        $('.message-box').remove();
    });

    // video custom controls
    $('.testimonial-item').click(function(){
        currentVideo = $(this).find('.video');
        $(this).find('.wrapper').toggle();
        if(currentVideo.prop('paused')){
            currentVideo.attr('controls','');
            currentVideo.trigger('play')
        } else {
            currentVideo.removeAttr("controls");
            currentVideo.trigger('pause');
        }        
    });    

    // create coockie
    function createCookie(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    // check coockie
    function checkCoockie(name){
        if(name == ''){
            $('.coockie').fadeIn().show();
        } else {
            $('.coockie').fadeIn().hide();
        }
    }

    // call coockie
    checkCoockie(document.cookie);

    // set coockie
    $('.accept-btn').click(function(){
        let coockieName = 'example';
        let coockieValue = 'user@mail.com';
        createCookie(coockieName, coockieValue, 7);
        $('.coockie').fadeIn().hide();
    });
});