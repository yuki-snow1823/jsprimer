//初期値を設定できる。後から再代入できない
const name = "yuki"; 
//undefinedで初期化される、再代入するならこっち。
let Name; 

// プリミティブ型は一度決めたら変更できない。
// オブジェクトは、 値そのものではなく値への参照を経由して操作されるため、 参照型のデータとも言う。
// プリミティブ型の値や一部のオブジェクトは、 リテラルを使うことで簡単に定義できるようになっています。

const word = "こんにちは" // ここの、こんにちはとかがそう。初期化不要。
console.log(word)

// 中身が空のオブジェクトを作成している
// const obj = {};

const obj = {
  "key": "value"
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
  console.log("#42","木を見つけました");
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


// 関数と宣言
// 関数宣言
// function 関数名(仮引数1, 仮引数2) {
  // 関数が呼び出されたときの処理
  // ...
  // return 関数の返り値;
// }
// 関数呼び出し
// const 関数の結果 = 関数名(引数1, 引数2);
// console.log(関数の結果); // => 関数の返り値

// Nuxtのアプリでもよく使った方法
// デフォルト値を与えることができる
defaultOne = "デフォルト値"
defaultVal = "デフォルト値２"
function 関数名(num = defaultOne, val = defaultVal) {
  return num,val
}

// 引数が多いとはみ出たものは無視される
// 便利なスプレッド構文
// fn(...array);
// 次のように書いたのと同じ意味
// fn(array[0], array[1], array[2]);

// こんな書き方もできる
// 第1引数のオブジェクトから`id`プロパティを変数`id`として定義する
function printUserId({
  id
}) {
  console.log("#95",id); // => 42
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
// const 関数名 = () => {
  // 関数を呼び出したときの処理
  // ...
  // return 関数の返す値;
// };
// // const fnC = x => {
//   /* 仮引数が1つのみのときは()を省略可能 */ };


// コールバック関数や高階関数など【重要な言葉の意味】
// 関数はファーストクラスであるため、 その場で作った匿名関数を関数の引数（値） として渡すことができます。
// 引数として渡される関数のことをコールバック関数と呼びます。 
// 一方、 コールバック関数を引数として使う関数やメソッドのことを高階関数と呼びます。

// function 高階関数(コールバック関数) {
//   コールバック関数();
// }


// 少し難しいがメソッドにすることもできる
// const obj = {
//   method: function () {
//     return "this is method";
//   }
// };
// console.log(obj.method());
// => "this is method" オブジェクトのメソッド


// 式と文
// 関数式をread変数へ代入
const read = function () {};
// 文：if文とブロック文の組み合わせ
if (true) {
  console.log("#152","文1");
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
// do {
//   実行する文;
// } while (条件式);


// 初期化、条件、条件まで行う処理
total = 0
for (let i = 0; i < 10; i++) {
  total += i + 1; // 1から10の値をtotalに加算している
}
console.log(total); // => 55

currentValue = 0
const array = [1, 2, 3];
array.forEach(currentValue => {
  // 配列の要素ごとに呼び出される処理
  currentValue += 1
});

console.log(currentValue)
// ここでいうところの、currentValueがrubyのeachでいうブロック変数みたいなもの

num = 6
// 引数の`num`が偶数ならtrueを返す
function isEven(num) {
  return num % 2 === 0;
}

// rubyのメソッドという感じ
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

const array2 = [1, 5, 10, 15, 20];
console.log(isEvenIncluded(array2)); // => true
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

// 【重要】
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
    // rubyみたいにpushが使える
    results.push(num);
  }
  return results;
}
const array3 = [1, 5, 10, 15, 20];
console.log(filterEven(array3)); // => [10, 20]


// 【重要】trueじゃない要素を省く場合の処理
function isEven(num) {
  return num % 2 === 0;
}
const array4 = [1, 5, 10, 15, 20];
console.log(array4.filter(isEven)); // => [10, 20]

// 注意
// 先ほどのfor文やforEachメソッドで数値の合計を返すsum関数の実装は、
// constではなくletを利用していました。 
// なぜなら、constは再代入できない変数を宣言するキーワードであるためです。：これはよくわからない。
// オブジェクトはキーと値のセット。
// const obj = {
//   name: "Yuki"
//   // key+値= プロパティ
// }


// 省略記法
// const name = "名前";
// // `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
// const obj = {
//   name
// };
// console.log(obj); // => { name: "名前" }

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
const obj2 = {
  key1: "value1",
  key2: "value2"
};
// key1プロパティを削除
delete obj2.key1;
// key1プロパティが削除されている
console.log(obj2); // => { "key2": "value2" }

// ネストしてundefinedにプロパティをつけた時に初めてエラーになる
const obj3 = {};
obj3.hasOwnProperty("プロパティ名"); // true or false
console.log(obj3.toString()); // => "[object Object]"

// 列挙した値を配列として返す
const obj4 = {
  "one": 1,
  "two": 2,
  "three": 3
};
// `Object.keys`はキーの列挙した配列を返す
console.log(Object.keys(obj4)); // => ["one", "two", "three"]
// `Object.values`は値を列挙した配列を返す
console.log(Object.values(obj4)); // => [1, 2, 3]
// `Object.entries`は[キー, 値]の配列を返す
console.log(Object.entries(obj4)); // => [["one", 1], ["two", 2], ["three", 3]]

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
const objectC = {
  version: "a"
};
const objectD = {
  version: "b"
};
// const merged = Object.assign({}, objectC, objectD);
// 後ろにある`objectB`のプロパティで上書きされる
// console.log(merged); // => { version: "b" }

// 便利なスプレッド構文も使える
// `version`のプロパティ名が被っている
const objectE = {
  version: "a"
};
const objectF = {
  version: "b"
};
const merged2 = {
  ...objectE,
  ...objectF,
  other: "other"
};
// 後ろにある`objectB`のプロパティで上書きされる
console.log(merged2); // => { version: "b", other: "other" }

// オブジェクトの複製に関して
// 引数の`obj`を浅く複製したオブジェクトを返す
const shallowClone = (obj) => {
  return Object.assign({}, obj);
};
const obj7 = {
  a: "a"
};
const cloneObj = shallowClone(obj7);
console.log(cloneObj); // => { a: "a" }
// オブジェクトを複製しているので、異なるオブジェクトとなる
console.log(obj7 === cloneObj); // => false


// プロトタイプメソッド

// また、 JavaScriptにはtoString以外にも、 オブジェクトに自動的に実装されるメソッドがあります。
// これらのオブジェクトに組み込まれたメソッドをビルトインメソッドと呼びます。

// このようにObject.prototypeに定義されているtoStringメソッドなどは、
// インスタンス作成時に自動的に継承されるため、 Objectのインスタンスから呼び出せます。

// つまり、インスタンスからプロトタイプメソッドを呼び出せるということ。
// インスタンスとプロトタイプオブジェクトで同じ名前のメソッドがある場合には、 インスタンスのメソッドが優先されます。
// →再定義できる


// 配列
const array8 = ["one", "two", "three"];
// `array`にはインデックスが100の要素は定義されていない
console.log(array8[100]); // => undefined

// isArray 配列かどうかを判定できる

// 分割代入する方法
const array9 = ["one", "two", "three"];
const [first, second, third] = array9;
console.log(first); // => "one"
console.log(second); // => "two"
console.log(third); // => "three"

// 検索に使えるメソッド
// arrayIndex("文字")：文字のインデックスが何番か出力する
const array11 = ["Java", "JavaScript", "Ruby"];
const indexOfJS = array11.indexOf("JavaScript");
console.log(indexOfJS); // => 1
console.log(array11[indexOfJS]); // => "JavaScript"
// "JS" という要素はないため `-1` が返される
console.log(array11.indexOf("JS")); // => -1

// 【オブジェクトは持っている要素が同じでも違うものと考えるから、検索に引っかからない例】
const obj10 = {
  key: "value"
};
const array12 = ["A", "B", obj10];
console.log(array12.indexOf({
  key: "value"
})); // => -1
// リテラルは新しいオブジェクトを作るため、異なるオブジェクトだと判定される
console.log(obj10 === {
  key: "value"
}); // => false
// 等価のオブジェクトを検索してインデックスを返す
console.log(array12.indexOf(obj10)); // => 2

// Array.flat(下げる数)：配列の次元を下げる

// const array13 = [1, 2, 3];
// console.log(array13.length); // => 3
// // `const`で宣言された変数には再代入できない
// array13 = []; // TypeError: invalid assignment to const `array' が発生


// 文字列

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

// "input value"の値をラップしたStringのインスタンスを生成
const str10 = new String("input value");
// StringのインスタンスメソッドであるtoUpperCaseを呼び出す
str10.toUpperCase(); // => "INPUT VALUE"


// 自動的にラッパーオブジェクトが呼ばれるので、全てがオブジェクトであると言われるゆえん


// スコープ

function fn(arg) {
  // fn関数のスコープ内から仮引数`arg`は参照できる
  console.log(arg); // => 1
}
fn(1);
// fn関数のスコープ外から`arg`は参照できないためエラー
console.log(arg); // => ReferenceError: arg is not defined

// 仮引数もスコープ外からは参照できない

// ネストはOK
{
  // OUTERブロックスコープ
  const x2 = "x"; {
    // INNERブロックスコープからOUTERブロックスコープの変数を参照できる
    console.log(x2); // => "x"
  }
}

// 参照する場所に関して
{
  // OUTERブロックスコープ
  const x3 = "outer"; {
    // INNERブロックスコープ
    const x3 = "inner";
    // 現在のスコープ(INNERブロックスコープ)にある`x`を参照する
    console.log(x3); // => "inner"
  }
  // 現在のスコープ(OUTERブロックスコープ)にある`x`を参照する
  console.log(x3); // => "outer"
}

/*
変数の隠蔽

ビルトインオブジェクトと同じ名前の変数を定義したことにより、
ビルトインオブジェクトを参照できなくなります。
このように内側のスコープで外側のスコープと同じ名前の変数を定義することで、 外側の変数が参照できなくなることを変数の隠蔽（ shadowing） と呼びます。

この問題を回避する方法としては、 むやみにグローバルスコープへ変数を定義しないことです。 

グローバルスコープでビルトインオブジェクトと名前が衝突するとすべてのスコープへ影響を与えますが、
関数のスコープ内では影響範囲がその関数の中だけにとどまります。
*/


// var宣言より前に参照してもエラーにならない
console.log(x4); // => undefined
var x4 = "varのx";

// こういうことが起こる
// `hello`変数は巻き上げられ、暗黙的に`undefined`となる
hello2(); // => TypeError: hello is not a function
// `hello`変数へ関数を代入している
var hello2 = function () {
  return "Hello";
};

// JavaScriptのスコープには、 どの識別子がどの変数を参照するかが静的に決定されるという性質があります。

// 参照するものが呼び出し元によって変わる動的スコープというものがある(thisみたいな感じ)

// クロージャーの仕組み
/*
クロージャーがなぜ動くのか
ここまでで「 静的スコープ」 と「 メモリ管理の仕組み」 について説明してきました。

静的スコープ: ある変数がどの値を参照するかは静的に決まる
メモリ管理の仕組み: 参照されなくなったデータはガベージコレクションにより解放される
クロージャーとはこの２つの仕組みを利用して、 

【関数内から特定の変数を参照し続けることで関数が状態を持てる仕組みのことを言います。】
*/


// 関数とthis

{/* <script>
// 実行コンテキストは"Script"
  console.log(this); // => window
</script> */}

{/* <script type="module">
// 実行コンテキストは"Module"
  console.log(this); // => undefined
</script> */}

// JavaScriptではオブジェクトのプロパティが関数である場合にそれをメソッドと言う

// 疑似的な`this`の値の仕組み
// 関数は引数として暗黙的に`this`の値を受け取るイメージ
// function fn(暗黙的に渡されるthisの値, 仮引数) {
//   console.log(this); // => 暗黙的に渡されるthisの値
// }
// // 暗黙的に`this`の値を引数として渡しているイメージ
// fn(暗黙的に渡すthisの値, 引数);

// たとえば、fn()のように関数を呼び出したとき、このfn関数呼び出しのベースオブジェクトはないため、thisはundefinedとなります。 一方、obj.method()のようにメソッドを呼び出したとき、このobj.methodメソッド呼び出しのベースオブジェクトはobjオブジェクトとなり、thisはobjとなります。

// const obj1 = {
//   obj2: {
//     obj3: {
//       method() {
//         return this;
//       }
//     }
//   }
// };
// `obj1.obj2.obj3.method`メソッドの`this`は`obj3`を参照
