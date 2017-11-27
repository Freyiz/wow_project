def fun(f_n,old,new):
    list = []
    count = 0
    
    f_r = open(f_n)
    for each in f_r:
        if old in each:
            count += each.count(old)
            each = each.replace(old,new)
        list.append(each)
    f_r.close()
    
    print('\n文件 %s 中共有%d个【%s】\n您确定要把所有的【%s】替换为【%s】吗？' % (f_n,count,old,old,new)) 
    if input('确定请输入\'YES\'：') == 'YES':
        f_w = open(f_n,'w')
        f_w.writelines(list)
        f_w.close()
        print('替换成功!')
    else:
        print('输入错误，替换失败!')

f_n = input('请输入文件名：')
old = input('请输入需要替换的单词或字符：')
new = input('请输入新的单词或字符：')
fun(f_n,old,new)

