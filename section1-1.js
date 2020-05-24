// 【変数と宣言】〜【暗黙的な方変換】


//初期値を設定できる。後から再代入できない
const name = "yuki";
//undefinedで初期化される、再代入するならこっち。
let Name;

// プリミティブ型は一度決めたら変更できない。
// オブジェクトは、 値そのものではなく値への参照を経由して操作されるため、 参照型のデータとも言う。
// プリミティブ型の値や一部のオブジェクトは、 リテラルを使うことで簡単に定義できるようになっています。

const word = "こんにちは"; // ここの、こんにちはとかがそう。初期化不要。
console.log(word);

// 中身が空のオブジェクトを作成している
// const obj = {};

const obj = {
  key: "value",
};
// ドット記法 Railsでよく使った
console.log(obj.key); // => "value"
// ブラケット記法
console.log(obj["key"]); // => "value"

// 演算子の対象のことをオペランドという
// 厳密等価演算子：データ型の一致も見る
console.log(1 === 1); // => true
console.log(1 === "1"); // => false

// ※生成されたオブジェクトは異なる参照となる 厳密には異なる。
const objA = {};
const objB = {};
console.log(objA === objB); // => false

// 逆に、文字列を数値に変換してから比較
console.log(1 == "1"); // => true
// "01"を数値にすると`1`となる
console.log(1 == "01"); // => true

// 便利な三項演算子
const str = "森森木森森";
if (str.includes("木")) {
  console.log("#42", "木を見つけました");
}

// not演算子：!
console.log(!false); // => true

// 暗黙的な型変換
// 暗黙的な型変換が行われ、数値の加算として計算される
1 + true; // => 2
// 次のように暗黙的に変換されてから計算される
1 + 1;

// 暗黙的な型変換は、二つのオブジェクトのデータが異なる型である場合に行われる
console.log(1 == "1"); // => true
console.log(0 == false); // => true
console.log(10 == ["10"]); // => true
// ※ 逆に === を使えばそれを回避することができる

// さらに、クラスを揃えれば違うデータ型でも合成できる
"文字列と" + String(Symbol("シンボルの説明")); // => "文字列とSymbol(シンボルの説明)"
// Number型と互換性のない性質のデータをNumber型へ変換した結果はNaNとなる
