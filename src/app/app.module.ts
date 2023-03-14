import { ZippyComponent } from './zippy/zippy.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PanelComponent } from './panel/panel.component';
import { NewCourseFormWithFormBuilderComponent } from './new-course-form-with-form-builder/new-course-form-with-form-builder.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppErrorHandler } from './common/app-error-handler';
import { SummaryPipe } from './pipes/summary.pipe';
import { AuthorsComponent } from './authors/authors.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { TwitterLikeComponent } from './twitter-like/twitter-like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ArchivePageComponent } from './archive-page/archive-page.component';
import { ArchiveComponent } from './archive/archive.component';
import { SocialInteractionsComponent } from './social-interactions/social-interactions.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    SummaryPipe,
    ChangePasswordFormComponent,
    ContactFormComponent,
    GithubFollowersComponent,
    FavoriteComponent,
    NewCourseFormComponent,
    NewCourseFormWithFormBuilderComponent,
    PanelComponent,
    PostsComponent,
    SignupFormComponent,
    TitleCaseComponent,
    TitleCasePipe,
    TwitterLikeComponent,
    ZippyComponent,
    NavbarComponent,
    NotFoundComponent,
    GithubProfileComponent,
    HomeComponent,
    WrapperComponent,
    ArchivePageComponent,
    ArchiveComponent,
    SocialInteractionsComponent,
    QuestionsAndAnswersComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
