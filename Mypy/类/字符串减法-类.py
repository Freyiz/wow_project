class Nstr(str):
    def __sub__(self,other):
        list = []
        string = ''
        for i in self:
            list.append(i)    
        for i in other:
            while i in list:
                list.remove(i)
        for i in list:
            string += i
        return string

a = Nstr('I love FishC.com!iiiiiiii')               
b = Nstr('i')                
