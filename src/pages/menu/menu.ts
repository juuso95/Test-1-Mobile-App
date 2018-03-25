import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?:  number;
  icon: string;
}


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;


   // Adding all components which are in the navigation menu
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'ServicePage', index: 0, icon: 'home'},
    { title: 'Contact information', pageName: 'TabsPage', tabComponent: 'ContactsPage', index: 1, icon: 'contacts'},
    { title: 'About', pageName: 'SpecialPage', index: 2, icon: 'person'},
    { title: 'Project Work', pageName: 'ProjectworkPage', index: 3, icon: 'folder'},
    { title: 'Targeted CV', pageName: 'TargetedPage', index: 4, icon: 'clipboard'},
    { title: 'Curriculum activities', pageName: 'ActivitiesPage', index: 5, icon: 'trophy'}

  ]
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  }
 

  // Rooting the buttons
  openPage(page: PageInterface){
    let params ={};
    
    if(page.index){
      params = {tabIndex: page.index};
    }
    if(this.nav.getActiveChildNav() && page.index != undefined){
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  } 
   // Rooting the button which opens the navigation menu 
  isActive(page: PageInterface){
    let childNav=this.nav.getActiveChildNav();

    if(childNav){
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }
  // Creating the logout feature
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
      
    });
  }
  
}