// 【文字列】
const multiline = `1行目
2行目
3行目`;
// \n は改行を意味する
console.log(multiline); // => "1行目\n2行目\n3行目"

// 改行コードは入らない

// 変数展開
const name2 = "JavaScript";
console.log(`Hello ${name2}!`); // => "Hello JavaScript!"

const str2 = "文字列";
// 配列と同じようにインデックスでアクセスできる
console.log(str2[0]); // => "文"
console.log(str2[1]); // => "字"
console.log(str2[2]); // => "列"
// この文字からビット列へ変換することを符号化（ エンコード） と呼びます

// エスケープはコードじゃなくて文字として認識しろってこと

// splitやjoinはruby同様に使える

// Unicodeについて
// Jsはutf-16

// unicode:文字のidのようなもの
console.log("あ".codePointAt(0)); // => 12354

// サロゲートペアでは、2つCode Unitの組み合わせ（合計4バイト）で
// 1つの文字（1つのCode Point）を表現します。UTF - 16では、次の範囲をサロゲートペアに利用する領域としています。

console.log("\uD867\uDE3D"); // => "𩸽"

// ラッパーオブジェクト

// ラップ：別の形で呼び出すこと

// String#toUpperCaseを呼び出している
"string".toUpperCase(); // => "STRING"

// stringという文字列はStringオブジェクトのインスタンスではないため、メソッドが使えるのは不思議

/*
プリミティブ型のデータのうち、 
真偽値（ Boolean）、 数値（ Number）、 文字列（ String）、 シンボル（ Symbol） 
にはそれぞれ対応するオブジェクトが存在します。 
たとえば、 文字列に対応するオブジェクトとして、 Stringオブジェクトがあります。
*/

// 正規表現を使って、splitする方法
// 文字間に1つ以上のスペースがある
const str = "a     b    c      d";
// 1つ以上のスペースにマッチして分解する
const strings = str.split(/\s+/);
console.log(strings); // => ["a", "b", "c", "d"]

// 【検索について】
// "にわ"の先頭のインデックスを返すため 0 となる
console.log(str.indexOf("にわ")); // => 0
// lastIndexOfは末尾から検索しインデックスを返す- "にわにはにわ**にわ**とりがいる"
console.log(str.lastIndexOf("にわ")); // => 6


const str = "ABCDE";
console.log(str.slice(1)); // => "BCDE"
console.log(str.slice(1, 5)); // => "BCDE"
// マイナスを指定すると後ろからの位置となる
console.log(str.slice(-1)); // => "E"

// "input value"の値をラップしたStringのインスタンスを生成
const str10 = new String("input value");
// StringのインスタンスメソッドであるtoUpperCaseを呼び出す
str10.toUpperCase(); // => "INPUT VALUE"

// 自動的にラッパーオブジェクトが呼ばれるので、全てがオブジェクトであると言われるゆえん



// 次のコードでは、数字が3つ連続しているかを検索し、該当した箇所のインデックスを返しています。 \dは、1文字の数字（0から9）にマッチする特殊文字です。
const str = "ABC123EFG";
const searchPattern = /\d{3}/;
console.log(str.search(searchPattern)); // => 3

// 置換もできる
// 文字列.replace("検索文字列", "置換文字列");

// 検索対象となる文字列
const str = "にわにはにわにわとりがいる";
// 文字列を指定した場合は、最初に一致したものだけが置換される
console.log(str.replace("にわ", "niwa")); // => "niwaにはにわにわとりがいる"
// `g`フラグなし正規表現の場合は、最初に一致したものだけが置換される
console.log(str.replace(/にわ/, "niwa")); // => "niwaにはにわにわとりがいる"
// `g`フラグあり正規表現の場合は、繰り返し置換を行う
console.log(str.replace(/にわ/g, "niwa")); // => "niwaにはniwaniwaとりがいる"

// 【複雑な置換】
function toDateJa(dateString) {
    // パターンにマッチしたときのみ、コールバック関数で置換処理が行われる
    return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/, (all, year, month, day) => {
        // `all`には、マッチした文字列全体が入っているが今回は利用しない
        // `all`が次の返す値で置換されるイメージ
        return `${year}年${month}月${day}日`;
    });
}
// マッチしない文字列の場合は、そのままの文字列が返る
console.log(toDateJa("本日ハ晴天ナリ")); // => "本日ハ晴天ナリ"
// マッチした場合は置換した結果を返す
console.log(toDateJa("今日は2017-03-01です")); // => "今日は2017年03月01日です"
