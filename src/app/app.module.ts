import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/user/login/login.component';
import { SignupComponent } from './pages/user/signup/signup.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { ScrollDirective } from './directives/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    SongCardComponent,
    TopNavbarComponent,
    ButtonComponent,
    ScrollDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
