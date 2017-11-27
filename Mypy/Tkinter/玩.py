from tkinter import *
import webbrowser
import hashlib
import math

root = Tk()
root.title('坦克大战')
def fun():
    print('我是第行文字~')
def earth():
    vs.set('危险！远离！')
def climb():
    vs.set('想去爬山吗？')
def getv():
    vs.set('你想干嘛？')

text = Text(root,fg='chocolate',undo=True,
            background='seashell',autoseparators=False)
text.pack(expand=1)
text.insert(END,'大家好，我是盘古。访问我：http://www.fishc.com。记住，盘古。')
text.tag_add('link','1.13','1.33')
text.tag_config('link',foreground='blue',underline=True,
                overstrike=True,bg='warning')
def arrow(event):
    text.config(cursor='arrow')
def xterm(event):
    text.config(cursor='xterm')
def click(event):
    webbrowser.open('http://www.fishc.com')
    
    
text.tag_bind('link','<Enter>',arrow)
text.tag_bind('link','<Leave>',xterm)
text.tag_bind('link','<Button-1>',click)

def sep(event):
    text.edit_separator()
text.bind('<Key>',sep)

start = '1.0'
while 1:
    pos = text.search('盘古',start,END)
    if not pos:
        break
    print('我在这呢：第%s行，第%s列。' % tuple(pos.split('.')))
    start = pos + '+1c'
    

contents = text.get('1.0',END)

def getsig(contents):
    content = hashlib.md5(contents.encode())
    return content.digest()

sig = getsig(contents)

def check():
    contents = text.get('1.0',END)
    if sig != getsig(contents):
        print('警报！警报！')
        vs.set('内容异动！（别点我）')
        vs1.set('真的测出来了-->')
    else:
        vs1.set('没什么好测的！')
        return True
    
def undoshow():
    contents = text.get('1.0',END)
    if sig != getsig(contents):
        text.edit_undo()
            
def redoshow():
    try:
        text.edit_redo()
    except TclError:
        pass
    
def joke():
    vs.set('什么也没有发生-_-#')

vs = StringVar()
vs.set('平安是福（别点我）')
vs1 = StringVar()
vs1.set('全员检测')
v = IntVar()
vcoords = StringVar()
vcoords.set('坐标')

frame = Frame(text,bd=2,height=1,width=60,
            relief=SUNKEN,bg='skyblue'
              )
frame.pack(pady=25,expand=0,
              padx=10,anchor=CENTER)

Button(frame,text='点我撤销',command=undoshow,
       ).pack(side=LEFT)
Button(frame,text='点我恢复',command=redoshow,
       ).pack(side=RIGHT)

Label(frame,textvariable=vcoords).pack()

frame2 = Frame(text)
frame2.pack(expand=1)

labelframe = LabelFrame(text,bd=5
                        ,width=10,bg='tomato',
              relief=GROOVE,text='我是标签边框',labelanchor=S
              )
labelframe.pack(padx=10)

ascale = Scale(labelframe,from_=0,to=100,resolution=0.5
               ,tickinterval=5,length=200,digits=1,width=25
               ,fg='black',bg='tan',label='啊哈')
ascale.pack(side=RIGHT)

photo = PhotoImage(file=r'C:\Users\Administrator\AppData\Local\Programs\Python\Python36-32\Mypy\d3.png')

sb = Scrollbar(text)
sb.pack(side=RIGHT,fill=Y)

alist = Listbox(text,selectmode=EXTENDED,bg='gray',
                exportselection=False,setgrid=1
                ,yscrollcommand=sb.set,height=3)
for i in ['夏洛克·福尔摩斯','巴顿男爵','包拯','斯通菲尔德','张小凡']:
    alist.insert(END,i)
alist.pack(pady=5)
for i in range(100):
    alist.insert(END,i)
    
sb.config(command=alist.yview)

