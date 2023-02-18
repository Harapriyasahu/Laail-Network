const mongoose = require("mongoose");
const contractScheme = mongoose.Schema({
    lenderId: { type: String, required: true },
    borrowerId: { type: String, required: true },
    principle: { type: String, required: true },
    interest: { type: String, required: true },
    loanStartDate: { type: String, required: true },
    loanDueDate: { type: String, required: true },
    isRepaid: { type: Boolean, default: false },
})
const ContractModel = mongoose.model("contract", contractScheme)

module.exports = ContractModel;


// {
//     "lenderId": "2",
//     "borrowerId": "4",
//     "principle":"6" ,
//     "interest": "3",
//     "loanStartDate": "5",
//     "loanDueDate": "8",
//     "isRepaid": "true"
// }