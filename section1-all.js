

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


// UTCにおける"2006年1月2日15時04分05秒999"を表すISO 8601形式の文字列
const inUTC = new Date("2006-01-02T15:04:05.999Z");
console.log(inUTC.toISOString()); // => "2006-01-02T15:04:05.999Z"

// 文字列の補填
const str1 = '5';
console.log(str1.padStart(2, '0'));
// expected output: "05"

// そのため、JavaScriptにおける日付・時刻の処理は、標準のDateではなくライブラリを使うことが一般的になっています。 代表的なライブラリとしては、moment.jsやjs-joda、date-fnsなどがあります。

// moment.jsで現在時刻のmomentオブジェクトを作る
const now = moment();
// addメソッドで10分進める
const future = now.add(10, "minutes");
// formatメソッドで任意の書式の文字列に変換する
console.log(future.format("YYYY/MM/DD"));


// 【Math】
// minからmaxまでの乱数を返す関数
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
// 1以上5未満の浮動小数点数を返す
console.log(getRandom(1, 5));
// Mathはインスタンス化できない
