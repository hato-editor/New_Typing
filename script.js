"use strict";
var _a;
const alphabets = {
    // あ行
    あ: ["a"],
    い: ["i"],
    う: ["u"],
    え: ["e"],
    お: ["o"],
    // か行
    か: ["ka"],
    き: ["ki"],
    く: ["ku"],
    け: ["ke"],
    こ: ["ko"],
    // さ行
    さ: ["sa"],
    し: ["shi", "si"],
    す: ["su"],
    せ: ["se"],
    そ: ["so"],
    // た行
    た: ["ta"],
    ち: ["chi", "ti"],
    つ: ["tsu", "tu"],
    て: ["te"],
    と: ["to"],
    // な行
    な: ["na"],
    に: ["ni"],
    ぬ: ["nu"],
    ね: ["ne"],
    の: ["no"],
    // は行
    は: ["ha"],
    ひ: ["hi"],
    ふ: ["fu", "hu"],
    へ: ["he"],
    ほ: ["ho"],
    // ま行
    ま: ["ma"],
    み: ["mi"],
    む: ["mu"],
    め: ["me"],
    も: ["mo"],
    // や行
    や: ["ya"],
    ゆ: ["yu"],
    よ: ["yo"],
    // ら行
    ら: ["ra"],
    り: ["ri"],
    る: ["ru"],
    れ: ["re"],
    ろ: ["ro"],
    // わ行
    わ: ["wa"],
    を: ["wo"],
    ん: ["nn", "xn"],
    // が行
    が: ["ga"],
    ぎ: ["gi"],
    ぐ: ["gu"],
    げ: ["ge"],
    ご: ["go"],
    // ざ行
    ざ: ["za"],
    じ: ["ji", "zi"],
    ず: ["zu"],
    ぜ: ["ze"],
    ぞ: ["zo"],
    // だ行
    だ: ["da"],
    ぢ: ["ji", "di"],
    づ: ["zu", "du"],
    で: ["de"],
    ど: ["do"],
    // ば行
    ば: ["ba"],
    び: ["bi"],
    ぶ: ["bu"],
    べ: ["be"],
    ぼ: ["bo"],
    // ぱ行
    ぱ: ["pa"],
    ぴ: ["pi"],
    ぷ: ["pu"],
    ぺ: ["pe"],
    ぽ: ["po"],
    // 拗音
    きゃ: ["kya"],
    きゅ: ["kyu"],
    きょ: ["kyo"],
    しゃ: ["sha", "sya"],
    しゅ: ["shu", "syu"],
    しょ: ["sho", "syo"],
    ちゃ: ["cha", "tya"],
    ちゅ: ["chu", "tyu"],
    ちょ: ["cho", "tyo"],
    にゃ: ["nya"],
    にゅ: ["nyu"],
    にょ: ["nyo"],
    ひゃ: ["hya"],
    ひゅ: ["hyu"],
    ひょ: ["hyo"],
    みゃ: ["mya"],
    みゅ: ["myu"],
    みょ: ["myo"],
    りゃ: ["rya"],
    りゅ: ["ryu"],
    りょ: ["ryo"],
    ぎゃ: ["gya"],
    ぎゅ: ["gyu"],
    ぎょ: ["gyo"],
    じゃ: ["ja", "zya", "jya"],
    じゅ: ["ju", "zyu", "jyu"],
    じょ: ["jo", "zyo", "jyo"],
    びゃ: ["bya"],
    びゅ: ["byu"],
    びょ: ["byo"],
    ぴゃ: ["pya"],
    ぴゅ: ["pyu"],
    ぴょ: ["pyo"],
    // 促音（例：っか → kka）
    っ: ["xtsu", "ltsu"],
    っか: ["kka"],
    っき: ["kki"],
    っく: ["kku"],
    っけ: ["kke"],
    っこ: ["kko"],
    っさ: ["ssa"],
    っし: ["sshi", "ssi"],
    っす: ["ssu"],
    っせ: ["sse"],
    っそ: ["sso"],
    った: ["tta"],
    っち: ["cchi", "tti"],
    っつ: ["ttsu", "ttu"],
    って: ["tte"],
    っと: ["tto"],
    っきゃ: ["kkya"],
    っきゅ: ["kkyu"],
    っきょ: ["kkyo"],
    っしゃ: ["ssha"],
    っしゅ: ["sshu"],
    っしょ: ["ssho"],
    っちゃ: ["ccha", "ttya"],
    っちゅ: ["cchu", "ttyu"],
    っちょ: ["ccho", "ttyo"],
    っは: ["hha"],
    っひ: ["hhi"],
    っふ: ["hhu", "ffu"],
    っへ: ["hhe"],
    っほ: ["hho"],
    っま: ["mma"],
    っみ: ["mmi"],
    っむ: ["mmu"],
    っめ: ["mme"],
    っも: ["mmo"],
    っや: ["yya"],
    っゆ: ["yyu"],
    っよ: ["yyo"],
    っら: ["rra"],
    っり: ["rri"],
    っる: ["rru"],
    っれ: ["rre"],
    っろ: ["rro"],
    っが: ["gga"],
    っぎ: ["ggi"],
    っぐ: ["ggu"],
    っげ: ["gge"],
    っご: ["ggo"],
    っざ: ["zza"],
    っじ: ["zzi", "jji"],
    っず: ["zzu"],
    っぜ: ["zze"],
    っぞ: ["zzo"],
    っだ: ["dda"],
    っぢ: ["ddi"],
    っづ: ["ddu"],
    っで: ["dde"],
    っど: ["ddo"],
    っば: ["bba"],
    っび: ["bbi"],
    っぶ: ["bbu"],
    っべ: ["bbe"],
    っぼ: ["bbo"],
    っぱ: ["ppa"],
    っぴ: ["ppi"],
    っぷ: ["ppu"],
    っぺ: ["ppe"],
    っぽ: ["ppo"]
};
const sentences = [
    // 諺
    "猿も木から落ちる",
    "石の上にも三年",
    "雨降って地固まる",
    "二兎を追う者は一兎をも得ず",
    "七転び八起き",
    "花より団子",
    "笑う門には福来る",
    "覆水盆に返らず",
    "灯台下暗し",
    "善は急げ",
    "聞くは一時の恥",
    // 慣用句
    "目から鱗",
    "口は災いの元",
    "手を抜く",
    "腹を決める",
    "頭が上がらない",
    "足を引っ張る",
    "腰を据える",
    "肩を並べる",
    // 熟語
    "努力",
    "友情",
    "挑戦",
    "勝利",
    "経験",
    "知識",
    "後悔",
    "行動",
    "計画",
    "成果"
];
const sentencesKana = [
    // 諺
    "さるもきからおちる",
    "いしのうえにもさんねん",
    "あめふってじかたまる",
    "にとをおうものはいっとをもえず",
    "ななころびやおき",
    "はなよりだんご",
    "わらうかどにはふくきたる",
    "ふくすいぼんにかえらず",
    "とうだいもとくらし",
    "ぜんはいそげ",
    "きくはいっとのはじ",
    // 慣用句
    "めからうろこ",
    "くちはわざわいのもと",
    "てをぬく",
    "はらをきめる",
    "あたまがあがらない",
    "あしをひっぱる",
    "こしをすえる",
    "かたをならべる",
    // 熟語
    "どりょく",
    "ゆうじょう",
    "ちょうせん",
    "しょうり",
    "けいけん",
    "ちしき",
    "こうかい",
    "こうどう",
    "けいかく",
    "せいか"
];
let ran = Math.floor(Math.random() * sentences.length);
let displaying_sentence = sentences[ran];
let roma_ = document.querySelector("#roma_");
let displaying_sentence_kana = sentencesKana[ran];
const display = document.querySelector("#display");
const kanaDisplay = document.querySelector("#kana");
const alphabetDisplay = document.querySelector("#roma");
const kanaRegex = /(っきゃ|っきゅ|っきょ|っしゃ|っしゅ|っしょ|っちゃ|っちゅ|っちょ|っひゃ|っひゅ|っひょ|っみゃ|っみゅ|っみょ|っりゃ|っりゅ|っりょ|っか|っき|っく|っけ|っこ|っさ|っし|っす|っせ|っそ|った|っち|っつ|って|っと|っは|っひ|っふ|っへ|っほ|っま|っみ|っむ|っめ|っも|っや|っゆ|っよ|っら|っり|っる|っれ|っろ|っわ|っを|っが|っぎ|っぐ|っげ|っご|っざ|っじ|っず|っぜ|っぞ|っだ|っぢ|っづ|っで|っど|っば|っび|っぶ|っべ|っぼ|っぱ|っぴ|っぷ|っぺ|っぽ|きゃ|きゅ|きょ|しゃ|しゅ|しょ|ちゃ|ちゅ|ちょ|にゃ|にゅ|にょ|ひゃ|ひゅ|ひょ|みゃ|みゅ|みょ|りゃ|りゅ|りょ|ぎゃ|ぎゅ|ぎょ|じゃ|じゅ|じょ|ぢゃ|ぢゅ|ぢょ|びゃ|びゅ|びょ|ぴゃ|ぴゅ|ぴょ|が|ぎ|ぐ|げ|ご|ざ|じ|ず|ぜ|ぞ|だ|ぢ|づ|で|ど|ば|び|ぶ|べ|ぼ|ぱ|ぴ|ぷ|ぺ|ぽ|あ|い|う|え|お|か|き|く|け|こ|さ|し|す|せ|そ|た|ち|つ|て|と|な|に|ぬ|ね|の|は|ひ|ふ|へ|ほ|ま|み|む|め|も|や|ゆ|よ|ら|り|る|れ|ろ|わ|を|ん|)/g;
let kanaChars = (_a = sentencesKana[ran].match(kanaRegex)) !== null && _a !== void 0 ? _a : [];
let kanaChar = kanaChars[0];
let b = "";
let started = false;
let incollect = 0;
let time = 0;
let type = 0;
let quiz = 0;
let dubug = 0;
let zumi = 0;
function playSound() {
  type_audio.currentTime = 0;
  type_audio.play();
}
const type_audio = new Audio("audio.wav")
document.addEventListener("keydown", function (e) {
    var _a;
    const romaList = alphabets[kanaChar];
    if (!romaList)
        return;
    if (e.key == " ") {
        if (started === false) {
            e.preventDefault();
            display.textContent = sentences[ran];
            kanaDisplay.textContent = sentencesKana[ran];
            alphabetDisplay.textContent = "";
            for (let i = 0; i <= kanaChars.length - 2; i++) {
                alphabetDisplay.textContent += alphabets[kanaChars[i]][0];
            }
            started = true;
            const timeSet = setInterval(function () {
                time++;
            }, 1000);
        }
        else {
            e.preventDefault();
        }
    }
    else {
        if (romaList.some((r) => r.startsWith(b + e.key))) {
            console.log("collect");
            b += e.key;
            if(alphabets[kanaChar].length > 1){
                if(zumi == 1 && e.key !== alphabetDisplay.textContent[0]){
                alphabetDisplay.textContent = alphabetDisplay.textContent.slice(Math.abs(alphabets[kanaChar][0].length - alphabets[kanaChar][1].length) + 1, alphabetDisplay.textContent.length);
                zumi++;
                } else {
                    alphabetDisplay.textContent = alphabetDisplay.textContent.slice(1, alphabetDisplay.textContent.length);
                    zumi++;
                }
            } else{
                alphabetDisplay.textContent = alphabetDisplay.textContent.slice(1, alphabetDisplay.textContent.length);
            }
            roma_.textContent += e.key;
            type++;
            playSound();
            console.log(type);
            if (romaList.some((r) => r === b)) {
                zumi = 0;
                kanaChars.shift();
                kanaChar = kanaChars[0];
                b = "";
                if (kanaChars.length <= 1) {
                    if (quiz == 20) {
                        roma_.textContent = "";
                        const speed = type / time;
                        const missRate = incollect / type;
                        if (type === 0 || time === 0) {
                            score = 0;
                        }
                        const score = Math.floor(speed * (1 - missRate) * 100);
                        display.textContent = score;
                        kanaDisplay.textContent = Math.floor(type / time * 100) / 100 + "タイプ/秒";
                        alphabetDisplay.textContent = "ミスタイプ数：" + incollect;
                    }
                    else {
                        quiz++;
                        ran = Math.floor(Math.random() * sentences.length);
                        kanaChars = (_a = sentencesKana[ran].match(kanaRegex)) !== null && _a !== void 0 ? _a : [];
                        kanaChar = kanaChars[0];
                        displaying_sentence = sentences[ran];
                        displaying_sentence_kana = sentencesKana[ran];
                        display.textContent = displaying_sentence;
                        kanaDisplay.textContent = displaying_sentence_kana;
                        alphabetDisplay.textContent = "";
                        roma_.textContent = "";
                        for (let i = 0; i <= kanaChars.length - 2; i++) {
                            alphabetDisplay.textContent += alphabets[kanaChars[i]][0];
                        }
                    }
                }
            }
        }
        else if (kanaChar === "ん" && kanaChars.length > 2) {
            if (b === "n") {
                roma_.textContent += e.key;
                alphabetDisplay.textContent = alphabetDisplay.textContent.slice(1, alphabetDisplay.textContent.length);
                type++;
                playSound();
                kanaChars.shift();
                kanaChar = kanaChars[0];
                b = e.key;
            }
        }
        else {
            const container = document.querySelector(".container");
            console.log("incollect...");
            container.style.backgroundColor = "red";
            setTimeout(() => container.style.backgroundColor =
                "white", 100);
            incollect++;
        }
    }
});