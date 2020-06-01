// 【オブジェクト】

// オブジェクトはプロパティの集合です。プロパティとは名前（キー）と値（バリュー）が対になったものです。 プロパティのキーには文字列またはSymbolが利用でき、値には任意のデータを指定できます。 また、1つのオブジェクトは複数のプロパティを持てるため、1つのオブジェクトで多種多様な値を表現できます。

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
