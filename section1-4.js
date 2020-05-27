// 【ループと反復処理】

// do-while文はwhile文とほとんど同じですが実行順序が異なります。

do {
    実行する文;
} while (条件式);


// ループと反復処理
// while文で書かないほうがいいことも多い、安直に使わないこと
// 最初に必ず実行文を処理して欲しい場合
// do {
//   実行する文;
// } while (条件式);

// 初期化、条件、条件まで行う処理
total = 0;
for (let i = 0; i < 10; i++) {
  total += i + 1; // 1から10の値をtotalに加算している
}
console.log(total); // => 55

currentValue = 0;
const array = [1, 2, 3];
array.forEach((currentValue) => {
  // 配列の要素ごとに呼び出される処理
  currentValue += 1;
});

console.log(currentValue);
// ここでいうところの、currentValueがrubyのeachでいうブロック変数みたいなもの



num = 6;
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
console.log(isEven(2)); // true

// 見つけた瞬間処理が終わる
function isEven(num) {
  return num % 2 === 0;
}
const numbers = [1, 5, 10, 15, 20];
console.log(numbers.some(isEven)); // => true

// forEachメソッドのコールバック関数には、配列の要素が先頭から順番に渡されて実行されます。 つまり、コールバック関数のcurrentValueには1から3の値が順番に渡されます。

const array = [1, 2, 3];
array.forEach(currentValue => {
    console.log(currentValue);
});
// 1
// 2
// 3
// と順番に出力される



// テストみたいな使い方ができる。

// 配列のsomeメソッド
// 先ほどのisEvenIncluded関数は、偶数を見つけたら true を返す関数でした。 配列ではsomeメソッドで同様のことが行えます。

// someメソッドは、配列の各要素をテストする処理をコールバック関数として受け取ります。 コールバック関数が、一度でもtrueを返した時点で反復処理を終了し、someメソッドはtrueを返します。

// const array = [1, 2, 3, 4, 5];
// const isPassed = array.some(currentValue => {
//     // テストをパスするとtrue、そうでないならfalseを返す
// });
// someメソッドを使うことで、配列に偶数が含まれているかは次のように書くことができます。 受け取った値が偶数であるかをテストするコールバック関数としてisEven関数を渡します。

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
