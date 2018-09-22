Public Function GetRandNumber(min, max)
	Randomize
	GetRandNumber = Int((max-min+1)*Rnd+min)
End Function
Dim notes
Dim note1
Dim note2
Dim dt
Dim cycles
Dim counter
notes=array("A","B","C","D","E","F","G","A flat","B flat","D flat","E flat","F sharp")
number=array("1","2","3","4","5","6","7")
note1=notes(GetRandNumber(0,11))
note2=notes(GetRandNumber(0,11))
dt=InputBox("请输入每次测试的停顿时间（单位：秒）")
cycles=InputBox("请输入测试数目")
For counter=1 to cycles
    While note1=note2
        note2=notes(GetRandNumber(0,11))
    Wend
    CreateObject("SAPI.SpVoice").Speak note1
    note1=note2
    Wscript.Sleep 100*dt
    CreateObject("SAPI.SpVoice").Speak number(GetRandNumber(0,6))
    Wscript.Sleep 1000*dt
Next