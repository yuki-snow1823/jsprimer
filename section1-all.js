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
  en: "英語",
};
const { ja, en } = languages;
console.log(ja); // => "日本語"
console.log(en); // => "英語"

// 何をしているか：本来jaというふうにうつだけでは何も出ないが、constで分割代入しつつ定義することで
// languageオブジェクトのプロパティが対応して代入される

// プロパティの削除について
const obj2 = {
  key1: "value1",
  key2: "value2",
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
  one: 1,
  two: 2,
  three: 3,
};
// `Object.keys`はキーの列挙した配列を返す
console.log(Object.keys(obj4)); // => ["one", "two", "three"]
// `Object.values`は値を列挙した配列を返す
console.log(Object.values(obj4)); // => [1, 2, 3]
// `Object.entries`は[キー, 値]の配列を返す
console.log(Object.entries(obj4)); // => [["one", 1], ["two", 2], ["three", 3]]

// オブジェクトの合成
const objectA = {
  a: "a",
};
const objectB = {
  b: "b",
};
const merged = Object.assign({}, objectA, objectB);
console.log(merged); // => { a: "a", b: "b" }

// ※プロパティが重複した場合
// `version`のプロパティ名が被っている
const objectC = {
  version: "a",
};
const objectD = {
  version: "b",
};
// const merged = Object.assign({}, objectC, objectD);
// 後ろにある`objectB`のプロパティで上書きされる
// console.log(merged); // => { version: "b" }

// 便利なスプレッド構文も使える
// `version`のプロパティ名が被っている
const objectE = {
  version: "a",
};
const objectF = {
  version: "b",
};
const merged2 = {
  ...objectE,
  ...objectF,
  other: "other",
};
// 後ろにある`objectB`のプロパティで上書きされる
console.log(merged2); // => { version: "b", other: "other" }

// オブジェクトの複製に関して
// 引数の`obj`を浅く複製したオブジェクトを返す
const shallowClone = (obj) => {
  return Object.assign({}, obj);
};
const obj7 = {
  a: "a",
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
  key: "value",
};
const array12 = ["A", "B", obj10];
console.log(
  array12.indexOf({
    key: "value",
  })
); // => -1
// リテラルは新しいオブジェクトを作るため、異なるオブジェクトだと判定される
console.log(
  obj10 ===
    {
      key: "value",
    }
); // => false
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
  const x2 = "x";
  {
    // INNERブロックスコープからOUTERブロックスコープの変数を参照できる
    console.log(x2); // => "x"
  }
}

