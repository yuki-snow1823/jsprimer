// 【式と文】〜【条件分岐】

// JSは式と文でできている
// 式の特徴として、式を評価すると結果の値を得ることができます。 この結果の値を評価値と呼びます。


// 関数式をread変数へ代入
const read = function() {};
// 文：if文とブロック文の組み合わせ
if (true) {
  console.log("#152", "文1");
  console.log("文2");
}

// ブロック文ので区切れば何回でもconst使える
// ブロック文の終わりにはコロンいらない


// 【条件分岐】
if (true) {
  console.log("この行は実行されます");
}

// rubyはelsif、JSはelse if
function getECMAScriptName(version) {
  switch (version) {
    case "ES5":
      return "ECMAScript 5";
    case "ES6":
      return "ECMAScript 2015";
    case "ES7":
      return "ECMAScript 2016";
    default:
      return "しらないバージョンです";
  }
}
// 関数を実行して`return`された値を得る
getECMAScriptName("ES6"); // => "ECMAScript 2015"

// break文の多用があるなら、書き換えるべき方法を考える
