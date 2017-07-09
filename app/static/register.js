/**
 * Created by Administrator on 2017/6/4.
 */
;$(function () {
    $('#carousel-example-generic').carousel({interval: false});
    $('.carousel-control').click(function () {
        $('.carousel-control').fadeOut();
    });
    $('#join-alliance').click(function () {
        $('.carousel-control').fadeOut();
        $('.carousel-control.left').fadeIn(1000);
        $('.register .wow_faction').val('联盟');
        $('.register').removeClass('neutral horde').addClass('alliance');
        $('.register .carousel-caption').removeClass('neutral horde').addClass('alliance');
    });
    $('#join-horde').click(function () {
        $('.carousel-control').fadeOut();
        $('.carousel-control.right').fadeIn(1000);
        $('.register .wow_faction').val('部落');
        $('.register').removeClass('neutral alliance').addClass('horde');
        $('.register .carousel-caption').removeClass('neutral alliance').addClass('horde');
    });
    $('.user-defined').click(function () {
        $('.to-class').hide();
        $('.carousel-caption-item h3').css('color', '#FFD700');
        $('.carousel-caption-item span').hide();
        $('.nav-pills li').removeClass('active');
        $('.tab-pane').removeClass('active');
        $('.tab-pane:first-child').addClass('active');
    });
    $('.fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-volume-up') {
            $('.fa-pause').attr('class', 'fa fa-volume-up');
            $(this).attr('class', 'fa fa-pause');
        } else {
            $(this).attr('class', 'fa fa-volume-up');
            $('.sound2').attr('src', '');
        }
    });
    $('.carousel-caption-item a').click(function () {
        $('.carousel-caption-item h3').css('color', '#FFD700');
        $('.carousel-caption-item span').fadeOut();
        $(this).next('div').children('h3').children('span').fadeIn();
        $(this).next('div').children('h3').css('color', '#008000');
        $('.to-class').fadeIn();
        $('.current-race span').text($(this).attr('name'));
        $('.register .wow_race').val($(this).attr('name'));
        $('.choose.zeroth').hide();
        $('.choose.first').show();
        $('.choose.second').hide();
        $('.fa-reply').hide();
    });
    $('.race-choose-horde .carousel-caption-item a').click(function () {
        $('.fa-reply.horde').show();
    });
    $('.race-choose-alliance .carousel-caption-item a').click(function () {
        $('.fa-reply.alliance').show();
    });
    var race, total, total2, sounds, sounds2, num;
    function sound_loop() {
        if (total2 === 0 ) {
            total2 = total;
            sounds2 = sounds.slice(0);
        }
        num = Math.floor(Math.random()*total2);
        $('.sound1').attr('src', sounds2[num]);
        total2 -= 1;
        sounds2.splice($.inArray(sounds2[num],sounds2),1);
    }
    $('.human a').click(function () {
        $('#shaman .choose.zeroth').show();
        $('#druid .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        total = 7;
        sounds = [
            '../../static/wow/sound/human/HumanMaleChicken01.ogg',
            '../../static/wow/sound/human/HumanMaleChooChoo01.ogg',
            '../../static/wow/sound/human/HumanMaleLaugh01.ogg',
            '../../static/wow/sound/human/HumanMaleOfficialNPCGreeting05.ogg',
            '../../static/wow/sound/human/HumanMaleStandardNPCGreetings02.ogg',
            '../../static/wow/sound/human/HumanMaleWarriorNPCFarewell01.ogg',
            '../../static/wow/sound/human/HumanMaleWarriorNPCFarewell05.ogg'
        ];
    });
    $('.human .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/HumanNarration.mp3');
        }
    });
    $('.dwarf a').click(function () {
        $('#druid .choose.zeroth').show();
        $('#monk .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        total = 9;
        sounds = [
            '../../static/wow/sound/dwarf/DwarfMaleChicken01.ogg',
            '../../static/wow/sound/dwarf/DwarfMaleChooChoo01.ogg',
            '../../static/wow/sound/dwarf/DwarfMaleGrimNPCFarewell02.ogg',
            '../../static/wow/sound/dwarf/DwarfMaleGrimNPCGreeting01.ogg',
            '../../static/wow/sound/dwarf/DwarfMaleGrimNPCGreeting02.ogg',
            '../../static/wow/sound/dwarf/DwarfMaleGrimNPCGreeting06.ogg',
            '../../static/wow/sound/dwarf/DwarfMaleGuardNPCFarewell02.ogg',
            '../../static/wow/sound/dwarf/DwarfMaleGuardNPCGreeting02.ogg',
            '../../static/wow/sound/dwarf/DwarfMaleLaugh01.ogg'
        ];
    });
    $('.dwarf .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/DwarfNarration.mp3');
        }
    });
    $('.night-elf a').click(function () {
        $('#paladin .choose.zeroth').show();
        $('#shaman .choose.zeroth').show();
        $('#warlock .choose.zeroth').show();
        total = 6;
        sounds = [
            '../../static/wow/sound/night-elf/NightElfMaleChicken01.ogg',
            '../../static/wow/sound/night-elf/NightElfMaleChooChoo01.ogg',
            '../../static/wow/sound/night-elf/NightElfMaleLaugh01.ogg',
            '../../static/wow/sound/night-elf/NightElfMaleOfficialNPCFarewell05.ogg',
            '../../static/wow/sound/night-elf/NightElfMaleStandardNPCFarewell06.ogg',
            '../../static/wow/sound/night-elf/NightElfMaleWarriorNPCGreeting03.ogg'
        ];
    });
    $('.night-elf .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/NightElfNarration.mp3');
        }
    });
    $('.gnome a').click(function () {
        $('#paladin .choose.zeroth').show();
        $('#shaman .choose.zeroth').show();
        $('#druid .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        total = 8;
        sounds = [
            '../../static/wow/sound/gnome/GnomeFemaleChicken01.ogg',
            '../../static/wow/sound/gnome/GnomeFemaleChooChoo01.ogg',
            '../../static/wow/sound/gnome/GnomeFemaleHappyNPCFarewell04.ogg',
            '../../static/wow/sound/gnome/GnomeFemaleHappyNPCGreeting02.ogg',
            '../../static/wow/sound/gnome/GnomeFemaleHappyNPCGreeting06.ogg',
            '../../static/wow/sound/gnome/GnomeFemaleLaugh01.ogg',
            '../../static/wow/sound/gnome/GnomeFemaleNerdyNPCGreeting01.ogg',
            '../../static/wow/sound/gnome/GnomeFemaleNerdyNPCGreeting04.ogg'
        ];
    });
    $('.gnome .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/GnomeNarration.mp3');
        }
    });
    $('.draenei a').click(function () {
        $('#rogue .choose.zeroth').show();
        $('#druid .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        $('#warlock .choose.zeroth').show();
        total = 9;
        sounds = [
            '../../static/wow/sound/draenei/DraeneiFemaleChicken01.ogg',
            '../../static/wow/sound/draenei/DraeneiFemaleLaugh01.ogg',
            '../../static/wow/sound/draenei/DraeneiFemaleTrain01.ogg',
            '../../static/wow/sound/draenei/NPCDraeneiFemaleMilitaryFarewell03.ogg',
            '../../static/wow/sound/draenei/NPCDraeneiFemaleMilitaryGreeting05.ogg',
            '../../static/wow/sound/draenei/NPCDraeneiFemaleMilitaryGreeting06.ogg',
            '../../static/wow/sound/draenei/NPCDraeneiFemaleNobleFarewell06.ogg',
            '../../static/wow/sound/draenei/NPCDraeneiFemaleNobleGreeting03.ogg',
            '../../static/wow/sound/draenei/NPCDraeneiFemaleNobleGreeting08.ogg'
        ];
    });
    $('.draenei .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/DraeneiNarration.mp3');
        }
    });
    $('.pandaren-female a').click(function () {
        $('#paladin .choose.zeroth').show();
        $('#death-knight .choose.zeroth').show();
        $('#druid .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        $('#warlock .choose.zeroth').show();
        total = 7;
        sounds = [
            '../../static/wow/sound/pandaren-female/VO_Pandaren_Female_Gruff_Greeting_01.ogg',
            '../../static/wow/sound/pandaren-female/VO_Pandaren_Female_Gruff_Greeting_02.ogg',
            '../../static/wow/sound/pandaren-female/VO_Pandaren_Female_Gruff_Greeting_03.ogg',
            '../../static/wow/sound/pandaren-female/VO_Pandaren_Female_Old_Farewell_02.ogg',
            '../../static/wow/sound/pandaren-female/VO_PCPandarenFemale_Chicken01.ogg',
            '../../static/wow/sound/pandaren-female/VO_PCPandarenFemale_Laugh01.ogg',
            '../../static/wow/sound/pandaren-female/VO_PCPandarenFemale_Train01.ogg'
        ];
    });
    $('.pandaren-female .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/PandarenNarration.mp3');
        }
    });
    $('.worgen a').click(function () {
        $('#paladin .choose.zeroth').show();
        $('#shaman .choose.zeroth').show();
        $('#monk .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        total = 6;
        sounds = [
            '../../static/wow/sound/worgen/VO_PCWorgenMale_Chicken01.ogg',
            '../../static/wow/sound/worgen/VO_PCWorgenMale_Laugh01.ogg',
            '../../static/wow/sound/worgen/VO_PCWorgenMale_Train01.ogg',
            '../../static/wow/sound/worgen/VO_WorgenGuardM_Farewell08.ogg',
            '../../static/wow/sound/worgen/VO_WorgenGuardM_FarewellAggro02.ogg',
            '../../static/wow/sound/worgen/VO_WorgenGuardM_GreetingAggro03.ogg'
        ];
    });
    $('.worgen .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/WorgenNarration.mp3');
        }
    });
    $('.orc a').click(function () {
        $('#paladin .choose.zeroth').show();
        $('#druid .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        $('#priest .choose.zeroth').show();
        total = 7;
        sounds = [
            '../../static/wow/sound/orc/OrcMaleChicken01.ogg',
            '../../static/wow/sound/orc/OrcMaleChooChoo01.ogg',
            '../../static/wow/sound/orc/OrcMaleGuardNPCGreeting01.ogg',
            '../../static/wow/sound/orc/OrcMaleLaugh01.ogg',
            '../../static/wow/sound/orc/OrcMaleStandardNPCFarewell02.ogg',
            '../../static/wow/sound/orc/OrcMaleStandardNPCFarewell04.ogg',
            '../../static/wow/sound/orc/OrcMaleStandardNPCFarewell05.ogg'
        ];
    });
    $('.orc .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/OrcNarration.mp3');
        }
    });
    $('.undead a').click(function () {
        $('#paladin .choose.zeroth').show();
        $('#shaman .choose.zeroth').show();
        $('#druid .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        total = 7;
        sounds = [
            '../../static/wow/sound/undead/UndeadFemaleChicken01.ogg',
            '../../static/wow/sound/undead/UndeadFemaleChooChoo01.ogg',
            '../../static/wow/sound/undead/UndeadFemaleLaugh01.ogg',
            '../../static/wow/sound/undead/UndeadFemaleMagicNPCGreeting01.ogg',
            '../../static/wow/sound/undead/UndeadFemaleWarriorNPCFarewell04.ogg',
            '../../static/wow/sound/undead/UndeadFemaleWarriorNPCFarewell06.ogg',
            '../../static/wow/sound/undead/UndeadFemaleWarriorNPCFarewell07.ogg'
        ];
    });
    $('.undead .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/UndeadNarration.mp3');
        }
    });
    $('.tauren a').click(function () {
        $('#rogue .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        $('#mage .choose.zeroth').show();
        $('#warlock .choose.zeroth').show();
        total = 7;
        sounds = [
            '../../static/wow/sound/tauren/TaurenMaleChicken01.ogg',
            '../../static/wow/sound/tauren/TaurenMaleChooChoo01.ogg',
            '../../static/wow/sound/tauren/TaurenMaleElderNPCFarewell02.ogg',
            '../../static/wow/sound/tauren/TaurenMaleElderNPCFarewell04.ogg',
            '../../static/wow/sound/tauren/TaurenMaleElderNPCGreeting05.ogg',
            '../../static/wow/sound/tauren/TaurenMaleLaugh01.ogg',
            '../../static/wow/sound/tauren/TaurenMaleWarriorNPCFarewell02.ogg'
        ];
    });
    $('.tauren .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/TaurenNarration.mp3');
        }
    });
    $('.troll a').click(function () {
        $('#paladin .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        total = 6;
        sounds = [
            '../../static/wow/sound/troll/TrollMaleChicken01.ogg',
            '../../static/wow/sound/troll/TrollMaleChooChoo01.ogg',
            '../../static/wow/sound/troll/TrollMaleDarkNPCGreeting01.ogg',
            '../../static/wow/sound/troll/TrollMaleDarkNPCGreeting02.ogg',
            '../../static/wow/sound/troll/TrollMaleDarkNPCGreeting05.ogg',
            '../../static/wow/sound/troll/TrollMaleLaugh01.ogg'
        ];
    });
    $('.troll .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/TrollNarration.mp3');
        }
    });
    $('.blood-elf a').click(function () {
        $('#shaman .choose.zeroth').show();
        $('#druid .choose.zeroth').show();
        total = 10;
        sounds = [
            '../../static/wow/sound/blood-elf/BloodElfFemaleChicken01.ogg',
            '../../static/wow/sound/blood-elf/BloodElfFemaleLaugh01.ogg',
            '../../static/wow/sound/blood-elf/BloodElfFemaleTrain01.ogg',
            '../../static/wow/sound/blood-elf/NPCBloodElfFemaleMilitaryFarewell05.ogg',
            '../../static/wow/sound/blood-elf/NPCBloodElfFemaleMilitaryFarewell06.ogg',
            '../../static/wow/sound/blood-elf/NPCBloodElfFemaleMilitaryGreeting02.ogg',
            '../../static/wow/sound/blood-elf/NPCBloodElfFemaleNobleFarewell09.ogg',
            '../../static/wow/sound/blood-elf/NPCBloodElfFemaleNobleGreeting05.ogg',
            '../../static/wow/sound/blood-elf/NPCBloodElfFemaleNobleGreeting07.ogg',
            '../../static/wow/sound/blood-elf/NPCBloodElfFemaleNobleGreeting08.ogg'
        ];
    });
    $('.blood-elf .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/BloodElfNarration.mp3');
        }
    });
    $('.pandaren-male a').click(function () {
        $('#paladin .choose.zeroth').show();
        $('#death-knight .choose.zeroth').show();
        $('#druid .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        $('#warlock .choose.zeroth').show();
        total = 8;
        sounds = [
            '../../static/wow/sound/pandaren-male/VO_Pandaren_Male_Old_Greeting_01.ogg',
            '../../static/wow/sound/pandaren-male/VO_Pandaren_Male_Old_Greeting_02.ogg',
            '../../static/wow/sound/pandaren-male/VO_Pandaren_Male_Standard_Farewell_01.ogg',
            '../../static/wow/sound/pandaren-male/VO_Pandaren_Male_Standard_Farewell_03.ogg',
            '../../static/wow/sound/pandaren-male/VO_Pandaren_Male_Standard_Farewell_04.ogg',
            '../../static/wow/sound/pandaren-male/VO_PCPandarenMale_Chicken01.ogg',
            '../../static/wow/sound/pandaren-male/VO_PCPandarenMale_Laugh01.ogg',
            '../../static/wow/sound/pandaren-male/VO_PCPandarenMale_Train01.ogg'
        ];
    });
    $('.pandaren-male .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/PandarenNarration.mp3');
        }
    });
    $('.goblin a').click(function () {
        $('#paladin .choose.zeroth').show();
        $('#druid .choose.zeroth').show();
        $('#demon-hunter .choose.zeroth').show();
        total = 10;
        sounds = [
            '../../static/wow/sound/goblin/GoblinMaleZanyNPCFarewell03.ogg',
            '../../static/wow/sound/goblin/GoblinMaleZanyNPCFarewell04.ogg',
            '../../static/wow/sound/goblin/GoblinMaleZanyNPCGreeting01.ogg',
            '../../static/wow/sound/goblin/GoblinMaleZanyNPCGreeting02.ogg',
            '../../static/wow/sound/goblin/GoblinMaleZanyNPCGreeting03.ogg',
            '../../static/wow/sound/goblin/GoblinMaleZanyNPCGreeting05.ogg',
            '../../static/wow/sound/goblin/GoblinMaleZanyNPCGreeting06.ogg',
            '../../static/wow/sound/goblin/VO_PCGoblinMale_Chicken01.ogg',
            '../../static/wow/sound/goblin/VO_PCGoblinMale_Laugh01.ogg',
            '../../static/wow/sound/goblin/VO_PCGoblinMale_Train01.ogg'
        ];
    });
    $('.goblin .fa-volume-up').click(function () {
        if ($(this).attr('class') === 'fa fa-pause') {
            $('.sound2').attr('src', '../../static/wow/sound/narration/GoblinNarration.mp3');
        }
    });
    $('.carousel-caption-item a').click(function () {
        if (race !== $(this).attr('name')) {
            total2 = total;
            sounds2 = sounds.slice(0);
        }
        race = $(this).attr('name');
        sound_loop();
    });
    $('.choose.first').click(function () {
        $(this).fadeOut();
        $('.choose.second').fadeIn(1000);
        $('.register .wow_class').val($(this).attr('name'));
    });
    $('.nav-pills li a').click(function () {
        $('.choose.first').fadeIn();
        $('.choose.second').hide();
        $('.sound1').attr('src', '../../static/wow/sound/iAbilitiesTurnPageB.ogg');
    });
    $('.random-player').click(function () {
        $.getJSON($SCRIPT_ROOT + '/auth/player', {}, function (data) {
            $('.register .wow_faction').val(data.wow_faction);
            $('.register .wow_race').val(data.wow_race);
            $('.register .wow_class').val(data.wow_class);
        });
    });
    $('.clause').click(function () {
        if ($(this).is(':checked')) {
            $('.form-control.btn').removeAttr('disabled');
        } else {
            $('.form-control.btn').attr('disabled', 'disabled');
        }
    });
});
