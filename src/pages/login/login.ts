import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuPage } from '../menu/menu';
/**
  Connecting the page in AuthService and FireAuth
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

// Creating registerCredentials which works as authentication details
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  
  //credentials = { email:'', password: ''};
 //@ViewChild('email') email;
 //@ViewChild('password') password;


 
  constructor(private fire: AngularFireAuth, private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  public createAccount() {
    this.nav.push('RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
 
  public login() {

    //this.showLoading()
    //this.fire.auth.sendPasswordResetEmail()



    // Fletching the data from FireAuth database
    // When succes, root has set to home page

        this.fire.auth.signInWithEmailAndPassword(this.registerCredentials.email, this.registerCredentials.password)
      .then (data => {
        console.log('got data', data);
        this.alert('Succes, you logged in')
        this.nav.setRoot('MenuPage');
      })
      .catch (error => {
        //this.showError(error);
        console.log('got and error',error);
        this.alert(error.message);
      })

        console.log('Would sign in with SIGN', this.registerCredentials.email, this.registerCredentials.password);
    
  }
  
 
  //showLoading() {
    //this.loading = this.loadingCtrl.create({
      //content: 'Please wait...',
      //dismissOnPageChange: true
    //});
    //this.loading.present();
  //}

  
 
  //showError(text) {
    //this.loading.dismiss();
 
    //let alert = this.alertCtrl.create({
      //title: 'Fail',
      //subTitle: text,
      //buttons: ['OK']
    //});
    
    //alert.present();
  //}


}
