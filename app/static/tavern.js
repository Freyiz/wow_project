/**
 * Created by freyiz on 17-7-3.
 */
;var t=0,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17;
function fadeout_in(x) {
    $('#tavern-img img').fadeOut(2000);
    $(x).fadeIn(4000);
}
function sound_loop(total, sounds) {
    var num = Math.floor(Math.random()*total);
    var total2 = total, sounds2 = sounds.slice(0);
    $('.sound').attr('src', sounds[num]).bind('ended', function () {
        total2 -= 1;
        sounds2.splice($.inArray(sounds2[num],sounds2),1);
        if (total2 === 0 ) {
            total2 = total;
            sounds2 = sounds.slice(0);
        }
        num = Math.floor(Math.random()*total2);
        $('.sound').attr('src', sounds2[num]);
    });
}
function img_loop() {
    t1 = setTimeout("fadeout_in('.img2')", 5000);
    t2 = setTimeout("fadeout_in('.img3')", 10000);
    t3 = setTimeout("fadeout_in('.img4')", 15000);
    t4 = setTimeout("fadeout_in('.img5')", 20000);
    t5 = setTimeout("fadeout_in('.img6')", 25000);
    t6 = setTimeout("fadeout_in('.img7')", 30000);
    t7 = setTimeout("fadeout_in('.img8')", 35000);
    t8 = setTimeout("fadeout_in('.img9')", 40000);
    t9 = setTimeout("fadeout_in('.img10')", 45000);
    t10 = setTimeout("fadeout_in('.img11')", 50000);
    t11 = setTimeout("fadeout_in('.img12')", 55000);
    t12 = setTimeout("fadeout_in('.img13')", 60000);
    t13 = setTimeout("fadeout_in('.img14')", 65000);
    t14 = setTimeout("fadeout_in('.img15')", 70000);
    t15 = setTimeout("fadeout_in('.img16')", 75000);
    t16 = setTimeout("fadeout_in('.img1')", 80000);
    t17 = setTimeout("img_loop()", 80000);
}
$(function () {
    $('body').css({'background':'url("../static/wow/bg/night_repeat.png")', 'background-size':'cover'});
    $('h1 a').click(function () {
        t = 0;
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
        clearTimeout(t6);
        clearTimeout(t7);
        clearTimeout(t8);
        clearTimeout(t9);
        clearTimeout(t10);
        clearTimeout(t11);
        clearTimeout(t12);
        clearTimeout(t13);
        clearTimeout(t14);
        clearTimeout(t15);
        clearTimeout(t16);
        clearTimeout(t17);
        $('h1 span').fadeOut();
        $('.sound').attr('src', '');
        $('#tavern-img img').stop().fadeOut();
        $('.tavern div').fadeIn();
    });
    $('div.alliance').click(function () {
        $('h1 a').attr('class', 'alliance');
        $('#tavern-img').attr('class', 'alliance');
    });
    $('div.horde').click(function () {
        $('h1 a').attr('class', 'horde');
        $('#tavern-img').attr('class', 'horde');
    });
    $('div.neutral').click(function () {
        $('h1 a').attr('class', 'neutral');
        $('#tavern-img').attr('class', 'neutral');
    });
    $('.alliance.human a').click(function () {
        $('.tavern-title').text('： 人类');
        sound_loop(6, [
            '../static/wow/sound/tavern/TavernHuman/RA_HumanTavern1A.mp3',
            '../static/wow/sound/tavern/TavernHuman/RA_HumanTavern2A.mp3',
            '../static/wow/sound/tavern/TavernHuman/RA_HumanTavern2B.mp3',
            '../static/wow/sound/tavern/TavernHuman/RA_Tavern1_RevisitedA.mp3',
            '../static/wow/sound/tavern/TavernHuman/RA_Tavern1_RevisitedB.mp3',
            '../static/wow/sound/tavern/TavernHuman/RA_HumanTavern1B.mp3'
        ]);
        $('.img1').attr('src', '../static/wow/tavern/tavern_human/human1.jpg');
        $('.img2').attr('src', '../static/wow/tavern/tavern_human/human2.jpg');
        $('.img3').attr('src', '../static/wow/tavern/tavern_human/human3.jpg');
        $('.img4').attr('src', '../static/wow/tavern/tavern_human/human4.jpg');
        $('.img5').attr('src', '../static/wow/tavern/tavern_human/human5.jpg');
        $('.img6').attr('src', '../static/wow/tavern/tavern_human/human6.jpg');
        $('.img7').attr('src', '../static/wow/tavern/tavern_human/human7.jpg');
        $('.img8').attr('src', '../static/wow/tavern/tavern_human/human8.jpg');
        $('.img9').attr('src', '../static/wow/tavern/tavern_human/human9.jpg');
        $('.img10').attr('src', '../static/wow/tavern/tavern_human/human10.jpg');
        $('.img11').attr('src', '../static/wow/tavern/tavern_human/human11.jpg');
        $('.img12').attr('src', '../static/wow/tavern/tavern_human/human12.jpg');
        $('.img13').attr('src', '../static/wow/tavern/tavern_human/human13.jpg');
        $('.img14').attr('src', '../static/wow/tavern/tavern_human/human14.jpg');
        $('.img15').attr('src', '../static/wow/tavern/tavern_human/human15.jpg');
        $('.img16').attr('src', '../static/wow/tavern/tavern_human/human16.jpg');
    });
    $('.alliance.dwarf a').click(function () {
        $('.tavern-title').text('： 矮人');
        sound_loop(5, [
            '../static/wow/sound/tavern/TavernDwarf/RA_DwarfTavern1A.mp3',
            '../static/wow/sound/tavern/TavernDwarf/RA_DwarfTavern1B.mp3',
            '../static/wow/sound/tavern/TavernDwarf/RA_DwarfTavern2A.mp3',
            '../static/wow/sound/tavern/TavernDwarf/RA_DwarfTavern2B.mp3',
            '../static/wow/sound/tavern/TavernDwarf/RA_DwarfTavern3.mp3'
        ]);
        $('.img1').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf1.jpg');
        $('.img2').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf2.jpg');
        $('.img3').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf3.jpg');
        $('.img4').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf4.jpg');
        $('.img5').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf5.jpg');
        $('.img6').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf6.jpg');
        $('.img7').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf7.jpg');
        $('.img8').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf8.jpg');
        $('.img9').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf9.jpg');
        $('.img10').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf10.jpg');
        $('.img11').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf11.jpg');
        $('.img12').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf12.jpg');
        $('.img13').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf13.jpg');
        $('.img14').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf14.jpg');
        $('.img15').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf15.jpg');
        $('.img16').attr('src', '../static/wow/tavern/tavern_dwarf/dwarf16.jpg');
    });
    $('.alliance.night-elf a').click(function () {
        $('.tavern-title').text('： 暗夜精灵');
        sound_loop(2, [
            '../static/wow/sound/tavern/TavernNightElf/RA_TempleOfTheMoonA.mp3',
            '../static/wow/sound/tavern/TavernNightElf/RA_TempleOfTheMoonB.mp3'
        ]);
        $('.img1').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf1.jpg');
        $('.img2').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf2.jpg');
        $('.img3').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf3.jpg');
        $('.img4').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf4.jpg');
        $('.img5').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf5.jpg');
        $('.img6').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf6.jpg');
        $('.img7').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf7.jpg');
        $('.img8').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf8.jpg');
        $('.img9').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf9.jpg');
        $('.img10').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf10.jpg');
        $('.img11').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf11.jpg');
        $('.img12').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf12.jpg');
        $('.img13').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf13.jpg');
        $('.img14').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf14.jpg');
        $('.img15').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf15.jpg');
        $('.img16').attr('src', '../static/wow/tavern/tavern_night-elf/night-elf16.jpg');
    });
    $('.alliance.origin a').click(function () {
        $('.tavern-title').text('： 联盟');
        sound_loop(2, [
            '../static/wow/sound/tavern/TavernAlliance/TavernAlliance01.mp3',
            '../static/wow/sound/tavern/TavernAlliance/TavernAlliance02.mp3'
        ]);
        $('.img1').attr('src', '../static/wow/tavern/tavern_alliance/alliance1.jpg');
        $('.img2').attr('src', '../static/wow/tavern/tavern_alliance/alliance2.jpg');
        $('.img3').attr('src', '../static/wow/tavern/tavern_alliance/alliance3.jpg');
        $('.img4').attr('src', '../static/wow/tavern/tavern_alliance/alliance4.jpg');
        $('.img5').attr('src', '../static/wow/tavern/tavern_alliance/alliance5.jpg');
        $('.img6').attr('src', '../static/wow/tavern/tavern_alliance/alliance6.jpg');
        $('.img7').attr('src', '../static/wow/tavern/tavern_alliance/alliance7.jpg');
        $('.img8').attr('src', '../static/wow/tavern/tavern_alliance/alliance8.jpg');
        $('.img9').attr('src', '../static/wow/tavern/tavern_alliance/alliance9.jpg');
        $('.img10').attr('src', '../static/wow/tavern/tavern_alliance/alliance10.jpg');
        $('.img11').attr('src', '../static/wow/tavern/tavern_alliance/alliance11.jpg');
        $('.img12').attr('src', '../static/wow/tavern/tavern_alliance/alliance12.jpg');
        $('.img13').attr('src', '../static/wow/tavern/tavern_alliance/alliance13.jpg');
        $('.img14').attr('src', '../static/wow/tavern/tavern_alliance/alliance14.jpg');
        $('.img15').attr('src', '../static/wow/tavern/tavern_alliance/alliance15.jpg');
        $('.img16').attr('src', '../static/wow/tavern/tavern_alliance/alliance16.jpg');
    });
    $('.pirate a').click(function () {
        $('.tavern-title').text('： 海盗');
        sound_loop(6, [
            '../static/wow/sound/tavern/TavernPirate/RA_PirateTavern1A.mp3',
            '../static/wow/sound/tavern/TavernPirate/RA_PirateTavern1B.mp3',
            '../static/wow/sound/tavern/TavernPirate/RA_PirateTavern2A.mp3',
            '../static/wow/sound/tavern/TavernPirate/RA_PirateTavern2B.mp3',
            '../static/wow/sound/tavern/TavernPirate/RA_PirateTavern3A.mp3',
            '../static/wow/sound/tavern/TavernPirate/RA_PirateTavern3B.mp3'
        ]);
        $('.img1').attr('src', '../static/wow/tavern/tavern_pirate/pirate1.jpg');
        $('.img2').attr('src', '../static/wow/tavern/tavern_pirate/pirate2.jpg');
        $('.img3').attr('src', '../static/wow/tavern/tavern_pirate/pirate3.jpg');
        $('.img4').attr('src', '../static/wow/tavern/tavern_pirate/pirate4.jpg');
        $('.img5').attr('src', '../static/wow/tavern/tavern_pirate/pirate5.jpg');
        $('.img6').attr('src', '../static/wow/tavern/tavern_pirate/pirate6.jpg');
        $('.img7').attr('src', '../static/wow/tavern/tavern_pirate/pirate7.jpg');
        $('.img8').attr('src', '../static/wow/tavern/tavern_pirate/pirate8.jpg');
        $('.img9').attr('src', '../static/wow/tavern/tavern_pirate/pirate9.jpg');
        $('.img10').attr('src', '../static/wow/tavern/tavern_pirate/pirate10.jpg');
        $('.img11').attr('src', '../static/wow/tavern/tavern_pirate/pirate11.jpg');
        $('.img12').attr('src', '../static/wow/tavern/tavern_pirate/pirate12.jpg');
        $('.img13').attr('src', '../static/wow/tavern/tavern_pirate/pirate13.jpg');
        $('.img14').attr('src', '../static/wow/tavern/tavern_pirate/pirate14.jpg');
        $('.img15').attr('src', '../static/wow/tavern/tavern_pirate/pirate15.jpg');
        $('.img16').attr('src', '../static/wow/tavern/tavern_pirate/pirate16.jpg');
    });
    $('.horde.origin a').click(function () {
        $('.tavern-title').text('： 部落');
        sound_loop(4, [
            '../static/wow/sound/tavern/TavernHorde/TavernHorde01.mp3',
            '../static/wow/sound/tavern/TavernHorde/TavernHorde02.mp3',
            '../static/wow/sound/tavern/TavernHorde/TavernHorde03.mp3',
            '../static/wow/sound/tavern/TavernHorde/undead_dance.mp3'
        ]);
        $('.img1').attr('src', '../static/wow/tavern/tavern_horde/horde1.jpg');
        $('.img2').attr('src', '../static/wow/tavern/tavern_horde/horde2.jpg');
        $('.img3').attr('src', '../static/wow/tavern/tavern_horde/horde3.jpg');
        $('.img4').attr('src', '../static/wow/tavern/tavern_horde/horde4.jpg');
        $('.img5').attr('src', '../static/wow/tavern/tavern_horde/horde5.jpg');
        $('.img6').attr('src', '../static/wow/tavern/tavern_horde/horde6.jpg');
        $('.img7').attr('src', '../static/wow/tavern/tavern_horde/horde7.jpg');
        $('.img8').attr('src', '../static/wow/tavern/tavern_horde/horde8.jpg');
        $('.img9').attr('src', '../static/wow/tavern/tavern_horde/horde9.jpg');
        $('.img10').attr('src', '../static/wow/tavern/tavern_horde/horde10.jpg');
        $('.img11').attr('src', '../static/wow/tavern/tavern_horde/horde11.jpg');
        $('.img12').attr('src', '../static/wow/tavern/tavern_horde/horde12.jpg');
        $('.img13').attr('src', '../static/wow/tavern/tavern_horde/horde13.jpg');
        $('.img14').attr('src', '../static/wow/tavern/tavern_horde/horde14.jpg');
        $('.img15').attr('src', '../static/wow/tavern/tavern_horde/horde15.jpg');
        $('.img16').attr('src', '../static/wow/tavern/tavern_horde/horde16.jpg');
    });
    $('.horde.orc a').click(function () {
        $('.tavern-title').text('： 兽人');
        sound_loop(6, [
            '../static/wow/sound/tavern/TavernOrc/RA_OrcRestArea1A.mp3',
            '../static/wow/sound/tavern/TavernOrc/RA_OrcRestArea1B.mp3',
            '../static/wow/sound/tavern/TavernOrc/RA_OrcRestArea2A.mp3',
            '../static/wow/sound/tavern/TavernOrc/RA_OrcRestArea2B.mp3',
            '../static/wow/sound/tavern/TavernOrc/RA_OrcRestArea3A.mp3',
            '../static/wow/sound/tavern/TavernOrc/RA_OrcRestArea3B.mp3'
        ]);
        $('.img1').attr('src', '../static/wow/tavern/tavern_orc/orc1.jpg');
        $('.img2').attr('src', '../static/wow/tavern/tavern_orc/orc2.jpg');
        $('.img3').attr('src', '../static/wow/tavern/tavern_orc/orc3.jpg');
        $('.img4').attr('src', '../static/wow/tavern/tavern_orc/orc4.jpg');
        $('.img5').attr('src', '../static/wow/tavern/tavern_orc/orc5.jpg');
        $('.img6').attr('src', '../static/wow/tavern/tavern_orc/orc6.jpg');
        $('.img7').attr('src', '../static/wow/tavern/tavern_orc/orc7.jpg');
        $('.img8').attr('src', '../static/wow/tavern/tavern_orc/orc8.jpg');
        $('.img9').attr('src', '../static/wow/tavern/tavern_orc/orc9.jpg');
        $('.img10').attr('src', '../static/wow/tavern/tavern_orc/orc10.jpg');
        $('.img11').attr('src', '../static/wow/tavern/tavern_orc/orc11.jpg');
        $('.img12').attr('src', '../static/wow/tavern/tavern_orc/orc12.jpg');
        $('.img13').attr('src', '../static/wow/tavern/tavern_orc/orc13.jpg');
        $('.img14').attr('src', '../static/wow/tavern/tavern_orc/orc14.jpg');
        $('.img15').attr('src', '../static/wow/tavern/tavern_orc/orc15.jpg');
        $('.img16').attr('src', '../static/wow/tavern/tavern_orc/orc16.jpg');
    });
    $('.horde.undead a').click(function () {
        $('.tavern-title').text('： 亡灵');
        sound_loop(5, [
            '../static/wow/sound/tavern/TavernUndead/RA_UndeadTavern1A.mp3',
            '../static/wow/sound/tavern/TavernUndead/RA_UndeadTavern1B.mp3',
            '../static/wow/sound/tavern/TavernUndead/RA_UndeadTavern2.mp3',
            '../static/wow/sound/tavern/TavernUndead/RA_UndeadTavern3A.mp3',
            '../static/wow/sound/tavern/TavernUndead/RA_UndeadTavern3B.mp3'
        ]);
        $('.img1').attr('src', '../static/wow/tavern/tavern_undead/undead1.jpg');
        $('.img2').attr('src', '../static/wow/tavern/tavern_undead/undead2.jpg');
        $('.img3').attr('src', '../static/wow/tavern/tavern_undead/undead3.jpg');
        $('.img4').attr('src', '../static/wow/tavern/tavern_undead/undead4.jpg');
        $('.img5').attr('src', '../static/wow/tavern/tavern_undead/undead5.jpg');
        $('.img6').attr('src', '../static/wow/tavern/tavern_undead/undead6.jpg');
        $('.img7').attr('src', '../static/wow/tavern/tavern_undead/undead7.jpg');
        $('.img8').attr('src', '../static/wow/tavern/tavern_undead/undead8.jpg');
        $('.img9').attr('src', '../static/wow/tavern/tavern_undead/undead9.jpg');
        $('.img10').attr('src', '../static/wow/tavern/tavern_undead/undead10.jpg');
        $('.img11').attr('src', '../static/wow/tavern/tavern_undead/undead11.jpg');
        $('.img12').attr('src', '../static/wow/tavern/tavern_undead/undead12.jpg');
        $('.img13').attr('src', '../static/wow/tavern/tavern_undead/undead13.jpg');
        $('.img14').attr('src', '../static/wow/tavern/tavern_undead/undead14.jpg');
        $('.img15').attr('src', '../static/wow/tavern/tavern_undead/undead15.jpg');
        $('.img16').attr('src', '../static/wow/tavern/tavern_undead/undead16.jpg');
    });
    $('.horde.tauren a').click(function () {
        $('.tavern-title').text('： 牛头人');
        sound_loop(6, [
            '../static/wow/sound/tavern/TavernTauren/RA_TaurenRestArea1A.mp3',
            '../static/wow/sound/tavern/TavernTauren/RA_TaurenRestArea1B.mp3',
            '../static/wow/sound/tavern/TavernTauren/RA_TaurenRestArea2A.mp3',
            '../static/wow/sound/tavern/TavernTauren/RA_TaurenRestArea2B.mp3',
            '../static/wow/sound/tavern/TavernTauren/RA_TaurenRestArea3A.mp3',
            '../static/wow/sound/tavern/TavernTauren/RA_TaurenRestArea3B.mp3'
        ]);
        $('.img1').attr('src', '../static/wow/tavern/tavern_tauren/tauren1.jpg');
        $('.img2').attr('src', '../static/wow/tavern/tavern_tauren/tauren2.jpg');
        $('.img3').attr('src', '../static/wow/tavern/tavern_tauren/tauren3.jpg');
        $('.img4').attr('src', '../static/wow/tavern/tavern_tauren/tauren4.jpg');
        $('.img5').attr('src', '../static/wow/tavern/tavern_tauren/tauren5.jpg');
        $('.img6').attr('src', '../static/wow/tavern/tavern_tauren/tauren6.jpg');
        $('.img7').attr('src', '../static/wow/tavern/tavern_tauren/tauren7.jpg');
        $('.img8').attr('src', '../static/wow/tavern/tavern_tauren/tauren8.jpg');
        $('.img9').attr('src', '../static/wow/tavern/tavern_tauren/tauren9.jpg');
        $('.img10').attr('src', '../static/wow/tavern/tavern_tauren/tauren10.jpg');
        $('.img11').attr('src', '../static/wow/tavern/tavern_tauren/tauren11.jpg');
        $('.img12').attr('src', '../static/wow/tavern/tavern_tauren/tauren12.jpg');
        $('.img13').attr('src', '../static/wow/tavern/tavern_tauren/tauren13.jpg');
        $('.img14').attr('src', '../static/wow/tavern/tavern_tauren/tauren14.jpg');
        $('.img15').attr('src', '../static/wow/tavern/tavern_tauren/tauren15.jpg');
        $('.img16').attr('src', '../static/wow/tavern/tavern_tauren/tauren16.jpg');
    });
    $('.tavern div a').click(function () {
        if (t === 1) { return false; } else { t = 1 }
        img_loop();
        $('.tavern div').fadeOut();
        $('h1 span').fadeIn(1000);
        setTimeout("fadeout_in('.img1')", 500);
    });
});

