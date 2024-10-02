import gettingStarted from "../components/navbar/menuIcons/gettingStarted.svg";
import premium from "../components/navbar/menuIcons/premium.svg";
import profile from "../components/navbar/menuIcons/profile.svg";
import schedule from "../components/navbar/menuIcons/schedule.svg";
import help from "../components/navbar/menuIcons/help.svg";
import signOut from "../components/navbar/menuIcons/signOut.svg";
import Admin from "../components/navbar/menuIcons/admin.svg";
import { routes } from "../routes";
import {IMenuItem} from '../models/IMenu'


export const menuItemsList:IMenuItem[] = [
  {name: "Log in", icon: signOut, id: "login", link: routes.login},
  {name: "Getting started", icon: gettingStarted, id: "started", link: routes.default},
  { name: "Schedule", icon: schedule, id: "schedule", link: routes.schedule },
  { name: "Premium", icon: premium, id: "premium", link: routes.premium },
  { name: "View Profile", icon: profile, id: "profile", link: routes.profile },
  { name: "Help", icon: help, id: "help", link: routes.help },
  { name: "God's mode", icon: Admin, id: "admin", link: routes.admin },
  { name: "Sign Out", icon: signOut, id: "signout", link: routes.login },
];
