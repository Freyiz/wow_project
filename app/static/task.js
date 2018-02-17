;var app = angular.module("myApp", []);
app.controller("task", function ($scope, $http) {
    // 当前用户ID
    var user_id = parseInt(document.getElementById('task').getAttribute('user_id'));
    // 当前用户名
    var username = document.getElementById('task').getAttribute('username');
    // 当前用户种族
    var wow_race = document.getElementById('task').getAttribute('wow_race');
    // 当前用户任务进度
    $scope.taskStep = username === '' ? 0 : parseInt(document.getElementById('task').getAttribute('taskStep'));
    // npc回复语数量与具体内容
    var welcomeTextCount, welcomeTextArray;
    // 初始化npc回复语内容
    initWelcomeText();
    // 当前任务数量
    $scope.taskCount = 0;
    // 当前背包物品数量
    $scope.backpackItemCount = 0;
    // 初始化与任务进度有关的细节
    changeTaskStep(0);

    // 打开或关闭背包
    $scope.backpackToggle = function () {
        $scope.backpackOpen = $scope.backpackOpen === 1 ? 0 : 1;
    };
    // 下一页
    $scope.toNextPage = function () {
        $(".pagination-sound")[0].play();
        $scope.currPage += 1;
    };
    // 上一页
    $scope.toPrevPage = function () {
        $(".pagination-sound")[0].play();
        $scope.currPage -= 1;
    };
    // 选择左边按钮
    $scope.chooseLeftOption = function () {
        var left = $scope.leftOption;
        if (left === '接受' || left === '完成任务') {
            if (left === '接受') {
                $scope.taskCount += 1;
                $(".questActivate")[0].play();
            } else {
                $scope.taskCount -= 1;
                $(".questComplete")[0].play();
            }
            changeTaskStep(1);
        } else if (left === '放弃') {
            $scope.taskCount -= 1;
            $(".questFailed")[0].play();
            changeTaskStep(-1);
        }
        $scope.taskFrameOpen = 0;
        if (left === '完成任务' && ($scope.taskStep === 4 || $scope.taskStep === 7)) {
            $scope.taskFrameToggle('npcMode');
        }
    };
    // 关闭任务框
    $scope.closeTaskFrame = function () {
        $scope.taskFrameOpen = 0;
    };
    // 打开或关闭任务框
    $scope.taskFrameToggle = function (mode) {
        $(".left.option").removeClass("silver");
        $scope.leftDisabled = 0;
        var curr_step = $scope.taskStep;
        // 中途改名的情况
        if ( username !== '丝黛拉苟萨' && curr_step !== 0) {
            $('.npc-sound').attr('src', '../static/wow/sound/FX_OGRaid_Siege_WeaponMachine_Warning.ogg');
            layer.msg('警报！警报！非法入侵者！警报！');
            return;
        }
        if (mode === 'letterMode' && curr_step !== 10) {
            $(".error")[0].play();
            layer.msg('你已经接到了该任务！');
            return;
        }
        if (curr_step === 0 || curr_step > 9) {
            resetModeAndTitle(mode);
            randomWelcomeText(mode);
            $scope.leftOption = null;
            $scope.leftOption = null;
            $scope.rightOption = mode === 'npcMode' ? '再见' : '知道了';
            if (mode === 'letterMode') {
                $scope.leftOption = '接受';
                $scope.rightOption = '拒绝';
            }
        } else if (curr_step === 1 || curr_step === 4 || curr_step === 7) {
            resetModeAndTitle(mode);
            $scope.leftOption = mode === 'npcMode' ? '接受' : null;
            $scope.rightOption = mode === 'taskMode' ? '知道了' : '拒绝';
        } else if (curr_step === 2 || curr_step === 5 || curr_step === 8) {
            resetModeAndTitle(mode);
            if (mode === 'npcMode') {
                $scope.leftOption = '继续';
                $scope.rightOption = '取消';
                $scope.leftDisabled = 1;
                $(".left.option").addClass("silver");
            } else {
                $(".left.option").removeClass("silver");
                $scope.leftOption = '放弃';
                $scope.rightOption = null;
            }
        } else if (curr_step === 3 || curr_step === 6 || curr_step === 9) {
            resetModeAndTitle(mode);
            $scope.leftOption = mode === 'npcMode' ? '完成任务' : null;
            $scope.rightOption = mode === 'npcMode' ? null : '知道了';
        }
        $scope.taskFrameOpen = $scope.taskFrameOpen === 1 ? 0 : 1;
    };

    // 重置打开模式和任务框标题栏
    function resetModeAndTitle(mode) {
        if (mode === 'npcMode') {
            npcSoundLoop();
            $scope.taskTitle = '女伯爵莉娅德琳';
            resetMode(1, 0, 0);
        } else if (mode === 'taskMode') {
            $scope.taskTitle = '当前任务';
            resetMode(0, 1, 0);
        } else {
            $scope.taskTitle = '褶皱的信件';
            resetMode(0, 0, 1);
        }
    }

    var npcSoundCount = 20;
    var npcSoundArray = [
        '../../static/wow/sound/task/BloodElfFemaleCongratulations01.ogg',
        '../../static/wow/sound/task/BloodElfFemaleFlirt02.ogg',
        '../../static/wow/sound/task/BloodElfFemaleFlirt05.ogg',
        '../../static/wow/sound/task/BloodElfFemaleFlirt13.ogg',
        '../../static/wow/sound/task/BloodElfFemaleGoodbye01.ogg',
        '../../static/wow/sound/task/BloodElfFemaleGoodbye02.ogg',
        '../../static/wow/sound/task/BloodElfFemaleGoodbye03.ogg',
        '../../static/wow/sound/task/BloodElfFemaleGoodbye04.ogg',
        '../../static/wow/sound/task/BloodElfFemaleHello01.ogg',
        '../../static/wow/sound/task/BloodElfFemaleHello03.ogg',
        '../../static/wow/sound/task/BloodElfFemaleHello04.ogg',
        '../../static/wow/sound/task/BloodElfFemaleNod01.ogg',
        '../../static/wow/sound/task/BloodElfFemaleNod02.ogg',
        '../../static/wow/sound/task/BloodElfFemalePissed07.ogg',
        '../../static/wow/sound/task/BloodElfFemalePissed08.ogg',
        '../../static/wow/sound/task/BloodElfFemalePissed09.ogg',
        '../../static/wow/sound/task/BloodElfFemalePissed10.ogg',
        '../../static/wow/sound/task/BloodElfFemalePissed11.ogg',
        '../../static/wow/sound/task/BloodElfFemalePissed14.ogg',
        '../../static/wow/sound/task/BloodElfFemalePissed16.ogg'
    ];
    var npcSoundArray2 = npcSoundArray.slice(0);

    // 循环npc语音
    function npcSoundLoop() {
        if (npcSoundCount === 0) {
            npcSoundCount = 20;
            npcSoundArray2 = npcSoundArray.slice(0);
        }
        var num = Math.floor(Math.random() * npcSoundCount);
        $('.npc-sound').attr('src', npcSoundArray2[num]);
        npcSoundCount -= 1;
        npcSoundArray2.splice($.inArray(npcSoundArray2[num], npcSoundArray2), 1);
    }

    // 重置打开模式和页面总数
    function resetMode(n, t, l) {
        $scope.npcMode = n;
        $scope.taskMode = t;
        $scope.letterMode = l;
        if ($scope.npcMode === 1 && $scope.taskStep === 1 || $scope.letterMode === 1 && $scope.taskStep === 10 || ($scope.taskStep === 2 || $scope.taskStep === 11) && $scope.taskMode === 1) {
            $scope.pageCount = $scope.taskStep > 9 ? 6 : 2;
        } else {
            $scope.pageCount = 1;
        }
        $scope.currPage = 1;
    }

    // npc随机回复
    function randomWelcomeText(mode) {
        var num = Math.floor(Math.random() * welcomeTextCount);
        $scope.welcome = mode === 'npcMode' ? welcomeTextArray[num] : null;
    }

    // 改变任务进度及相关细节
    function changeTaskStep(step) {
        $scope.taskStep += step;
        if (step !== 0) {
            $.post('/changeTaskStep', {
                id: user_id,
                step: step
            });
        }
        var curr_step = $scope.taskStep;
        var npc_img = $(".npc-img");
        var npc_head_img = $(".npc-head-img");
        if (curr_step === 0) {
            npc_img.attr("class", "npc-img unableQuest-img");
            npc_head_img.attr("src", "../static/wow/task/unableQuest-img.png");
        } else if (curr_step === 1 || curr_step === 4 || curr_step === 7) {
            npc_img.attr("class", "npc-img quest-img");
            npc_head_img.attr("src", "../static/wow/task/quest-img.png");
        } else if (curr_step === 2 || curr_step === 5 || curr_step === 8) {
            $scope.taskCount = 1;
            npc_img.attr("class", "npc-img unableQuestTurnIn-img");
            npc_head_img.attr("src", "../static/wow/task/unableQuestTurnIn-img.png");
        } else if (curr_step === 3 || curr_step === 6 || curr_step === 9) {
            $scope.taskCount = 1;
            npc_img.attr("class", "npc-img questTurnIn-img");
            npc_head_img.attr("src", "../static/wow/task/questTurnIn-img.png");
            if (curr_step !== 3) {
                var lines = curr_step === 6 ? '快过来，小姑娘！' : '你做到了！';
                var width = curr_step === 6 ? '210px' : '150px';
                show_npc_lines(lines, width);
            }
        } else if (curr_step === 10) {
            initWelcomeText();
            $scope.backpackItemCount += 1;
            npc_img.attr("class", "npc-img unableQuest-img");
            npc_head_img.attr("src", "");
        } else {
            $scope.taskCount = 1;
            $scope.backpackItemCount = 1;
            npc_img.attr("class", "npc-img unableQuest-img");
        }
        // 中途改名的情况
        if ( username !== '丝黛拉苟萨' && curr_step !== 0) {
            npc_img.attr("class", "npc-img unableQuest-img");
            npc_head_img.attr("src", "");
        }
    }

    // 显示npc对话框
    function show_npc_lines(lines, width) {
        $('.npc-lines').text(lines).css('width', width);
        setTimeout("$('.npc-lines').fadeIn(1000)", 1000);
        setTimeout("$('.npc-lines').fadeOut()", 4000);
    }

    // 初始化npc回复语内容
    function initWelcomeText() {
        if ($scope.taskStep === 0) {
            if (username === '') {
                welcomeTextCount = 5;
                welcomeTextArray = [
                    '我没见过你。',
                    '你是怎么进来的？',
                    '你注册了吗？',
                    '我在等一个叫丝黛拉苟萨的血精灵，你认识吗？',
                    '走开，陌生人！'
                ]
                ;
            } else if (username !== '丝黛拉苟萨') {
                welcomeTextCount = 2;
                welcomeTextArray = [
                    '你不是我要找的人。',
                    '能告诉我丝黛拉苟萨在哪吗？'
                ];
            } else if (wow_race !== '血精灵') {
                welcomeTextCount = 2;
                welcomeTextArray = [
                    '离我远点，' + wow_race + '！',
                    '你不是血精灵！'
                ];
            }
        } else if ($scope.taskStep > 9) {
            welcomeTextCount = 3;
            welcomeTextArray = [
                '今年你会交好运的！',
                '你在想什么？',
                '你接受那个任务了吗？'
            ];
        }
    }

    $scope.asd = function () {
        $.get('/asd');
    };
    $scope.dsa = function () {
        $.get('/aaa');
    };
});
window.onload = function () {
    $('.task-npc').show();
    $('.task-frame').show();
    $('.task-right-nav').show();
};
var background_music_count = 7;
var background_day_music_array = [
    '../static/wow/sound/sunstrider/ES_SunstriderWalkDay01.mp3',
    '../static/wow/sound/sunstrider/ES_SunstriderWalkDay02.mp3',
    '../static/wow/sound/sunstrider/ES_SunstriderWalkDay03.mp3',
    '../static/wow/sound/sunstrider/ES_RuinsWalkDay01.mp3',
    '../static/wow/sound/sunstrider/ES_RuinsWalkDay02.mp3',
    '../static/wow/sound/sunstrider/ES_RuinsWalkDay03.mp3',
    '../static/wow/sound/sunstrider/ES_ScenicIntroNight01.mp3'
];
var background_night_music_array = [
    '../static/wow/sound/sunstrider/ES_SunstriderWalkNight01.mp3',
    '../static/wow/sound/sunstrider/ES_SunstriderWalkNight02.mp3',
    '../static/wow/sound/sunstrider/ES_SunstriderWalkNight03.mp3',
    '../static/wow/sound/sunstrider/ES_RuinsWalkNight01.mp3',
    '../static/wow/sound/sunstrider/ES_RuinsWalkNight02.mp3',
    '../static/wow/sound/sunstrider/ES_RuinsWalkNight03.mp3',
    '../static/wow/sound/sunstrider/ES_ScenicIntroNight01.mp3'
];
var curr_hour = new Date().getHours();
if (curr_hour <= 12) {
    background_music_loop(background_music_count, background_day_music_array);
} else {
    background_music_loop(background_music_count, background_night_music_array);
}

// 循环背景音乐
function background_music_loop(count, sounds) {
    var num = Math.floor(Math.random() * count);
    var count2 = count, sounds2 = sounds.slice(0);
    $('.background-music')[0].volume = 0.3;
    $('.background-music').attr('src', sounds[num]).bind('ended', function () {
        count2 -= 1;
        sounds2.splice($.inArray(sounds2[num], sounds2), 1);
        if (count2 === 0) {
            count2 = count;
            sounds2 = sounds.slice(0);
        }
        num = Math.floor(Math.random() * count2);
        $('.background-music').attr('src', sounds2[num]);
    });
}
