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

