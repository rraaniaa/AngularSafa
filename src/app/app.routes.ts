import { Routes } from '@angular/router';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [

    { path: 'diagnostic', component: DiagnosticComponent },
    { path: '', component: HomeComponent },
    
];
