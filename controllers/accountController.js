const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError")
const Account = require("./../models/accountModel")

exports.getAllAccounts = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is yet to be defined!'
    });
}
exports.getAccount = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is yet to be defined!'
    });
}
exports.createAccount = catchAsync(async (req, res, next) => {
    const { username, email, password } = req.body;
    const accountExist = await Account.findOne({ email });

    if (accountExist) {
        next(new AppError('account already exists', 400))
    }
    const newAccount = await Account.create({
        username,
        email,
        password
    })
    res.status(201).json({
        _id: newAccount._id,
        name: newAccount.name,
        email: newAccount.email,
    })

})
exports.updateAccount = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is yet to be defined!'
    });
}
exports.deleteAccount = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is yet to be defined!'
    });
}