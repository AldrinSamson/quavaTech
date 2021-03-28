import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogsAdminComponent } from './pages/blogs-admin/blogs-admin.component';
import { BlogsLoginComponent } from './pages/blogs-login/blogs-login.component';
import { ProjectManagementComponent } from './pages/our-services/project-management/project-management.component';
import { QualityAssuranceComponent } from './pages/our-services/quality-assurance/quality-assurance.component';
import { ConsultingComponent } from './pages/our-services/consulting/consulting.component';
import { ManpowerComponent } from './pages/our-services/manpower/manpower.component';
import { WebsiteDevelopmentComponent } from './pages/our-services/website-development/website-development.component';
import { ApplicationDevelopmentComponent } from './pages/our-services/application-development/application-development.component';
import { SysproComponent } from './pages/products/syspro/syspro.component';
import { SysproExpressoComponent } from './pages/products/syspro-expresso/syspro-expresso.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',      component: HomepageComponent },
    { path: 'about-us',      component: AboutUsComponent },
    { path: 'services',      component: OurServicesComponent },
    { path: 'blog',      component: BlogsComponent },
    { path: 'blog-login',      component: BlogsLoginComponent },
    { path: 'blog-admin',      component: BlogsAdminComponent },
    { path: 'our-services/project-management',      component: ProjectManagementComponent  },
    { path: 'our-services/quality-assurance',      component: QualityAssuranceComponent  },
    { path: 'our-services/consulting',      component: ConsultingComponent },
    { path: 'our-services/manpower',      component: ManpowerComponent },
    { path: 'our-services/website-development',      component: WebsiteDevelopmentComponent },
    { path: 'our-services/application-development',      component: ApplicationDevelopmentComponent },
    { path: 'products/syspro',      component: SysproComponent },
    { path: 'products/syspro-expresso',      component: SysproExpressoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
