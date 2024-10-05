import {IUserDto} from "../interfaces/IUserDto"

export default class UserDto{
    email;
    id;
    isActivated;
    role;
    name;
    country;
    about;

    constructor(model:IUserDto) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated
        this.role = model.role
        this.country = model.country
        this.name = model.name
        this.about = model.about

    }
}
