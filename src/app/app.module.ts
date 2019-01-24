import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SongComponent } from './components/main-content/song/song.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SideNavComponent } from './components/home/side-nav/side-nav.component';
import { DbSongsService } from './services/db/db-songs.service';
import { environment } from '../environments/environment';
import { SongService } from './services/song.service';
import { InfoComponent } from './components/main-content/song/info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditableLabelDialog } from './components/helpers/editable-label-dialog/editable-label-dialog.component';
import { EditableLabelComponent } from './components/helpers/editable-label/editable-label.component';
import { TextComponent } from './components/main-content/song/text/text.component';
import { NoContentComponent } from './components/main-content/no-content/no-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SongComponent,
    SideNavComponent,
    InfoComponent,
    EditableLabelDialog,
    EditableLabelComponent,
    TextComponent,
    NoContentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
