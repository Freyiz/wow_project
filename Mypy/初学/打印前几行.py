def fun(x):
    while x:
        print(f.readline(),end='')
        x -= 1
        
file = input('请输入要打开的文件（C:\\test.txt）：')
f = open(file)
x = int(input('请输入需要显示该文件前几行：'))
print('\n文件C:\\test.txt的前%d的内容如下：\n' % x)
fun(x)
