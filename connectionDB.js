const { default: mongoose } = require("mongoose");
const { URL } = require("./config")
function connectionWithDBFunction() {
    mongoose.connect(URL).then(() => { console.log("DB Connected") }).catch((error) => { console.error("DB not Connected : ", error) })
}
module.exports = {
    connectionWithDBFunction
}