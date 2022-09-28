import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ReactiveRegComponent } from './reactive-reg/reactive-reg.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderNewComponent } from './header-new/header-new.component';
import { SearchNewComponent } from './search-new/search-new.component';
import { FilterComponent } from './filter/filter.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SamCoursesComponent } from './samples/sam-courses/sam-courses.component';
import { SamFilterComponent } from './samples/sam-filter/sam-filter.component';
import { SamSearchComponent } from './samples/sam-search/sam-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ReactiveRegComponent,
    CoursesComponent,
    HeaderNewComponent,
    SearchNewComponent,
    FilterComponent,
    CustomerListComponent,
    SamCoursesComponent,
    SamFilterComponent,
    SamSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
