import random
import easygui as g
import sys
if sys.argv[1] == 'help':
    print('啊哈！')

def game():
    turtle_x = random.randint(0,5)
    turtle_y = random.randint(0,5)
    turtle = (turtle_x,turtle_y)
    fish_x = random.randint(0,5)
    fish_y = random.randint(0,5)
    fish = (fish_x,fish_y)
    life = 1000
    fish_num = 10
    list = [-2,-1,1,2]
    while 1:
        if life and fish_num:
            x_or_y = random.randint(0,1)
            turtle_step = random.randint(0,3)
            fish_step = random.randint(1,2)
            print('实时战况：乌龟剩余生命值是%d,它的位置是【%d,%d】，鱼剩余%d条，它的位置是【%d,%d】' % (life,turtle_x,turtle_y,fish_num,fish_x,fish_y))
            if x_or_y:
                turtle_x += list[turtle_step]
                fish_x += list[fish_step]
            else:
                turtle_y += list[turtle_step]
                fish_y += list[fish_step]
            if turtle_x < 0 or turtle_x > 5:
                turtle_x = turtle_x - list[turtle_step]*2
            if turtle_y < 0 or turtle_y > 5:
                turtle_y = turtle_y - list[turtle_step]*2
            if fish_x < 0 or fish_x > 5:
                fish_x = fish_x - list[fish_step]*2
            if fish_y < 0 or fish_y > 5:
                fish_y = fish_y - list[fish_step]*2
            if (turtle_x,turtle_y) == (fish_x,fish_y):
                life += 20
                fish_num -= 1
            life -= 1
        else:
            print('游戏结束：乌龟剩余生命值是%d,它的位置是【%d,%d】，鱼剩余%d条，它的位置是【%d,%d】' % (life,turtle_x,turtle_y,fish_num,fish_x,fish_y))
            if g.ccbox('GAME OVER\n  再来一局？','游戏结束',('好','不好')):
                return game()
            break
        
if g.indexbox('点我开始游戏','游戏开始',('我开始游戏','点我','开始游戏','点我开始游戏','我')) == 4:
    game()
