import sl4a
import time
import random
while True:
    time.sleep(4)
    droid = sl4a.Android()
    char = chr(int((random.random()*10000000000)**2)%7+1+64)
    print(char)
    if char=='B':
        char='Be'
    if char=='E':
        char='ea'
    droid.ttsSpeak(char)
