import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Login } from './login/login';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { profile } from 'console';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
    {path:"", component:Home},
    {path:"about", component:About},
    {path:"about/:id/:name", component:About},
    {path:"contact", component:Contact},
    {path:"login", component:Login},
    {path:"profile", component:Profile},
    {path:"**", component:PageNotFound},

];
