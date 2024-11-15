class ErrorResponse extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}

module.exports = ErrorResponse;