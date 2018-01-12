import random
import time
import win32com.client
speaker = win32com.client.Dispatch("SAPI.SpVoice")
char1 = chr(random.randint(1,7)+64)
char2 = chr(random.randint(1,7)+64)
dt=float(input("Please enter the time interval:"))
while True:
    while char1==char2:
        char2 = chr(random.randint(1,7)+64)
    if char1=='B':
        speaker.Speak('BB')
    else:
        speaker.Speak(char1)
    print(char1)
    char1=char2
    time.sleep(dt)