// 参照する場所に関して
{
  // OUTERブロックスコープ
  const x3 = "outer";
  {
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
var hello2 = function() {
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

{
  /* <script>
// 実行コンテキストは"Script"
  console.log(this); // => window
</script> */
}

{
  /* <script type="module">
// 実行コンテキストは"Module"
  console.log(this); // => undefined
</script> */
}

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

// クラス
// クラスとは動作や状態を定義した構造です。
// クラスからはインスタンスと呼ばれるオブジェクトを作成でき、
// インスタンスはクラスに定義した動作を継承し、状態は動作によって変化します。

// ES2015でクラスを表現するためのclass構文が導入されましたが、
// このclass構文で定義したクラスは関数オブジェクトの一種です。

class MyClass {
  constructor() {
    // コンストラクタ関数の処理
    // インスタンス化されるときに自動的に呼び出される
  }
}

// 式に入れることもできる
const AnonymousClass = class {
  constructor() {}
};

const myClass = new MyClass();

class Point {
  // コンストラクタ関数の仮引数として`x`と`y`を定義
  constructor(x, y) {
    // コンストラクタ関数における`this`はインスタンスを示すオブジェクト
    // インスタンスの`x`と`y`プロパティにそれぞれ値を設定する
    this.x = x;
    this.y = y;
  }
}

const point = new Point(3, 4);
// 4. `Point`のインスタンスである`point`の`x`と`y`プロパティには初期化された値が入る
console.log(point.x); // => 3
console.log(point.y); // => 4

// [Note] クラス名は大文字ではじめる

// メソッドの登録と使い方

// class クラス {
//   メソッド() {
//     // ここでの`this`はベースオブジェクトを参照
//   }
// }

// const インスタンス = new クラス();
// // メソッド呼び出しのベースオブジェクト(`this`)は`インスタンス`となる
// インスタンス.メソッド();

// クラスに対して定義したメソッドは、クラスの各インスタンスから共有されるメソッドとなります。 このインスタンス間で共有されるメソッドのことをプロトタイプメソッドと呼びます。 また、プロトタイプメソッドはインスタンスから呼び出せるメソッドであるためインスタンスメソッドとも呼ばれます。

// わかりやすい実例、インスタンスごとに結果が変わる

class Counter {
  constructor() {
    this.count = 0;
  }
  // `increment`メソッドをクラスに定義する
  increment() {
    // `this`は`Counter`のインスタンスを参照する
    this.count++;
  }
}
const counterA = new Counter();
const counterB = new Counter();
// `counterA.increment()`のベースオブジェクトは`counterA`インスタンス
counterA.increment();
// 各インスタンスの持つプロパティ(状態)は異なる
console.log(counterA.count); // => 1
console.log(counterB.count); // => 0

// ※コンストラクタの中にメソッドを書くこともできるけど、今のところ違いはわからない（要復習）
// static of(...items) { とかくと、newしなくても使える

// クラスでは、プロパティの参照（getter）、プロパティへの代入（setter）時に呼び出される特殊なメソッドを定義できます。 このメソッドはプロパティのように振る舞うためアクセッサプロパティと呼ばれます。

// class クラス {
//     // getter
//     get プロパティ名() {
//         return 値;
//     }
//     // setter
//     set プロパティ名(仮引数) {
//         // setterの処理
//     }
// }
// const インスタンス = new クラス();
// インスタンス.プロパティ名; // getterが呼び出される
// インスタンス.プロパティ名 = 値; // setterが呼び出される

// getter,setterの使い方
class NumberWrapper {
  constructor(value) {
    this._value = value;
  }
  // `_value`プロパティの値を返すgetter
  get value() {
    console.log("getter");
    return this._value;
  }
  // `_value`プロパティに値を代入するsetter
  set value(newValue) {
    console.log("setter");
    this._value = newValue;
  }
}

const numberWrapper = new NumberWrapper(1);
// "getter"とコンソールに表示される
console.log(numberWrapper.value); // => 1
// "setter"とコンソールに表示される
numberWrapper.value = 42;
// "getter"とコンソールに表示される
console.log(numberWrapper.value); // => 42

// クラスを定義しないとこんなことが起こる
// const array = [1, 2, 3, 4, 5];
// // 要素数を減らすと、インデックス以降の要素が削除される
// array.length = 2;
// console.log(array.join(", ")); // => "1, 2"
// // 要素数だけを増やしても、配列の中身は空要素が増えるだけ
// array.length = 5;
// console.log(array.join(", ")); // => "1, 2, , , "

// プロトタイプオブジェクト;

// 【例外処理】
// try...catch構文は例外が発生しうるブロックをマークし、例外が発生したときの処理を記述するための構文です。
// try...catch構文のtryブロック内で例外が発生すると、tryブロック内のそれ以降の処理は実行されず、catch節に処理が移行します。

try {
  console.log("try節:この行は実行されます");
  // 未定義の関数を呼び出してReferenceError例外が発生する
  undefinedFunction();
  // 例外が発生したため、この行は実行されません
} catch (error) {
  // 例外が発生したあとはこのブロックが実行される
  console.log("catch節:この行は実行されます");
  console.log(error instanceof ReferenceError); // => true
  console.log(error.message); // => "undefinedFunction is not defined"
} finally {
  // このブロックは例外の発生に関係なく必ず実行される
  console.log("finally節:この行は実行されます");
}

// throwで例外を作れる
// ErrorオブジェクトのインスタンスはErrorをnewして作成します。
// コンストラクタの第一引数には、エラーメッセージとなる文字列を渡します。
// 渡したエラーメッセージはError#messageプロパティに格納されます。

// 渡された数値が0以上ではない場合に例外を投げる関数
function assertPositiveNumber(num) {
  if (num < 0) {
    throw new Error(`${num} is not positive.`);
  }
}

try {
  // 0未満の値を渡しているので、関数が例外を投げる
  assertPositiveNumber(-1);
} catch (error) {
  console.log(error instanceof Error); // => true
  console.log(error.message); // => "-1 is not positive."
}

// TypeErrorは値が期待される型ではない場合のエラーです。
// ReferenceErrorは存在しない変数や関数などの識別子が参照された場合のエラーです。

function fn() {
  console.log("メッセージ");
  console.error("エラーメッセージ");
}

fn();

// 非同期処理:コールバック/Promise/Async Function
// 多くのプログラミング言語にはコードの評価の仕方として、同期処理（sync）と非同期処理（async）という大きな分類があります。
// 一方、同期的にブロックする処理が行われていた場合には問題があります。 同期処理ではひとつの処理が終わるまで、次の処理へ進むことができないためです。

// 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout) {
  const startTime = Date.now();
  // `timeout`ミリ秒経過するまで無限ループをする
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return; // 指定時間経過したら関数の実行を終了
    }
  }
}
console.log("処理を開始");
blockTime(1000); // 他の処理を1000ミリ秒（1秒間）ブロックする
console.log("この行が呼ばれるまで処理が1秒間ブロックされる");

