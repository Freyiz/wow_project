def writefun():
    writestr = input()
    if writestr != '：w':
        f.write('%s\n' % writestr)
        return writefun()
    else:
        f.close()
        
f = open(input('请输入文件名：'),'w')
print('请输入内容【单独输入\'：w\'保存退出】:')
writefun()
    

