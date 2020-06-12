// 【配列】
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


// コラム「undefined」という要素を区別する方法
const denseArray = [1, undefined, 3];
const sparseArray = [1, , 3];
// 要素自体は`undefined`値が存在する
console.log(denseArray.hasOwnProperty(1)); // => true
// 要素自体がない
console.log(sparseArray.hasOwnProperty(1)); // => false


// 指定範囲の要素取得
console.log(array.slice(1, 4)); // => ["B", "C", "D"]

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

// 破壊的
// Array.prototype.pop	配列の末尾の値
// Array.prototype.push	変更後の配列のlength
// Array.prototype.splice	取り除かれた要素を含む配列
// Array.prototype.reverse	反転した配列
// Array.prototype.shift	配列の先頭の値
// Array.prototype.sort	ソートした配列
// Array.prototype.unshift	変更後の配列のlength
// Array.prototype.copyWithin[ES2015]	変更後の配列
// Array.prototype.fill[ES2015]	変更後の配列

// 破壊の影響を受けないようにするには
const myArray = ["A", "B", "C"];
// `slice`は`myArray`のコピーを返す - `myArray.concat()`でも同じ
const copiedArray = myArray.slice();
myArray.push("D");
console.log(myArray); // => ["A", "B", "C", "D"]
// `array`のコピーである`copiedArray`には影響がない
console.log(copiedArray); // => ["A", "B", "C"]
// コピーであるため参照は異なる
console.log(copiedArray === myArray); // => false
