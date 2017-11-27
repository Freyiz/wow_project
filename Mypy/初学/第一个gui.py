import easygui as g
import sys
if g.ccbox('宝贝，要再来一次吗？','',('好呀好呀','不要啊，雅蠛蝶')):
    g.msgbox('好你个大头鬼，歇会吧！','','不嘛不嘛~')
else:
    if g.ccbox('这就不行了？来颗大力丸吧！','',('吃了真的会变强吗？？','我才不吃那种东西呢！')):
        g.msgbox('真的啊，不骗你！')
    else:
        g.msgbox('我的话你都不信？','','再见！！')
