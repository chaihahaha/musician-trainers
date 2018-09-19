function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}


var note_ans = new Array("G", "A", "B", "C", "D", "E", "F");
var note_ques = new Array("q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g");
var note_flat = new Array("X", "C", "V", "B", "N", "M", "&#60;", "&#62;", "?", "Ÿ", "∕", "¤", "‹", "›", "&#61441;", "&#61442;", "‡", "°");
var note_sharp = new Array("‚", "&#8212;", "±", "Œ", "„", "‰", "Â", "Ê", "Á", "Ë", "È", "Ø", "∏", "”", "’", "»", "Å", "Í");
var clef = new Array("`", "1");
var solfege_dic={"A":"la","B":"ti","C":"do","D":"re","E":"mi","F":"fa","G":"so","bA":"le","#A":"li","bB":"te","#B":"tai","bC":"de","#C":"di","bD":"ra","#D":"ri","bE":"me","#E":"mai","bF":"fe","#F":"fi","bG":"se","#G":"si"};
var note = document.getElementById("musical_note");
while (true) {
    var judge = randomNum(0, 1);
    var flat_sharp = randomNum(0, 2);
    var select = randomNum(0, 17);
    if (flat_sharp == 1) {
        note.innerHTML = clef[judge] + note_flat[select] + note_ques[select];
    }
    else if (flat_sharp == 2) {
        note.innerHTML = clef[judge] + note_sharp[select] + note_ques[select];
    }
    else if (flat_sharp == 0) {
        note.innerHTML = clef[judge] + note_ques[select];
    }

    var user_ans = prompt("请输入音名或唱名：");
    if (flat_sharp == 1) {
        var right_ans = "b" + note_ans[(select - 5 * judge + 7) % 7];
    }
    else if (flat_sharp == 2) {
        var right_ans = "#" + note_ans[(select - 5 * judge + 7) % 7];
    }
    else if (flat_sharp == 0) {
        var right_ans = note_ans[(select - 5 * judge + 7) % 7];
    }

    if (user_ans == right_ans || user_ans == solfege_dic[right_ans]) {
        alert("正确！");
    }
    else {
        alert("错误！" + "答案：" + right_ans+"("+solfege_dic[right_ans]+")");
    };
}
