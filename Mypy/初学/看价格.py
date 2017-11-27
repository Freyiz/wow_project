def fun(p,rate):
    print('原始2价格是：',op)
    return(p * rate)

while True:
    op = float(input('原始价格：'))
    rate = float(input('折扣：'))
    np = fun(op,rate)
    print('新价格是：',np)
    print('原始3价格是：',op)
    print()

