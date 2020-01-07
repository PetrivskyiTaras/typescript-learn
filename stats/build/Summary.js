"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(analyzer, outPutTarger) {
        this.analyzer = analyzer;
        this.outPutTarger = outPutTarger;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var outPut = this.analyzer.run(matches);
        this.outPutTarger.print(outPut);
    };
    return Summary;
}());
exports.Summary = Summary;
