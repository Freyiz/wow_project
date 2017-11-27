class LeapYear:
    def __init__(self):
        self.list = []
        year = 2017
        self.index = 0
        while year:
            if year%4 == 0 and year%100!= 0 or year%400 == 0:
                self.list.append(year)
            year -= 1
        
    def __iter__(self):
        return self

    def __next__(self):
        self.index += 1
        return self.list[self.index]

a = LeapYear()

                

                
            
            
        
        
