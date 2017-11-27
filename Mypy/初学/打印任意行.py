def some(lines):
    while lines:
        print(f.readline(),end='')    
        lines -= 1

def all():
    for line in f:
        print(line,end='')

def seek(line):
    while line:
        f.readline()
        line -= 1

def fun():W
    (a,b) = x.split(':')   
    if a != ' ' and b != ' ':
        print('\n文件%s从第%s行到第%s行的内容如下：\n' % (file,a,b))
        seek((int(a)-1))
        some(int(b) - int(a) + 1)
    elif a != ' ' and b == ' ':
        print('\n文件%s从第%s行到末尾的内容如下：\n' % (file,a))
        seek((int(a)-1))
        all()
    elif a == ' ' and b != ' ':
        print('\n文件%s从开始到第%s行的内容如下：\n' % (file,b))
        some(int(b))
    elif a == ' ' and b == ' ':
        print('\n文件%s全文的内容如下：\n' % file)
        all()
    else:
        f.close()       

while 1:
    file = input('\n请输入要打开的文件（C:\\test.txt）：')
    x = input('请输入需要显示的行数【格式如 13:21 或  :21 或 21: 】：')
    f = open(file)
    fun()

        
    
    
        
        
                        
