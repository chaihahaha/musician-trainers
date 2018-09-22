Public Function GetRandNumber(min, max)
	Randomize
	GetRandNumber = Int((max-min+1)*Rnd+min)
End Function
Dim scale
Dim cycles
Dim randN
Dim counter
scale=array("A B C# D E F# G# A","Bb C D Eb F G A Bb","B C# D# E F# G# A# B","C D E F G A B C","Db Eb F Gb Ab Bb C Db","D E F# G A B C# D","Eb F G Ab Bb C D Eb","E F# G# A B C# D# E","F G A Bb C D E F","Gb Ab Bb Cb Db Eb F Gb","G A B C D E F# G","Ab Bb C Db Eb F G Ab")
cycles=InputBox("«Î ‰»Î≤‚ ‘ ˝ƒø")
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
