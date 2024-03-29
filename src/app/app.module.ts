import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { HeroComponent } from './components/layout/body/hero/hero.component';
import { ResultsComponent } from './components/layout/body/results/results.component';
import { PartnersComponent } from './components/layout/body/partners/partners.component';
import { SketchComponent } from './components/layout/body/sketch/sketch.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CatalogComponent } from './components/UI/buttons/catalog/catalog.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { MaterialsComponent } from './components/pages/materials/materials.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { LearnMoreComponent } from './components/layout/body/learn-more/learn-more.component';
import { BurgerComponent } from './components/ui/burger/burger.component';
import { SortComponent } from './components/UI/sort/sort.component';
import { SelectSortComponent } from './components/UI/select-sort/select-sort.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { MainComponent } from './components/main/main.component';
import { CartComponent } from './components/pages/cart/cart.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component:MainComponent},
  {path:'products', component:ProductsComponent},
  {path:'materials', component:MaterialsComponent},
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'register', component:RegisterComponent},
  {path:'cart', component:CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    HeroComponent,
    ResultsComponent,
    PartnersComponent,
    SketchComponent,
    FooterComponent,
    CatalogComponent,
    ProductsComponent,
    MaterialsComponent,
    AboutComponent,
    ContactsComponent,
    LearnMoreComponent,
    BurgerComponent,
    SortComponent,
    SelectSortComponent,
    RegisterComponent,
    MainComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
