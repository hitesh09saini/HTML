function hello() {
    console.log("hello world!");
}

hello.prototype.id =2;
hello.prototype.abc ="abc";

console.log(hello.prototype);