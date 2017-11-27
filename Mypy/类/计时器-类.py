import time as t
import easygui as g

class MyTimer:
    def __init__(self,test = None,times =1):
        self.test = test
        self.times = times
        self.prompt = "未开始计时！"
        self.choice = t.perf_counter
        self.begin = 0
        self.end = 0
        self.restart = -1

    def timing(self):
        s1 = t.perf_counter()
        for i in range(self.times):
            self.test()
        s2 = t.perf_counter()
        self.prompt = "总共运行了 %.2f 秒" % (s2 - s1)

    def __repr__(self):
        return self.prompt

    def set_timer(self):
        self.choice = t.process_time

    def __add__(self,other):
        sum = self.lasted + other.lasted
        print('总共运行了%f秒' % sum)
    
    def start(self):
        q = t.perf_counter()
        self.restart += 1
        if not self.restart:
            self.begin = self.choice()
            self.prompt = "提示：请先调用 stop() 停止计时！"
            print("计时开始...")
        else:
            if g.ccbox('已经开始了！','',('重新开始计时','取消')):
                self.begin = self.choice()
                self.prompt = "提示：请先调用 stop() 停止计时！"
                print("计时重新开始...")
        w = t.perf_counter()
        print(w-q)
                
    def stop(self):
        self.restart = -1
        if not self.begin:
            print("提示：请先调用 start() 进行计时！")
        else:
            self.end = self.choice()
            self._calc()
            print("计时结束！")

    def _calc(self):
        self.lasted = self.end - self.begin
        self.prompt = "总共运行了%.2f秒" % self.lasted
        self.begin = 0
        self.end = 0

def test():
    text = 'I love FishC.com!'
    char = 'o'
    if char in text:
        pass

a = MyTimer(test,1000000)
b = MyTimer(test,10000000)
