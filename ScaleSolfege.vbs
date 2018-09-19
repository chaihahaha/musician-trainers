Public Function GetRandNumber(min, max)
	Randomize
	GetRandNumber = Int((max-min+1)*Rnd+min)
End Function
Dim scale
Dim cycles
Dim randN
Dim counter
scale=array("A B #C D E #F #G A","bB C D bE F G A bB","B #C #D E #F #G #A B","C D E F G A B C","bD bE F bG bA bB C bD","D E #F G A B #C D","bE F G bA bB C D bE","E #F #G A B #C #D E","F G A bB C D E F","bG bA bB bC bD bE F bG","G A B C D E #F G","bA bB C bD bE F G bA")
cycles=InputBox("请输入测试数目")
For counter=1to cycles
    randN=GetRandNumber(0,11)
    If right(left(scale(randN),2),1)=" " Then
        MsgBox left(scale(randN),1)
        MsgBox scale(randN)
    Else
        MsgBox left(scale(randN),2)
        MsgBox scale(randN)
    End If
Next
