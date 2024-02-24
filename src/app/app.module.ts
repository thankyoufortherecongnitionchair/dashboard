import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { GlobalMissionComponent } from './global-mission/global-mission.component';
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
    AboutusComponent,
    BlogComponent,
    GlobalMissionComponent,
  ],
  imports: [BrowserModule, ChartModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
