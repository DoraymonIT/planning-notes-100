import { Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { CompanyComponent } from './companies/company/company.component';
import { CrationDocsProcessComponent } from './cration-docs-process/cration-docs-process.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'companies',
    component: CompanyComponent,
  },
  {
    path: 'crationDocsProcess',
    component: CrationDocsProcessComponent,
  },
];
