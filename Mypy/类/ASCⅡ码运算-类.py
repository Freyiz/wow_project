class Nstr(str):
    def __new__(self,string):
        sum_string = 0
        for i in string:
            sum_string += ord(i)
        return str.__new__(self,sum_string)
        
    def __add__(self,other):
        return int(self) + int(other)

    def __sub__(self,other):
        return int(self) - int(other)

    def __mul__(self,other):
        return int(self) * int(other)

    def __truediv__(self,other):
        return int(self) / int(other)

    def __floordiv__(self,other):
        return int(self) // int(other)

a = Nstr('我爱北京天安门')
b = Nstr('你呢')
a = Nstr('FishC')
b = Nstr('love')
