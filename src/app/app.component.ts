import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    firebase.initializeApp({
      apiKey: "AIzaSyADL920TJskd8t1lgLzH1xkIy0Rc73RY54",
      authDomain: "app0919-8e0e5.firebaseapp.com",
      databaseURL: "https://app0919-8e0e5.firebaseio.com",
      projectId: "app0919-8e0e5",
      storageBucket: "",
      messagingSenderId: "703591970539",
      appId: "1:703591970539:web:994af486545c4f501a30ae"
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
