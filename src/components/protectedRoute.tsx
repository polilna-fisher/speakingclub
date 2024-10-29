import {Navigate} from "react-router-dom";
import {IUser} from "../models/IUser";
import {routes} from "../routes";


const ProtectedRoute = ({ user, children, redirectInactiveUsers=routes.login}:
                            {user:IUser | null, children:any, redirectInactiveUsers?: any}) => {

    if (!user) {
        return <Navigate to={routes.login} replace />;
    }
    if(!user.isActivated) {
        return redirectInactiveUsers
    }

    return children;
};

export default ProtectedRoute;