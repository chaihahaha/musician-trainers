"""Speak the note name."""
  
import sl4a
import time
import random
char1 = chr(int((random.random()*10000000000)**2)%7+1+64)
char2 = chr(int((random.random()*10000000000)**2)%7+1+64)

while True:
    time.sleep(4)
    droid = sl4a.Android()
    while char1==char2:
        char2 = chr(int((random.random()*10000000000)**2)%7+1+64)
    print(char1)
    if char1=='B':
        char1='Be'
    if char1=='E':
        char1='ea'
    droid.ttsSpeak(char1)
    char1=char2
    

