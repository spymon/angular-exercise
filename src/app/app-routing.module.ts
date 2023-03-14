import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { AuthorsComponent } from './authors/authors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ArchivePageComponent } from './archive-page/archive-page.component';
import { ArchiveComponent } from './archive/archive.component';
import { NewCourseFormWithFormBuilderComponent } from './new-course-form-with-form-builder/new-course-form-with-form-builder.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SocialInteractionsComponent } from './social-interactions/social-interactions.component';
import { PanelComponent } from './panel/panel.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { TitleCaseComponent } from './title-case/title-case.component';

const routes: Routes = [
  {
    path: 'custom-pipe',
    component: TitleCaseComponent,
  },
  {
    path: 'reusable',
    component: QuestionsAndAnswersComponent,
  },
  {
    path: 'social',
    component: SocialInteractionsComponent,
  },
  {
    path: 'sign-up',
    component: SignupFormComponent,
  },
  {
    path: 'contact',
    component: ContactFormComponent,
  },
  {
    path: 'new-course-formbuild',
    component: NewCourseFormWithFormBuilderComponent,
  },
  {
    path: 'new-course',
    component: NewCourseFormComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordFormComponent,
  },
  {
    path: 'archive/:year/:month',
    component: ArchivePageComponent,
  },
  {
    path: 'archive',
    component: ArchiveComponent,
  },
  {
    path: 'authors',
    component: AuthorsComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'followers/:id/:username',
    component: GithubProfileComponent,
  },
  {
    path: 'followers',
    component: GithubFollowersComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
