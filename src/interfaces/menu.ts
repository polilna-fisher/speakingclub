import React from "react";

export interface IMenuItem {
    name: string,
    icon: React.SVGAttributes<SVGElement>,
    id: string,
    link: string,
}