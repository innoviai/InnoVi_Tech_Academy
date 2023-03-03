$(".menuBox .menu-content .content-detail-preview").each(function(i){
    $(this).hide();
});

$(".menuBox .menu-content .preview-0").show();

$(".menuBox .container-menu-title .menu-title div").each(function(i) {
    $(this).click(function(){
        $(".menuBox .menu-content .content-detail-preview").each(function(i){
            $(this).hide()
        })

        $(".menuBox .menu-content .preview-" + i).show()

        $(".menuBox .container-menu-title .menu-title div").each(function(i) {
            $(this).removeClass('active')
        })

        $(this).addClass('active');
    })
});