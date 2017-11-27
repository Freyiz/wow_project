s = int(input('同学们请输入分数，按下空格，你就会知道你的等级了。\n'))
while True:
    if 100 >= s >= 90:
        s = int(input('A\n'))
    elif 80 <= s < 90:
        s = int(input('B\n'))
    elif 60 <= s < 80:
        s = int(input('C\n'))
    elif 0 <= s < 60:
        s = int(input('D\n'))
    else:
        s = int(input('请如实输入你的分数！\n'))
