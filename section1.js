const name = "yuki"; //初期値を設定できる。後から再代入できない
let Name; //undefinedで初期化される、再代入するならこっち。

// プリミティブ型は一度決めたら変更できない

// オブジェクトは、 値そのものではなく値への参照を経由して操作されるため、 参照型のデータとも言います。

// プリミティブ型の値や一部のオブジェクトは、 リテラルを使うことで簡単に定義できるようになっています。

const word = "こんにちは" // ここのこんにちはとかがそう。初期化不要。
console.log(word)


const obj = {}; // 中身が空のオブジェクトを作成

const obj = {
  "key": "value"
};
// ドット記法 Railsでよく使った
console.log(obj.key); // => "value"
// ブラケット記法
console.log(obj["key"]); // => "value"


// 演算子の対象のことをオペランドという

// 厳密等価演算子
console.log(1 === 1); // => true
console.log(1 === "1"); // => false


const objA = {};
const objB = {};
// 生成されたオブジェクトは異なる参照となる 厳密には異なる。
console.log(objA === objB); // => false

// 注意
// 文字列を数値に変換してから比較
console.log(1 == "1"); // => true
// "01"を数値にすると`1`となる
console.log(1 == "01"); // => true

// 便利な三項演算子
const str = "森森木森森";
if (str.includes("木")) {
  console.log("木を見つけました");
}

// not演算子
console.log(!false); // => true

// 暗黙的な型変換例

// 暗黙的な型変換が行われ、数値の加算として計算される
1 + true; // => 2
// 次のように暗黙的に変換されてから計算される
1 + 1; // => 2

// 異なる型である場合に暗黙的な型変換が行われる
console.log(1 == "1"); // => true
console.log(0 == false); // => true
console.log(10 == ["10"]); // => true

// 逆に === を使えばそれを回避することができる

"文字列と" + String(Symbol("シンボルの説明")); // => "文字列とSymbol(シンボルの説明)"

// Number型と互換性のない性質のデータをNumber型へ変換した結果はNaNとなる


// 関数と宣言

// 関数宣言
function 関数名(仮引数1, 仮引数2) {
  // 関数が呼び出されたときの処理
  // ...
  return 関数の返り値;
}
// 関数呼び出し
const 関数の結果 = 関数名(引数1, 引数2);
console.log(関数の結果); // => 関数の返り値

// Nuxtのアプリでもよく使った方法

// デフォルト値を与えることができる

function 関数名(仮引数1 = デフォルト値1, 仮引数2 = デフォルト値2) {

}

// 引数が多いとはみ出たものは無視される

// 便利なスプレッド構文
fn(...array);
// 次のように書いたのと同じ意味
fn(array[0], array[1], array[2]);

// こんな書き方もできる
// 第1引数のオブジェクトから`id`プロパティを変数`id`として定義する
function printUserId({
  id
}) {
  console.log(id); // => 42
}
const user = {
  id: 42
};
printUserId(user);

// 考え方として関数はオブジェクトの一種


// 再帰的な呼び出し

// factorialは関数の外から呼び出せる名前
// innerFactは関数の外から呼び出せない名前
const factorial = function innerFact(n) {
  if (n === 0) {
    return 1;
  }
  // innerFactを再帰的に呼び出している
  return n * innerFact(n - 1);
};
console.log(factorial(3)); // => 6


// 重要（アロー関数）
// Arrow Functionを使った関数定義
const 関数名 = () => {
  // 関数を呼び出したときの処理
  // ...
  return 関数の返す値;
};
const fnC = x => {
  /* 仮引数が1つのみのときは()を省略可能 */ };


// コールバック関数や高階関数など【重要な言葉の意味】
// 関数はファーストクラスであるため、 その場で作った匿名関数を関数の引数（ 値） として渡すことができます。
// 引数として渡される関数のことをコールバック関数と呼びます。 一方、 コールバック関数を引数として使う関数やメソッドのことを高階関数と呼びます。

function 高階関数(コールバック関数) {
  コールバック関数();
}


// 少し難しいがメソッドにすることもできる
const obj = {
  method: function () {
    return "this is method";
  }
};
console.log(obj.method()); // => "this is method"


// 式と文

// 関数式をread変数へ代入
const read = function () {};

// 文：if文とブロック文の組み合わせ
if (true) {
  console.log("文1");
  console.log("文2");
}
