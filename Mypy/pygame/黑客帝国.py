import pygame as pg
import sys

pg.init()
size = width, height = 800, 600
screen = pg.display.set_mode(size)
pg.display.set_caption('黑客帝国')
bg = (0, 0, 0)
font = pg.font.Font(None, 30)
line_height = font.get_linesize()
position = 0

while 1:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            sys.exit()
        if position > height:
            position = 0
            screen.fill(bg)
        info = font.render(str(event), True, (0, 255, 0))
        screen.blit(info, (0, position))
        position += line_height
    pg.display.flip()
