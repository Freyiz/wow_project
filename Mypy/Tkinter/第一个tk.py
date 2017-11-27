import tkinter as tk

class App:
    def __init__(self,root):
        frame = tk.Frame(root)
        frame.pack(side=tk.LEFT,padx=20,pady=30)

        self.sayhi = tk.Button(frame,text='Hi~',bg='red',fg='black',command=self.hello)
        self.sayhi.pack()
        
    def hello(self):
        print('Hello World!')

root = tk.Tk()
root.title('我的第一个tk')
app = App(root)

root.mainloop()
