from tkinter import *

root = Tk()
root.title('clac')
    
def clac():
    v.set(int(e1.get())+int(e2.get()))

def val(content):
    return content.isdigit()

v = StringVar()

reg = root.register(val)
e1 = Entry(root,width=10,validate='key',
           validatecommand=(reg,'%P'))
e1.grid(row=0,column=0,padx=10,pady=10)
e2 = Entry(root,width=10,validate='key',
           validatecommand=(reg,'%P'))
e2.grid(row=0,column=2)
e3 = Entry(root,width=10,textvariable=v,
           state=DISABLED).grid(row=0,column=4)

Label(root,text='+').grid(row=0,column=1)
Label(root,text='=').grid(row=0,column=3)

Button(root,text='计算结果',
       command=clac).grid(row=1,column=2,pady=2)

mainloop()
