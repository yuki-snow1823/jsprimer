// 【関数と宣言】

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
function fn(arg1, ...restArgs) {
  console.log(arg1); // => "a"
  console.log(restArgs); // => ["b", "c"]
}
fn("a", "b", "c");

// 関数において引数の数が固定ではなく、任意の個数の引数を受け取りたい場合があります。 たとえば、Math.max(...args)は引数を何個でも受け取り、受け取った引数の中で最大の数値を返す関数です。 このような、固定した数ではなく任意の個数の引数を受け取れることを可変長引数と呼びます。

// // Math.maxは可変長引数を受け取る関数
// const max = Math.max(1, 5, 10, 20);
// console.log(max); // => 20

// 関数の引数としてオブジェクトを渡すこともできる

function printUserId(user) {
  console.log(user.id); // => 42
}
const user = {
  id: 42,
};
printUserId(user);


// 再帰的なもの
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

// 仮引数の数と定義
const fnA = () => { /* 仮引数がないとき */ };
const fnB = (x) => { /* 仮引数が1つのみのとき */ };
const fnC = x => { /* 仮引数が1つのみのときは()を省略可能 */ };
const fnD = (x, y) => { /* 仮引数が複数のとき */ };
// 値の返し方
// 次の２つの定義は同じ意味となる
const mulA = x => { return x * x; }; // ブロックの中でreturn
const mulB = x => x * x;            // 1行のみの場合はreturnとブロックを省略できる

// 高階層関数
// たとえば、配列のforEachメソッドはコールバック関数を引数として受け取る高階関数です。
// forEachメソッドは、配列の各要素に対してコールバック関数を一度ずつ呼び出します。

const array = [1, 2, 3];
const output = (value) => {
    console.log(value);
};
array.forEach(output);
// 次のように実行しているのと同じ
// output(1); => 1
// output(2); => 2
// output(3); => 3


// メソッド
const obj = {
    method: function() {
        return "this is method";
    }
};
console.log(obj.method()); // => "this is method"
