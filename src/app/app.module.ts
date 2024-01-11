import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TableComponent } from './components/elements/table/table.component';
import { ItemComponent } from './components/elements/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { CustomSidenavComponent } from './components/elements/custom-sidenav/custom-sidenav.component';
import { MatTableModule } from '@angular/material/table';
import { PaginatorModule } from 'primeng/paginator';
import { MatSelectModule } from '@angular/material/select';
import { AddModalComponent } from './components/elements/add-modal/add-modal.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EditarComponent } from './components/forms/editar/editar.component';
import { CrearComponent } from './components/forms/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchiveComponent,
    TableComponent,
    ItemComponent,
    CustomSidenavComponent,
    AddModalComponent,
    EditarComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    FormsModule,
    MatIconModule, MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    PaginatorModule,
    MatSelectModule,
    CdkMenuModule,
    MatButtonToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
