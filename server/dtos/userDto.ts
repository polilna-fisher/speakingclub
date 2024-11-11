import {IUserDto} from "../interfaces/IUserDto"

export default class UserDto{
    email;
    id;
    isActivated;
    role;
    name;
    info;
    resetPasswordLink;
    allowReset;
    bookedParts;
    subscription

    constructor(model:IUserDto) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated
        this.role = model.role
        this.name = model.name
        this.info = model.info
        this.resetPasswordLink = model.resetPasswordLink
        this.allowReset = model.allowReset
        this.bookedParts = model.bookedParts
        this.subscription = model.subscription
    }
}
