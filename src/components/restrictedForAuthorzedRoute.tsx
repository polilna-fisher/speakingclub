import {Navigate} from "react-router-dom";
import {IUser} from "../models/IUser";
import {routes} from "../routes";


const RestrictedForAuthorizedRoute = ({ user, children }: {user:IUser | null, children:any}) => {
    if (user) {
        return <Navigate to={routes.default} replace />;
    }

    return children;
};

export default RestrictedForAuthorizedRoute;