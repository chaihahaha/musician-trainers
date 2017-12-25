import random
import time
import win32com.client
speaker = win32com.client.Dispatch("SAPI.SpVoice")
while True:
    speaker.Speak(chr(random.randint(1,7)+64))
    time.sleep(5)
