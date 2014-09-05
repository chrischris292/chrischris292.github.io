   
    time = new Date().getTime();
$(window).scroll(function(c) {
    var d = new Date().getTime();
    var a = $(window).scrollTop();
    if (d - time > 50 && a < 700) {
        var b = (a / 300);
        $(".img").css("opacity", b);
        time = d
    }
});


            $(document).ready(function() {
            $(".topHeader > h1").addClass("animated tada")
            $('.tooltip').tooltipster();
            $('#globe').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>Welcome Website</div>')
            });
            $('#twitter').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>Twitter</div>')
            });
            $('#github').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>GitHub</div>')
            });
            $('#linkedin').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>LinkedIn</div>')
            });
            $('#mail').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>Mail</div>')
            });
         $(".thirdsColumn").hover(function(){
            $(this).addClass('animated ' + $(this).data('action'));
        });
        $(".thirdsColumn").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
            $(this).removeClass('animated ' + $(this).data('action'));
        });


    });


