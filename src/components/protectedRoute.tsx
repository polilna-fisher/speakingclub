import {Navigate} from "react-router-dom";
import {IUser} from "../models/IUser";
import {routes} from "../routes";


const ProtectedRoute = ({ user, children }: {user:IUser | null, children:any}) => {
    if (!user || !user.isActivated) {
        return <Navigate to={routes.login} replace />;
    }

    return children;
};

export default ProtectedRoute;