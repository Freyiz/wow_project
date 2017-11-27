for a in range(1,10):
    for b in range(0,10):
        for c in range(0,10):
            A = a*100 + b*10 + c 
            if a**3 + b**3 + c**3 == A and 100 < A < 999: 
                print(A,end = ' ')
