import {IUserDto} from "../interfaces/IUserDto"

exports = class UserDto{
    email;
    id;
    isActivated;

    constructor(model:IUserDto) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated

    }
}
