class CountList:
    def __init__(self, *args):
        self.values = [x for x in args]
        self.times = []
        for each in self.values:
            self.times.append(0)

    def __repr__(self):
        return str(self.values)
    
    def __len__(self):
        return len(self.values)

    def __getitem__(self, key):
        self.times[key] += 1
        return self.values[key]

    def __setitem__(self,key,value):
        self.values[key] = value

    def __delitem__(self,key):
        del self.times[key]
        del self.values[key]

    def count(self,index):
        return self.times[index]

    def append(self,value):
        self.times.append(0)
        self.values.append(value)

    def pop(self,default = -1):
        del self.times[default]
        self.values.pop(default)

    def remove(self,value):
        del self.times[self.values.index(value)]
        self.values.remove(value)

    def insert(self,index,value):
        self.times.insert(index,0)
        self.values.insert(index,value)

    def clear(self):
        self.times.clear()
        self.values.clear()

    def reverse(self):
        self.times.reverse()
        self.values.reverse()

a = CountList(1,2,2,3,3,4,5)  
