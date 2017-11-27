import easygui as g
import os

path = g.fileopenbox(default="*.txt")

with open(path) as f:
    title = os.path.basename(path)
    msg = "文件【%s】的内容如下：" % title
    text = f.read()
    text_new = g.codebox(msg, title, text)

if text_new != (text+'\n'):
    choice = g.buttonbox('检测到文件内容发生改变，请选择以下操作：','警告',['覆盖保存','放弃保存','另存为...'])
    if choice == '覆盖保存':
        with open(path,'w') as f:
            f.writelines(text_new)
    if choice == '另存为...':
        path_new = g.filesavebox(default=title)
        with open(path_new,'w') as f:
            f.writelines(text_new)
