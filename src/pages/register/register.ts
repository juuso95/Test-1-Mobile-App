import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import {AngularFireAuth} from 'angularfire2/auth';


  
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',

// Creating registerCredentials which works as a authentication details
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = {firstname: '', lastname: '', email: '', password: ''};
 
  constructor(private fire: AngularFireAuth, private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
 
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  
  // Inserting the data to FireAuth database
  // When succes, register completed, and root back to login page
  public register() {
    
        this.fire.auth.createUserWithEmailAndPassword(this.registerCredentials.email, this.registerCredentials.password)
      .then (data => {
        console.log('got data', data);
        this.alert('Succes, you succesfully registered!')
        this.nav.setRoot('LoginPage')
      })
      .catch (error => {
        this.alert(error.message);
        //this.showError("Error", error);
      })
      console.log('Would register user with REGISTER', this.registerCredentials.email, this.registerCredentials.password);
        //this.createSuccess = true;
        //this.showPopup("Success", "Account created.");
      
    
  
 
  //showPopup(title, text) {
    //let alert = this.alertCtrl.create({
      //title: title,
      //subTitle: text,
      //buttons: [
        //{
          //text: 'OK',
          //handler: data => {
            //if (this.createSuccess) {
              //this.nav.popToRoot();
            //}
          //}
        //}
      //]
    //});
    //alert.present();
  //}
}
}
