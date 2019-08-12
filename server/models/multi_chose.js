const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

/*
    id : 고유값
    question : 문제 제목
    items : 선택 문항 목록
    type : 문제 과목 (영어,수학...)
*/
const multiChoseSchema = new Schema({
    question: String,
    items: Array,
    type: { type:String, default:'' },
    count: { type:Number, default:0 }
});
autoIncrement.initialize(mongoose.connection);
multiChoseSchema.plugin(autoIncrement.plugin, 'log');
module.exports = mongoose.model('multi_chose', multiChoseSchema);