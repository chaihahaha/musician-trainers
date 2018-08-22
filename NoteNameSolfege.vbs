Public Function GetRandNumber(min, max)
	Randomize
	GetRandNumber = Int((max-min+1)*Rnd+min)
End Function
Dim quesArray
Dim keyArray
Dim cycles
Dim counter
Dim randN
quesArray=array("A","B","C","D","E","F","G","bG","bA","bB","bD","bE","#C","#D","#F","#G","#A","bF","#E","bC","#B")
keyArray=array("la","ti","do","re","mi","fa","so","se","le","te","ra","me","di","ri","fi","si","li","fe","mai","de","tai")
cycles=InputBox("«Î ‰»Î≤‚ ‘ ˝ƒø")
For counter=1to cycles
    randN=GetRandNumber(0,20)
    ans=InputBox(quesArray(randN))
    If ans=keyArray(randN) Then
        MsgBox "Right"
    Else
        MsgBox "False"
    End If
Next