list = []
for a in ['阿尔卑斯山','珠穆朗玛峰','帽儿山']:
    list.append(IntVar())
    Checkbutton(labelframe,text=a,activebackground='blue',
                variable=list[-1],padx=10,pady=3,anchor=W,
                indicatoron=False,bg='white',bd=3,
                height=1,width=10,selectcolor='red',
                selectimage=photo,justify=RIGHT
                ,command=climb
                ,compound=CENTER
                ).pack(padx=30,anchor=N)

a = Button(labelframe,text='我就是按钮，按钮就是我，\n有什么问题吗'
           ,
           compound=CENTER
           ,anchor=CENTER,repeatdelay=1000
           ,repeatinterval=100,underline=11
           ,command=lambda x=alist : x.delete(ACTIVE))
a.pack(padx=20,pady=30)

for a,b in [('火星',1),('冥王星',2),('哈雷彗星',3)]:
    Radiobutton(frame,text=a,value=b,command=getv,
                variable=v,padx=30,pady=3,font='楷体'
                ,activeforeground='gray',bg='wheat'
                
                ).pack()
Radiobutton(frame,text='地球',value=4,variable=v
            ,selectcolor='red',command=earth).pack()

def love(content):
    return '情' not in content

def love2(content):
    return '欲' not in content

reg = root.register(love)
reg2 = root.register(love2)

e1 = Entry(frame2,justify=CENTER,
           highlightbackground='black',
            insertbackground='red',
           insertwidth=15,
           selectbackground='black',
           insertborderwidth=5,
           insertofftime=100,
           validate='key',vcmd=(reg,'%P'))
e1.pack()

sbe2 = Scrollbar(text,orient=HORIZONTAL)
sbe2.pack(side=BOTTOM,fill=X)

e2 = Entry(text,justify=RIGHT,highlightcolor='yellow',
            insertbackground='green',
           insertontime=10,xscrollcommand=sbe2.set
           ,selectborderwidth=20,
        selectforeground='gray',
           validate='key',vcmd=(reg2,'%P'))
e2.pack(pady=10)

sbe2.config(command=e2.xview)

Button(frame,textvariable=vs1,width=15,bg='steelblue',
       command=check).pack(side=LEFT)
Button(frame,textvariable=vs,width=18,bg='steelblue',
       command=joke).pack(side=RIGHT)

button1 = Button(text,text='我是谁',command=root.quit)
text.window_create('1.0',window=button1)

can = Canvas(frame,width=200,height=100)
can.pack()

def points():
    x = 100 ; y = 50 ; r = 50
    l1 = r * math.sin(2 * math.pi / 5)
    l2 = r * math.cos(2 * math.pi / 5)
    l3 = r * math.sin(math.pi / 5)
    l4 = r * math.cos(math.pi / 5)
    return [(x-l1,y-l2),(x+l3,y+l4),(100,0),(x-l3,y+l4),(x+l1,y-l2)]

can.create_polygon(points(),fill='limegreen')

def paint(event):
    x1,y1 = (event.x - 1),(event.y - 1)
    x2,y2 = (event.x +5),(event.y + 5)
    can.create_oval(x1,y1,x2,y2,fill='blue')
can.bind('<B1-Motion>',paint)
def paint1(event):
    x1,y1 = (event.x - 1),(event.y - 1)
    x2,y2 = (event.x +5),(event.y + 5)
    can.create_oval(x1,x2,y1,y2,fill='yellow')
can.bind('<B2-Motion>',paint1)
def paint2(event):
    x1,y1 = (event.x - 1),(event.y - 1)
    x2,y2 = (event.x +5),(event.y + 5)
    can.create_rectangle(y1,x1,x2,y2,fill='orange')
can.bind('<B3-Motion>',paint2)

menu0 = Menu(root,tearoff=False)

menu1 = Menu(menu0,tearoff=False)
menu1.add_command(label='想吃')
menu1.add_command(label='想喝')
menu1.add_command(label='想想')
menu1.add_command(label='尘归尘')
menu0.add_cascade(label='好饿',menu=menu1)

