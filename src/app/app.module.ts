import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetComponent } from './top-widget/top-widget.component';
import { JoinByMonthComponent } from './join-by-month/join-by-month.component';
import { JoinsByStaeComponent } from './joins-by-stae/joins-by-stae.component';
import { LastFewPostsComponent } from './last-few-posts/last-few-posts.component';
import { TopThreeCommentsComponent } from './top-three-comments/top-three-comments.component';
import { ChartModule } from 'angular-highcharts';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetComponent,
    JoinByMonthComponent,
    JoinsByStaeComponent,
    LastFewPostsComponent,
    TopThreeCommentsComponent,
  ],
  imports: [BrowserModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
