
function* gen() {
    console.log('start');
    var o = yield "foobar";
    console.log("I am back and bring " + o);
}
function yieldwork() {

    var a = gen();          // 第一次呼叫時是返回一個 generator 物件

    var b = a.next();       // 開始執行，到 yield 時會暫停執行並返回，返回值是一個物件

    console.log(b.value);   // 他的 value 屬性是 yield 右側的 expression 的執行結果

    console.log(b.done);    // 是否完成

    var c = a.next("something from outside"); // 傳個值回去

    console.log(c.done);    // 完成

    a.next();

}

module.exports = yieldwork