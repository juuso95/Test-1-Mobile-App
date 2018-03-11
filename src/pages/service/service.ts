import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {

  email: string;

//username = '';
  //email = '';
  constructor(private fire: AngularFireAuth, public navParams: NavParams, private auth: AuthService) {
    this.email = fire.auth.currentUser.email;
    //let info = this.auth.getUserInfo();
    //this.username = info['name'];
    //this.email = info['email'];
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

}
