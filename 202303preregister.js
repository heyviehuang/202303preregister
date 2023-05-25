$(".eventBtn01").click(function() {
    $('.eventDetailsArea01').removeClass('eventOff');
    $('body').addClass('bodyScrollOff');
    $('.eventDetailsArea01').removeClass('formAnimation2');
})

$(".eventBtn02").click(function() {
    $('.eventDetailsArea02').removeClass('eventOff');
    $('body').addClass('bodyScrollOff');
    $('.eventDetailsArea02').removeClass('formAnimation2');
})
$(".eventBtn03").click(function() {
    $('.eventDetailsArea03').removeClass('eventOff');
    $('body').addClass('bodyScrollOff');
    $('.eventDetailsArea03').removeClass('formAnimation2');
})
$(".eventBtn04").click(function() {
    $('.eventDetailsArea04').removeClass('eventOff');
    $('body').addClass('bodyScrollOff');
    $('.eventDetailsArea04').removeClass('formAnimation2');
})

$(".contentClose,.eventDetailsArea01,.eventDetailsArea02,.eventDetailsArea03,.eventDetailsArea04").click(function() {
    $('.eventDetailsArea01,.eventDetailsArea02,.eventDetailsArea03,.eventDetailsArea04').addClass('eventOff');
    $('body').removeClass('bodyScrollOff');
    $('.eventDetailsArea01,.eventDetailsArea02,.eventDetailsArea03,.eventDetailsArea04').removeClass('formAnimation2');
})


$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        $('.sectionFG').css('transform', 'translate( -50%,' + scrollPos * 0.04 + 'px)');
        // $('.planet02').css('transform', 'translateY(' + scrollPos + 'px)');
    });
});