menu2 = Menu(menu0,tearoff=False,relief=RAISED,
             activebackground='gray')
menu2.add_command(label='睡觉')
menu2.add_command(label='打盹')
menu2.add_command(label='运动')
menu2.add_command(label='土归土')
menu0.add_cascade(label='好困',menu=menu2)
root.config(menu=menu0)


menuf = Menu(root,tearoff=False)
menuf.add_command(label='充数的')

menuf1 = Menu(menuf,tearoff=False,activebackground='green')
menuf1.add_command(label='西游记')
menuf1.add_command(label='红楼梦')
menuf1.add_command(label='水浒传')
menuf1.add_command(label='三国演义')
menuf.add_cascade(label='小说',menu=menuf1)

photod1 = PhotoImage(file=r'C:\Users\Administrator\AppData\Local\Programs\Python\Python36-32\Mypy\d3.png')
def topl():
    tl = Toplevel()
    tl.attributes('-alpha',0.8)
    tl.attributes('-topmost',True)
    tl.title('大话西游')
    Label(tl,image=photod1).pack()
    
menuf2 = Menu(menuf,tearoff=False,activebackground='brown')
menuf2.add_command(label='这个杀手不太冷')
menuf2.add_command(label='喜剧之王')
menuf2.add_command(label='低俗小说')
menuf2.add_command(label='大话西游',command=topl)
menuf.add_cascade(label='电影',menu=menuf2)

menuf.add_command(label='收尾的')

def bindmenu(event):
    menuf.post(event.x_root,event.y_root)
    
frame.bind('<Button-3>',bindmenu)

lfb = Menubutton(labelframe,text='看不见我',bg='tomato',
                 direction='right',foreground='coral')
lfb.pack(side=LEFT)
lfb0 = Menu(lfb,tearoff=False)
lfb1 = Menu(lfb0,tearoff=False)
lfb1.add_command(label='没')
lfb1.add_command(label='什')
lfb1.add_command(label='么')
lfb1.add_command(label='！')
lfb0.add_cascade(label='没什么',menu=lfb1)

lfb2 = Menu(lfb0,tearoff=False)
lfb2.add_command(label='我')
lfb2.add_command(label='是')
lfb2.add_command(label='钥')
lfb0.add_cascade(label='别看了',menu=lfb2)

lfb3 = Menu(lfb2,tearoff=False)
lfb3.add_command(label='    我还是决定告诉你这件事。')
lfb3.add_command(label='    是这样的：在这个坦克大战 —— 也')
lfb3.add_command(label='就是  tkinter 中，隐藏了一个关于你的')
lfb3.add_command(label='秘密。这个秘密也是一个密码。而解开')
lfb3.add_command(label='密码的线索从你出生那天起就被遗失了。')
lfb3.add_command(label='    为了找回这条线索，一位你的追随者')
lfb3.add_command(label='用尽了他几乎一生的时间，然而，一无')
lfb3.add_command(label='所获。')
lfb3.add_command(label='    幸运的是，就在十天前，那位虔诚的')
lfb3.add_command(label='信徒偶然结识了一位来自来自西藏的原')
lfb3.add_command(label='住民。那位原住民的祖父年轻时是一位')
lfb3.add_command(label='当地小有名气的导游。他接待了很多外')
lfb3.add_command(label='地来的游客，而与其中一名游客出行的')
lfb3.add_command(label='经历令他印象异常深刻。以至于每当跟')
lfb3.add_command(label='别人讲起这件事，他都这么形容：“这')
lfb3.add_command(label='个故事你可能难以置信，但我一辈子都不')
lfb3.add_command(label='会忘记！”当原住民成年之时，他的祖')
lfb3.add_command(label='父早已不在人世，但故事却流传了下来。')
lfb3.add_command(label='所以，在和原住民的闲谈之中，信徒才有')
lfb3.add_command(label='幸了解到那段往事。')
lfb3.add_command(label='    事情发生在六十年前，那位导游叫普布，')
lfb3.add_command(label='那时候还是一个健壮的小伙子。至于那位')
lfb3.add_command(label='游客，恐怕我无法告诉你他叫什么。从一开')
lfb3.add_command(label='始，游客的姓名就没有被提及过，只知道他')
lfb3.add_command(label='是一个三十来岁的中年人，口音低沉，听不')
lfb3.add_command(label='出来自哪里。我猜是普布不愿意告诉我们，')
lfb3.add_command(label='也许是出于对同伴的庇护，那么我们暂时把')
lfb3.add_command(label='那位游客称作X吧。')
lfb3.add_command(label='    其实一开始，普布是不打算答应X的同行')
lfb3.add_command(label='邀请的。一般游客的要求都是逛逛著名的景')
lfb3.add_command(label='点什么的，但X要去的地方却连普布都没听过')
lfb3.add_command(label='。普布只愿意去他自己熟悉的地方，所以当')
lfb3.add_command(label='时就拒绝了X。没想到第二天，X又出现了，')
lfb3.add_command(label='并且随身带了一个小木头盒子。在看过盒子里')
lfb3.add_command(label='的东西之后，普布立刻就答应了X的请求。')
lfb3.add_command(label='    （后面的字迹越发模糊，已无法辨认......）')
lfb2.add_cascade(label='匙',menu=lfb3)

