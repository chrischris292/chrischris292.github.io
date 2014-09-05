
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
            if(!$(this).hasClass("animated"))
            $(this).addClass('animated ' + $(this).data('action'));
        });
        $(".thirdsColumn").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
            $(this).removeClass('animated fadeInDown ' + $(this).data('action'));
        });
        $(".topHeader > h1").hover(function(){
            $(this).addClass('animated tada');
        });
        $(".topHeader > h1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
            $(this).removeClass('animated tada');
        });
        $(".aboutMee > a > .title").click(function(){
             $('html,body').animate({scrollTop: $(this).offset().top}, 800);
        })
        $(".workExperience > a > .title").click(function(){
             $('html,body').animate({scrollTop: $(this).offset().top}, 800);
        })
        $(".projectExperience > a > .title").click(function(){
             $('html,body').animate({scrollTop: $(this).offset().top}, 800);
        })
    });


