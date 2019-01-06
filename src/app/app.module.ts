import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule, MatCardModule, MatInputModule, MatDialogModule,
} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { MainNavComponent } from './components/home/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SideNavComponent } from './components/home/side-nav/side-nav.component';
import { DbSongsService } from './services/db/db-songs.service';
import { environment } from '../environments/environment';
import { SongService } from './services/song.service';
import { InfoComponent } from './components/home/main-nav/info/info.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditableLabelDialog } from './components/helpers/editable-label-dialog/editable-label-dialog.component';
import { EditableLabelComponent } from './components/helpers/editable-label/editable-label.component';
import { TextComponent } from './components/home/main-nav/text/text.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    MainNavComponent,
    SideNavComponent,
    InfoComponent,
    EditableLabelDialog,
    EditableLabelComponent,
    TextComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    LayoutModule,
    MatFormFieldModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [
    DbSongsService,
    SongService
  ],
  entryComponents: [
    EditableLabelDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
