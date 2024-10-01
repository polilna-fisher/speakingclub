import {Navigate} from "react-router-dom";
import {IUser} from "../models/IUser";
import {FC} from "react";
import {routes} from "../routes";


const ProtectedRoute = ({ user, children }: {user:IUser | null, children:any}) => {
    if (!user) {
        return <Navigate to={routes.default} replace />;
    }

    return children;
};

export default ProtectedRoute;