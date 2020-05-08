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


// 条件分岐
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


// ループと反復処理
// while文で書かないほうがいいことも多い、安直に使わないこと

// 最初に必ず実行文を処理して欲しい場合
do {
  実行する文;
} while (条件式);


// 初期化、条件、条件まで行う処理
for (let i = 0; i < 10; i++) {
  total += i + 1; // 1から10の値をtotalに加算している
}
console.log(total); // => 55

const array = [1, 2, 3];
array.forEach(currentValue => {
  // 配列の要素ごとに呼び出される処理
  currentValue += 1
});

console.log(currentValue)
// ここでいうところの、currentValueがrubyのeachでいうブロック変数みたいなもの

// 引数の`num`が偶数ならtrueを返す
function isEven(num) {
  return num % 2 === 0;
}
// 引数の`numbers`に偶数が含まれているならtrueを返す
function isEvenIncluded(numbers) {
  let isEvenIncluded = false;
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (isEven(num)) {
      isEvenIncluded = true;
      break;
    }
  }
  return isEvenIncluded;
}
const array = [1, 5, 10, 15, 20];
console.log(isEvenIncluded(array)); // => true
console.log(isEven(2)) // true


// 見つけた瞬間処理が終わる
function isEven(num) {
  return num % 2 === 0;
}
const numbers = [1, 5, 10, 15, 20];
console.log(numbers.some(isEven)); // => true



// continueを書くことで、次の処理に進むことができる

// `number`が偶数ならtrueを返す
function isEven(num) {
  return num % 2 === 0;
}
// `numbers`に含まれている偶数だけを取り出す
function filterEven(numbers) {
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    // 偶数ではないなら、次のループへ
    if (!isEven(num)) {
      continue;
    }
    // 偶数を`results`に追加
    results.push(num);
  }
  return results;
}
const array = [1, 5, 10, 15, 20];
console.log(filterEven(array)); // => [10, 20]


// 【重要】trueじゃない要素を省く場合の処理
function isEven(num) {
  return num % 2 === 0;
}

const array = [1, 5, 10, 15, 20];
console.log(array.filter(isEven)); // => [10, 20]

// 注意
// 先ほどのfor文やforEachメソッドで数値の合計を返すsum関数の実装は、
// constではなくletを利用していました。 なぜなら、 constは再代入できない変数を宣言するキーワードであるためです。


// オブジェクトはキーと値のセット。

const obj = {
  name: "Yuki"
  // key+値= プロパティ
}


// 省略記法
const name = "名前";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj = {
  name
};
console.log(obj); // => { name: "名前" }

// 注意
// プロパティ名が数字から始まる識別子は利用できない
// obj .123; // NG
// プロパティ名にハイフンを含む識別子は利用できない
// obj.my - prop; // NG

const languages = {
  ja: "日本語",
  en: "英語"
};
const {
  ja,
  en
} = languages;
console.log(ja); // => "日本語"
console.log(en); // => "英語"

// 何をしているか：本来jaというふうにうつだけでは何も出ないが、constで分割代入しつつ定義することで
// languageオブジェクトのプロパティが対応して代入される

// プロパティの削除について
const obj = {
  key1: "value1",
  key2: "value2"
};
// key1プロパティを削除
delete obj.key1;
// key1プロパティが削除されている
console.log(obj); // => { "key2": "value2" }


// ネストしてundefinedにプロパティをつけた時に初めてエラーになる

const obj = {};
obj.hasOwnProperty("プロパティ名"); // true or false

console.log(obj.toString()); // => "[object Object]"

// 列挙した値を配列として返す
const obj = {
  "one": 1,
  "two": 2,
  "three": 3
};
// `Object.keys`はキーの列挙した配列を返す
console.log(Object.keys(obj)); // => ["one", "two", "three"]
// `Object.values`は値を列挙した配列を返す
console.log(Object.values(obj)); // => [1, 2, 3]
// `Object.entries`は[キー, 値]の配列を返す
console.log(Object.entries(obj)); // => [["one", 1], ["two", 2], ["three", 3]]

// オブジェクトの合成
const objectA = {
  a: "a"
};
const objectB = {
  b: "b"
};
const merged = Object.assign({}, objectA, objectB);
console.log(merged); // => { a: "a", b: "b" }

// ※プロパティが重複した場合
// `version`のプロパティ名が被っている
const objectA = {
  version: "a"
};
const objectB = {
  version: "b"
};
const merged = Object.assign({}, objectA, objectB);
// 後ろにある`objectB`のプロパティで上書きされる
console.log(merged); // => { version: "b" }

// 便利なスプレッド構文も使える

// `version`のプロパティ名が被っている
const objectA = {
  version: "a"
};
const objectB = {
  version: "b"
};
const merged = {
  ...objectA,
  ...objectB,
  other: "other"
};
// 後ろにある`objectB`のプロパティで上書きされる
console.log(merged); // => { version: "b", other: "other" }

// オブジェクトの複製に関して
// 引数の`obj`を浅く複製したオブジェクトを返す
const shallowClone = (obj) => {
  return Object.assign({}, obj);
};
const obj = {
  a: "a"
};
const cloneObj = shallowClone(obj);
console.log(cloneObj); // => { a: "a" }
// オブジェクトを複製しているので、異なるオブジェクトとなる
console.log(obj === cloneObj); // => false


// プロトタイプメソッド（難しい）

const obj = {
  "key": "value"
};
// `obj`インスタンスは`Object.prototype`に定義されたものを継承する
// `obj.toString`は継承した`Object.prototype.toString`を参照している
console.log(obj.toString === Object.prototype.toString); // => true
// インスタンスからプロトタイプメソッドを呼び出せる
console.log(obj.toString()); // => "[object Object]"

 // 事前に定義されているメソッドみたいな感じだと思われる
 // オブジェクトのインスタンスにtoStringメソッドを定義
 const customObject = {
   toString() {
     return "custom value";
   }
 };
console.log(customObject.toString()); // => "custom value"
 
// ただし
const obj = {};
// `obj`というオブジェクト自体に`toString`メソッドが定義されているわけではない
console.log(obj.hasOwnProperty("toString")); // => false
