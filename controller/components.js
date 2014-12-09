
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');


exports.getInfo = function* next() {
    console.log(this.request.method);
    console.log(this.request.header);

    var body =
        yield parse(this.request);
    //console.log(body);
    var code = component.addComponent(body)
    this.body = {
        'code': code
    };
}
