import gettingStarted from '../components/navbar/menuIcons/gettingStarted.svg';
import premium from '../components/navbar/menuIcons/premium.svg';
import profile from '../components/navbar/menuIcons/profile.svg';
import schedule from '../components/navbar/menuIcons/schedule.svg';
import help from '../components/navbar/menuIcons/help.svg';
import signOut from '../components/navbar/menuIcons/signOut.svg';
import Admin from '../components/navbar/menuIcons/admin.svg';


export const menuItemsList = [
    {name: 'Getting started', icon: gettingStarted, id: 'started', link: '/'},
    {name: 'Schedule', icon: schedule, id: 'schedule', link: '/schedule'},
    {name: 'Premium', icon: premium, id: 'premium', link: '/premium'},
    {name: 'View Profile', icon: profile, id: 'profile', link: '/profile'},
    {name: 'Help', icon: help, id: 'help', link: '/help'},
    {name: 'Sign Out', icon: signOut, id: 'signout', link: '/'},
    {name: 'God\'s mode' , icon: Admin, id: 'admin', link: '/admin'}
    ]
