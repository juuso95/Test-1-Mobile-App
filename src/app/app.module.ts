import { AuthService } from './../providers/auth-service/auth-service'; 
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { ServicePage } from '../pages/service/service';
import { LoginPageModule } from '../pages/login/login.module';
//import { AuthServiceProvider } from '../providers/auth-service/auth-service';

const firebaseAuth ={
  apiKey: "AIzaSyAN8xi0X-fB22RRxmLeivvkRfhfy7N7-0M",
  authDomain: "loginsystem-hkjk.firebaseapp.com",
  databaseURL: "https://loginsystem-hkjk.firebaseio.com",
  projectId: "loginsystem-hkjk",
  storageBucket: "",
  messagingSenderId: "402198038253"
};






@NgModule({
  declarations: [
    MyApp
    


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    LoginPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
