def fun(x):
    for i in range(0,len(x)):
        if x[i] != x[-i-1]:
            print('不是回文联！')
            break
        else:
            print('是回文联！')
            break
x = input('请输入一句话：')
fun(x)
