$(function(){
    $(window).scroll(function(e){
        $(".scroll_sample").text('今んとここの辺:' + $(this).scrollTop());
    });
});

$(function () {
    $(window).resize(function (e) {
        var h = $(this).height();
        var w = $(this).width();
        $('.resize_sample').text('h:' + h + ' w:' + w);
    });
});

$('#nobi-box').on('click', function(){
    console.log('にゃ');
    $('#input-cat').on('focus', function(){
        console.log('しゃー');
    
    
    })
    
    $('#nobi-box').animate({
        'fontSize': '1000000000000px',
    }).animate({
        'fontSize': '0px',
    
    })


})

$('#nobi-box2').on('click', function(){
    console.log('にゃ');
    $('#input-cat2').on('focus', function(){
        console.log('にゃ？');
    
    
    })
    
    $('#nobi-box2').animate({
        'fontSize': '10px',
    }).animate({
        'fontSize': '0px',
    
    })


})


$('#nobi-box3').on('click', function(){
    console.log('にゃwwwwwwwwwwwwwwwwwwww');
    $('#input-cat3').on('focus', function(){
        console.log('にゃwwwwwww？');
    
    
    })
    
    $('#nobi-box3').animate({
        'fontSize': '1000000000px',
    }).animate({
        'fontSize': '0px',
    
    })


})



$(function () {
    //ボタンが押されたら入力内容をアラートで表示する
    $('.button1_1').click(function () {
        var text = $('.test1_1 option:selected').text();
        alert(text);
    }),
        //ボタンが押されたら選択肢3に変更する
        $('.button1_1').click(function () {
            $('.test1_1').val('3');
        });
});

$(function () {
    $('.button1').click(function () {
        var text = $('[name="cat1"]:checked').val();
        alert(text);
    });
}), $(function () {
    $('[name="fruits3"]').change(function () {
        //選択した値をアラートで表示
        alert($(this).val());
    });
});


$(function(){
    $('.input_sample').on('input', function(){
        var input_text = $(this).val();
        $('.input_result4').text(input_text.length + '文字入力');
    });
}); $('.input_sample').change(function(){
    var html = '<span style="color:red">フォームが送信されました！</span>Thank you!';
    $('.change_result').html(html);
});

$(function(){
    //ウインドウのスクロールを検出
    $(window).scroll(function(){
        //現在のスクロール量を取得
        var sc = $(this).scrollTop();
        //画面が600pxスクロールされたら...
        if(sc >= 600){
            //ページの先頭に戻るボタンをフェードインする
            $("#p-top-btn").fadeIn("slow");
        //ページの先頭に戻ったら...
        } else if(sc <= 0){
            //ページの先頭に戻るボタンをフェードアウトする
            $("#p-top-btn").fadeOut("slow");
        }
    });
});

$(function(){
    $(window).scroll(function(e){
        $(".scroll_sample2").text('今んとここの辺:' + $(this).scrollTop());
    });
});