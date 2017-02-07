$(document).ready(function(){
    var tabs = $('#tabs');
    $('.tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function(e){
        /* Предотвращаем стандартную обработку клика по ссылке */
        e.preventDefault();

        /* Узнаем значения ID блока, который нужно отобразить */
        var tabId = $(this).attr('href');

        /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $('.tabs a',tabs).removeClass();
        $(this).addClass('active');

        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });
    $("#header, .footer-nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});


