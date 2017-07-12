/**
 * Created by freyiz on 17-6-11.
 */
;$(function () {
    var accord = document.getElementById('search').getAttribute('arg');
    $.getJSON($SCRIPT_ROOT + '/accord', {accord:accord});
    var keywords = document.getElementById('search').getAttribute('arg2').split(' '), select = '.' + accord;
    var color = document.getElementById('search').getAttribute('arg3');
    for (var i=0; i<keywords.length; i++) {
        var keyword = keywords[i];
        if (keyword !== '') {
            var reg = new RegExp(keyword + "(?=[^<>]*<)" , "ig" );
            $(select).each(function () {
                $(this).html($(this).html().replace(reg,"<span style='color:" + color + "'>" + keyword + "</span>"));
            })
        }
    }
    $('.accord-tab a').click(function () {
        accord = $(this).attr('name');
        $('.accord-tab a').removeClass('active');
        $(this).addClass('active');
        $('.keywords').attr('placeholder', accord).val('');
        $.getJSON($SCRIPT_ROOT + '/accord', {accord:accord});
        $('.search').attr('disabled', 'disabled').css('color', 'gray').removeClass('active');
    });
    $('.keywords').bind('input propertychange', function() {
        var val = $(this).val();
        if (/^\s*$/.test(val)) {
            $('.search').attr('disabled', 'disabled').css('color', 'gray').removeClass('active');
        } else {
            $('.search').removeAttr('disabled').css('color', color).addClass('active');
        }
    }).focus(function () {
        $('.keywords').attr('placeholder', '');
    }).focusout(function () {
        $('.keywords').attr('placeholder', accord);
    });
    var faction = document.getElementById('search').getAttribute('arg4');
    var list = document.getElementById('search').getAttribute('arg5');
    if (list === '[]') {
        if (faction === 'alliance') {
            $('body').css({'background':'url("../../static/wow/race/human_HZJQRG4GRHFU1472070161324.jpg")', 'background-size':'cover'});
        } else if (faction === 'horde') {
            $('body').css({'background':'url("../../static/wow/race/orc_9C362D99J92X1472070208880.jpg")', 'background-size':'cover'});
        } else {
            $('body').css({'background':'url("../../static/wow/race/worgen_VR4N0BK6T5DR1472070304292.jpg")', 'background-size':'cover'});
            $('.no-content').css('right', '55%');
        }
    } else {
        if (faction === 'alliance') {
            $('body').css('background', 'url("../../static/wow/race/dwarf_EUKOPSH61IGO1472070118275.jpg")');
        } else if (faction === 'horde') {
            $('body').css('background', 'url("../../static/wow/race/troll_G65BU14819NX1472070245782.jpg")');
        } else {
            $('body').css('background', 'url("../../static/wow/race/pandaren_N7WMYKYS8IYY1472070228604.jpg")');
        }
    }
});
