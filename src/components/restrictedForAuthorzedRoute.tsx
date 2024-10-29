import {Navigate} from "react-router-dom";
import {IUser} from "../models/IUser";
import {routes} from "../routes";
import InactiveUserMessage from "./content/mainContainer/inactiveUserMessage/inactiveUserMessage";


const RestrictedForAuthorizedRoute = ({ user, children }: {user:IUser | null, children:any}) => {
    if (user && user.isActivated) {
        return <Navigate to={routes.default} replace />;
    }
    if(user && !user.isActivated){
        return <InactiveUserMessage/>;
    }

    return children;
};

export default RestrictedForAuthorizedRoute;