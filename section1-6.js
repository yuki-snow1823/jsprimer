// プロトタイプメソッド

// また、 JavaScriptにはtoString以外にも、 オブジェクトに自動的に実装されるメソッドがあります。
// これらのオブジェクトに組み込まれたメソッドをビルトインメソッドと呼びます。

// このようにObject.prototypeに定義されているtoStringメソッドなどは、
// インスタンス作成時に自動的に継承されるため、 Objectのインスタンスから呼び出せます。

// つまり、インスタンスからプロトタイプメソッドを呼び出せるということ。
// インスタンスとプロトタイプオブジェクトで同じ名前のメソッドがある場合には、 インスタンスのメソッドが優先されます。
// →再定義できる

const obj = {};
console.log(obj.toString()); // "[object Object]"
// 実行
// オブジェクトリテラルで空のオブジェクトを定義しただけなのに、toStringメソッドを呼び出せています。 このメソッドはどこに実装されているのでしょうか？確かに。

// これらのオブジェクトに組み込まれたメソッドをビルトインメソッドと呼びます。!!!

//Objectはすべての元
// Objectには、他のArray、String、Functionなどのオブジェクトとは異なる特徴があります。 それは、他のオブジェクトはすべてObjectを継承しているという点です。

// 先ほども登場したtoStringメソッドは、Objectのprototypeオブジェクトに定義があります。 次のように、Object.prototype.toStringメソッドの実装自体も参照できます。

// 具体的にどういうことかを見てみます。

// 先ほども登場したtoStringメソッドは、Objectのprototypeオブジェクトに定義があります。 次のように、Object.prototype.toStringメソッドの実装自体も参照できます。

// `Object.prototype`オブジェクトに`toString`メソッドの定義がある
// 決まっている
console.log(typeof Object.prototype.toString); // => "function"


// Objectのインスタンスは、このObject.prototypeオブジェクトに定義されたメソッドやプロパティをインスタンス化したときに継承します。　理解

// つまり、元々設定みたいなものがオブジェクトにはプロトタイプメソッドとして登録されていて、newするとそれが有効になるってこと

// 例
const obj = {
    "key": "value"
};
// `obj`インスタンスは`Object.prototype`に定義されたものを継承する
// `obj.toString`は継承した`Object.prototype.toString`を参照している
console.log(obj.toString === Object.prototype.toString); // => true
// インスタンスからプロトタイプメソッドを呼び出せる
console.log(obj.toString()); // => "[object Object]"
