module.exports = class ApiError extends Error{
    status;
    errors

    constructor(status:number, message:string, errors = []) {
        super(message);
        this.errors = errors
        this.status = status
    }

    static UnauthorizedError():ApiError{
        return new ApiError(401, 'User is not authorised')
    }

    static BadRequest(message:string, errors = []):ApiError{
        return new ApiError(400, message, errors)
    }

}