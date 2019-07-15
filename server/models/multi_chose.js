var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
    id : 고유값
    question : 문제 제목
    items : 선택 문항 목록
    type : 문제 과목 (영어,수학...)
*/
var multiChoseSchema = new Schema({
    id: Number,
    question: String,
    items: Array,
    type: String
});

module.exports = mongoose.model('multi_chose', multiChoseSchema);