lfb.config(menu=lfb0)

vom = StringVar()

om = OptionMenu(labelframe,vom,'打','酱','油','的','')
om.pack(side=RIGHT)

def coords(event):
    vcoords.set((event.x,event.y))
frame.bind('<Motion>',coords)
def info():
    messagebox.showinfo('啊哦','被发现了')
Message(frame,text='青龙').pack(side=LEFT)
Message(frame,text='白虎').pack(side=RIGHT)
Button(frame,text='',command=info).place(relx=0.98)

def cow(content):
    if content == '老牛':
        return True
    else:
        return False
def chspin():
    spin.delete(0,END)

testspin = root.register(cow)
spin = Spinbox(frame,values=('老牛','牛犊','羊腰子'),width=16,
        validate='focusout', vcmd=(testspin,'%P'),invcmd=chspin
            ,wrap=True)
spin.pack()

pw = PanedWindow(frame,height=50,width=1)
pw.pack(fill=BOTH,expand=1)
pwb1 = Button(pw,text='1',bg='crimson')
pw.add(pwb1)
pwb2 = PanedWindow(frame,orient=VERTICAL)
pw.add(pwb2)
pwb3= Button(frame,text='2',bg='salmon')
pwb2.add(pwb3)
pwb4 = PanedWindow(frame)
pwb2.add(pwb4)
pwb5= Button(frame,text='3',bg='orange')
pwb4.add(pwb5)
pwb6 = PanedWindow(frame,orient=VERTICAL)
pwb4.add(pwb6)
pwb7= Button(frame,text='4',bg='slategray')
pwb6.add(pwb7)
pwb8 = PanedWindow(frame)
pwb6.add(pwb8)
pwb9= Button(frame,text='住手',bg='coral')
pwb8.add(pwb9)
pwb10 = PanedWindow(frame,orient=VERTICAL)
pwb8.add(pwb10)
pwb11= Button(frame,text='还看',bg='darkred')
pwb10.add(pwb11)
pwb12 = PanedWindow(frame)
pwb10.add(pwb12)
pwb13= Button(frame,text='够了',bg='orchid')
pwb12.add(pwb13)
pwb14 = PanedWindow(frame,orient=VERTICAL)
pwb12.add(pwb14)
pwb15= Button(frame,text='没了',bg='lightpink')
pwb14.add(pwb15)
pwb16 = PanedWindow(frame)
pwb14.add(pwb16)
pwb17= Button(frame,text='真的没了',bg='cyan')
pwb16.add(pwb17)

mainloop()


