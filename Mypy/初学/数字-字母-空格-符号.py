def count(*param):
    a = b = c = d = 0
    for each in range(len(param)):
        for i in param[each]:
            if i.isalpha():
                a += 1
            elif i.isdigit():
                b += 1
            elif i.isspace():
                c += 1
            else:
                d += 1
        print('第 %d 个字符串共有：英文字母 %d 个，数字 %d 个，空格 %d 个，其他字符 %d 个' % (each+1,a,b,c,d))
count('3 l;ddk o p3  po','34 ]34' '/d','dwad;;;\'3/ ]   ]\'; ]33','dawop239993看口婆婆的宽带d')
            
