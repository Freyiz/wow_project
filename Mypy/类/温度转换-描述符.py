class C:
    def __init__(self,getc,setc,delc):
        self.getc = getc
        self.setc = setc
        self.delc = delc

    def __get__(self,instance,owner):
        print('切换到摄氏度模式...现在温度是%s℃。' % self.getc(instance))

    def __set__(self,instance,value):
        print('实时温度：%s℃。' % value)
        return self.setc(instance,value)

    def __delete__(self,instance):
        return self.delc(instance)
    
class F:
    def __init__(self,getf,setf,delf):
        self.getf = getf
        self.setf = setf
        self.delf = delf

    def __get__(self,instance,owner):
        tc = self.getf(instance)
        tf = a*1.8+32
        print('切换到华氏度模式...现在温度是%s℉。' % tf)

    def __set__(self,instance,value):
        print('实时温度：%s℉。' % value)
        return self.setf(instance,(value-32)/1.8)

    def __delete__(self,instance):
        return self.delf(instance)

class T:
    def __init__(self,x = 0):
        print('感应到温度变化！使用摄氏度模式【.c】或华氏度模式【.f】查看或修改温度。')
        self.x = x

    def getx(self):
        return self.x

    def setx(self,value):
        self.x = value

    def delx(self):
        del self.x
        
    c = C(getx,setx,delx)
    f = F(getx,setx,delx)


