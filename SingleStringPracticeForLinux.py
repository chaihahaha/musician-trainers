#!/bin/python
import random
import time
import pyttsx3
engine = pyttsx3.init()
char1 = chr(random.randint(1,7)+64)
char2 = chr(random.randint(1,7)+64)
dt=float(input("Please enter the time interval:"))
while True:
    while char1==char2:
        char2 = chr(random.randint(1,7)+64)
    engine.say(char1)
    engine.runAndWait()
    char1=char2
    time.sleep(dt)
