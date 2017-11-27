import os
import time as t

class Record:
    def __init__(self,num,b):
        self.num = num
        self.b = b
        
    def __get__(self,instance,owner):
        with open('recordr.txt','a') as f:
            f.write('%s变量于北京时间%s被读取，%s = %s\n' % (self.b,t.asctime(),self.b,self.num))      
        return self.num
    
    def __set__(self,instance,value):
        self.num = value
        with open('recordr.txt','a') as f:
            f.write('%s变量于北京时间%s被修改，%s = %s\n' % (self.b,t.asctime(),self.b,self.num))

class Test:
    x = Record(10,'x')
    y = Record(8.8,'y')

test = Test()
