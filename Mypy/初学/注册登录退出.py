user_data = {}
def new_user():
    prompt = '请输入用户名：'
    while True:
        name = input(prompt)
        if name in user_data:
            prompt = '此用户名已经被使用，请重新输入：'
            continue
        else:
            break
    passwd = input('请输入密码：')
    user_data[name] = passwd
    print('注册成功，赶紧试试登录吧^_^')
def old_user():
    prompt = '请输入用户名：'
    while True:
        name = input(prompt)
        if name not in user_data:
            prompt = '您输入的用户名不存在，请重新输入：'
            continue
        else:
            break   
    passwd = input('请输入密码：')
    pwd = user_data[name]
    if passwd == pwd:
        print('欢迎进入XXOO系统，请点右上角的X结束程序！')
    else: 
        print('密码错误！')
while 1:
    choice = input('''
|--- 新建用户：N/n ---|
|--- 登录账号：E/e ---|
|--- 退出程序：Q/q ---|
|--- 请输入指令代码：''')
    if choice == 'q' or choice == 'Q':
        break
    elif choice == 'n' or choice == 'N':
        new_user()
    elif choice == 'e' or choice == 'E':
        old_user()
    else:
        print('请输入有效的指令代码！')


