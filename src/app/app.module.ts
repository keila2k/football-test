import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// App Modules
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';

// Firebase imports
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CustomHttpInterceptor} from './interceptors/CustomHttpInterceptor';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {
  GoogleLoginProvider,
  SocialLoginModule,
  SocialAuthService,
  SocialAuthServiceConfig
} from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    HttpClientModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatProgressBarModule,
    MatSelectModule,
    MatStepperModule,
    SocialLoginModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '342236723882-vjq408e8hrbu07lrq9b4lqi8vh96bim0.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