// 先ほどの例では1秒間も処理をブロックしているため、1秒間スクロールなどの操作が効かないといった悪影響がでます。

// JavaScriptにおいて非同期処理の代表的な関数としてsetTimeout関数があります。 setTimeout関数はdelayミリ秒後に、コールバック関数を呼び出すようにタイマーへ登録する非同期処理です。

// setTimeout(コールバック関数, delay);

// 非同期のエラーはキャッチできない
try {
  setTimeout(() => {
    throw new Error("非同期的なエラー");
  }, 10);
} catch (error) {
  // 非同期エラーはキャッチできないため、この行は実行されません
}
console.log("この行は実行されます");

// Promise
// PromiseはES2015で導入された非同期処理の結果を表現するビルトインオブジェクトです。

// 元々はこう
asyncTask((error, result) => {
  if (error) {
    // 非同期処理が失敗したときの処理
  } else {
    // 非同期処理が成功したときの処理
  }
});

// Promiseインスタンスの作り方
const executor = (resolve, reject) => {
  // 非同期の処理が成功したときはresolveを呼ぶ
  // 非同期の処理が失敗したときはrejectを呼ぶ
};
const promise = new Promise(executor);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    resolve(); // 二度目以降のresolveやrejectは無視される
  }, 16);
});
promise.then(
  () => {
    console.log("最初のresolve時に一度だけ呼ばれる");
  },
  (error) => {
    // この行は呼び出されない
  }
);

// Async Function

// 通常の関数でPromiseインスタンスを返している
function doAsync() {
    return Promise.resolve("値");
}
doAsync().then(value => {
    console.log(value); // => "値"
});

async function asyncMain() {
  // await式のエラーはtry...catchできる
  try {
    // `await`式で評価した右辺のPromiseがRejectedとなったため、例外がthrowされる
    const value = await Promise.reject(new Error("エラーメッセージ"));
    // await式で例外が発生したため、この行は実行されません
  } catch (error) {
    console.log(error.message); // => "エラーメッセージ"
  }
}
// asyncMainはResolvedなPromiseを返す
asyncMain().catch((error) => {
  // すでにtry...catchされているため、この行は実行されません
});


// map
const map = new Map();
// 新しい要素の追加
map.set("key", "value1");
console.log(map.size); // => 1
console.log(map.get("key")); // => "value1"
// 要素の上書き
map.set("key", "value2");
console.log(map.get("key")); // => "value2"
// キーの存在確認
console.log(map.has("key")); // => true
console.log(map.has("foo")); // => false

// 中身を排出するメソッド
const map = new Map([["key1", "value1"], ["key2", "value2"]]);
const results = [];
map.forEach((value, key) => {
    results.push(`${key}:${value}`);
});
console.log(results); // => ["key1:value1","key2:value2"]


//  Mapオブジェクトとは. ES2015(ES6)から導入された、キーと値の組み合わせを保持することができるオブジェクト

// 次のコードではiterableオブジェクトである配列を初期値として渡しています。 また、Setでは重複する同じ値を持たないことを保証するため、同じ値は1つのみ格納されます。

// "value2"が重複するため、片方は無視される
const set = new Set(["value1", "value2", "value2"]);
// セットのサイズは2になる
console.log(set.size); // => 2


// json
// JSONはJavaScript Object Notationの略で、JavaScriptのオブジェクトリテラルをベースに作られた軽量なデータフォーマットです。 JSONの仕様はECMA-404として標準化されています。 JSONは、人間にとって読み書きが容易で、マシンにとっても簡単にパースや生成を行える形式になっています。 そのため、多くのプログラミング言語がJSONを扱う機能を備えています。

// JSONはダブルクォートのみを許容するため、シングルクォートでJSON文字列を記述
const json = '{ "id": 1, "name": "js-primer" }';
const obj = JSON.parse(json);
console.log(obj.id); // => 1
console.log(obj.name); // => "js-primer"

// jsonにするときはこう
const obj = { id: 1, name: "js-primer", bio: null };
console.log(JSON.stringify(obj)); // => '{"id":1,"name":"js-primer","bio":null}'

// 中身がなかった時の挙動も操作できる
const obj = { id: 1, name: "js-primer", bio: null };
const replacer = (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
};
console.log(JSON.stringify(obj, replacer)); // => '{"id":1,"name":"js-primer"}'
