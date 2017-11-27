import sys
import pygame as pg

pg.init()
bg = (255, 255, 255)
size = width, height = 800, 600
fullscreen = False
pg.display.set_caption('小乌龟')
screen = pg.display.set_mode(size,pg.RESIZABLE)

speed = [0, 0]
ratio = 1.0
sec = 10

ophoto = pg.image.load(r"C:\Users\Administrator\Desktop\city.png")
oposition = ophoto.get_rect()
photo = ophoto
position = oposition

while 1:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            sys.exit()
        #无法共存
        '''if event.type == pg.KEYDOWN:
            if event.key == pg.K_EQUALS or event.key == \
                       pg.K_MINUS or event.key == pg.K_SPACE:
                if event.key == pg.K_EQUALS and ratio < 2:
                    ratio += 0.1                   
                if event.key == pg.K_MINUS and ratio > 0.5:
                    ratio -= 0.1
                if event.key == pg.K_SPACE:
                    ratio = 1.0
                    
                position.width = oposition.width * ratio 
                position.height =oposition.height * ratio              
                photo = pg.transform.smoothscale(ophoto,\
                                     (int(position.width), int(position.height)))'''

    if position.left < 0 or position.right > width:
        speed[0] = 0
    if position.top < 0 or position.bottom > height:
        speed[1] = 0
      
    if event.type == pg.KEYDOWN:
        if event.key == pg.K_LEFT:
            speed[0] = -3 if position.left > 0 else 0 
        if event.key == pg.K_RIGHT:
            speed[0] = 3 if position.right < width else 0
        if event.key == pg.K_UP:
            speed[1] = -3 if position.top > 0 else 0
        if event.key == pg.K_DOWN:
            speed[1] = 3 if position.bottom < height else 0
            
        if event.key == pg.K_LCTRL:
            sec = 0
            
        if event.key == pg.K_F11:
            fullscreen = not fullscreen
            if fullscreen:
                screen = pg.display.set_mode(\
                    pg.display.list_modes()[0],\
                    pg.FULLSCREEN | pg.HWSURFACE)
                width, height = pg.display.list_modes()[0]
            else:
                screen = pg.display.set_mode(size)
                width, height = size

    if event.type == pg.KEYUP:
        if event.key == pg.K_LEFT:
            speed[0] = 0
        if event.key == pg.K_RIGHT:
            speed[0] = 0
        if event.key == pg.K_UP:
            speed[1] = 0
        if event.key == pg.K_DOWN:
            speed[1] = 0
            
        if event.key == pg.K_LCTRL:
            sec = 10

    if event.type == pg.VIDEORESIZE:
        size = event.size
        screen = pg.display.set_mode(size,pg.RESIZABLE)
        width, height = size
    if 1:
        photo = pg.transform.rotate(ophoto,360)
        position.width = photo.get_rect().width
        position.height = photo.get_rect().height
        if position.left <= 0:
            photo = pg.transform.rotate(ophoto,270)
            position.width = photo.get_rect().width
            assert isinstance(photo.get_rect().height)
            position.height = photo.get_rect().height
        if position.top <= 0:
            photo = pg.transform.rotate(ophoto,180)
            position.width = photo.get_rect().width
            position.height = photo.get_rect().height
            
        if position.right >= width:
            photo = pg.transform.rotate(ophoto,90)
            position.width = photo.get_rect().width
            position.height = photo.get_rect().height

    position = position.move(speed)
    screen.fill(bg)
    screen.blit(photo,position)
    pg.display.flip()
    pg.time.delay(sec)




