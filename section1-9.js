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

// 名前が被った場合

// "Array"という名前の変数を定義
const Array = 1;
// 自分で定義した変数がビルトインオブジェクトより優先される
console.log(Array); // => 1

// スコープの範囲はできるだけ狭くする
