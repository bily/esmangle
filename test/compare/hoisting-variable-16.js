/*{
    "pass": [
        "hoist-variable-to-arguments"
    ]
}*/
// prevent optimization because of this.constructor.arguments access
new function () {
    var i = 20;
    this.arguments;
};
