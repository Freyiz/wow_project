/**
 * Created by freyiz on 2017/7/11.
 */
;$(function () {
    var faction = document.getElementById('bg').getAttribute('arg');
    if (faction === 'alliance') {
        $('body').css('background', 'url("../../static/wow/race/night-elf_0ZE52L9O2EVE1472070193474.jpg")');
    } else if (faction === 'horde') {
        $('body').css('background', 'url("../../static/wow/race/orc_F6NZ76C2G2RD1472070211038.jpg")');
    } else {
        $('body').css('background', 'url("../../static/wow/race/pandaren_N7WMYKYS8IYY1472070228604.jpg")');
    }
});