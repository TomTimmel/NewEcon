module.exports = function(err, req, res, next) {
    const code = err.code || 500;
    const error = code === 500 ? 'Internal Server error' : err.error;
    console.log(err.error || err.message);
    res.status(code).send({error});
};