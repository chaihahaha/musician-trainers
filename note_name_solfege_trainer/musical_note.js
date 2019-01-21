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

function setupQuestion() {
	judge = randomNum(0, 1);
	flat_sharp = randomNum(0, 2);
	rnd = randomNum(0, 17);
	var note = "";
	if (flat_sharp == 1) {
		note = clef[judge] + note_flat[rnd] + note_ques[rnd];
	}
	else if (flat_sharp == 2) {
		note = clef[judge] + note_sharp[rnd] + note_ques[rnd];
	}
	else if (flat_sharp == 0) {
		note = clef[judge] + note_ques[rnd];
	}
	$("#musical_note").html(note);
	$("#submit").text("提交答案");
	$("input").show();
	$("#answer").text("");
}

function judgeAnswer() {
	var user_ans = $("input").val();
	if (flat_sharp == 1) {
		var right_ans = note_ans[(rnd - 5 * judge + 7) % 7] + "b";
	}
	else if (flat_sharp == 2) {
		var right_ans = note_ans[(rnd - 5 * judge + 7) % 7] + "#";
	}
	else if (flat_sharp == 0) {
		var right_ans = note_ans[(rnd - 5 * judge + 7) % 7];
	}

	//user_ans = user_ans.toUpperCase();
	//right_ans = right_ans.toUpperCase();
	if (user_ans.toUpperCase() == right_ans.toUpperCase() || user_ans == solfege_dic[right_ans]) {
		$("input").val("");
		rightcount++;
		setupQuestion();
	}
	else {
		wrongcount++;
		$("#answer").html("错误！" + "你的答案：" + user_ans + " 正确答案：" + right_ans+"或"+solfege_dic[right_ans]);
		$("#submit").text("新问题");
		$("input").val("");
		$("input").hide();
	};
	
}

function questionAndAnswer() {
	if($("#submit").text() == "提交答案") {
		judgeAnswer();
		$("#rightness").text("正确率：" + (100 * rightcount / (rightcount + wrongcount)).toFixed(3) + "%");
	}
	else if($("#submit").text() == "新问题") {
		setupQuestion();
	}
}

var note_ans = new Array("G", "A", "B", "C", "D", "E", "F");
var note_ques = new Array("q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g");
var note_flat = new Array("X", "C", "V", "B", "N", "M", "&#60;", "&#62;", "?", "Ÿ", "∕", "¤", "‹", "›", "&#61441;", "&#61442;", "‡", "°");
var note_sharp = new Array("‚", "&#8212;", "±", "Œ", "„", "‰", "Â", "Ê", "Á", "Ë", "È", "Ø", "∏", "”", "’", "»", "Å", "Í");
var clef = new Array("`", "1");
var solfege_dic={"A":"la","B":"ti","C":"do","D":"re","E":"mi","F":"fa","G":"so","Ab":"le","A#":"li","Bb":"te","B#":"tai","Cb":"de","C#":"di","Db":"ra","D#":"ri","Eb":"me","E#":"mai","Fb":"fe","F#":"fi","Gb":"se","G#":"si"};
var judge = randomNum(0, 1);
var flat_sharp = randomNum(0, 2);
var rnd = randomNum(0, 17);
rightcount = 0;
wrongcount = 0
setupQuestion();
$(function() {
	$("#submit").on("click", questionAndAnswer);
	$("input").keydown(function (event) {
		if(event.keyCode == 13) questionAndAnswer();
	});
});
