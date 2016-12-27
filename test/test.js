/*global test */

var assert = require("assert")
var mod = require("../")
var testo = {a: 123, b: [{d: 'test'}]}
var testr = [{a: 123, b: [{d: 'test'}]}]

test("exists", function () {
    assert(typeof mod === "function", "get is not a function")
})

test("get Object get", function (done) {
    testo.get('b.0.d', done)
});

test("get Array get", function (done) {
    testr.get('0.a', done)
});