a = input('请输入一个1到10之间的数字\n')
while True:
    b = int(a)
    if 1 <= b <= 10:
        a =input('抱歉！您输入的数字不符合规定！\n')
    else:
        a =input('说了是1到10之间！再来吧!\n')
