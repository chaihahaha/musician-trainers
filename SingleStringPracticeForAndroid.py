"""Speak the note name."""
  
import sl4a
import time
import random
def randNote():
 return chr(int((random.random()*10000000000)**2)%7+1+64)
 
def randSolfege():
 solfegenote=['do','di','ra','re','ri','me','mi','fa','fi','se','so','si','le','la','li','ti']
 return solfegenote[int((random.random()*10000000000)**2)%16]

char1 = randSolfege()
char2 = randSolfege()
while True:
 time.sleep(2)
 droid = sl4a.Android()
 while char1==char2:
  char2 = randSolfege()
 print(char1)
# if char1=='B.':
#  char1='Be'
# if char1=='E.':
#  char1='ea'
 droid.ttsSpeak(char1)
 char1=char2

    

