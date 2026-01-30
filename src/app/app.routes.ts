import { Routes } from '@angular/router';
import { Home } from './Pages/home/home'; 
import { Compan } from './Pages/compan/compan';
import { About } from './Pages/about/about';
import { Contact } from './Pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
   { path: 'compan', component: Compan },
    { path: 'about', component: About },
     { path: 'contact', component: Contact }
  
];
