import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AboutUsComponent,
    OurServicesComponent,
    BlogsComponent,
    BlogsAdminComponent,
    BlogsLoginComponent,
    ProjectManagementComponent,
    QualityAssuranceComponent,
    ConsultingComponent,
    ManpowerComponent,
    WebsiteDevelopmentComponent,
    ApplicationDevelopmentComponent,
    SysproComponent,
    SysproExpressoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
