import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';



/**
 * Generated class for the GoalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-goal-detail',
  templateUrl: 'goal-detail.html',
})
export class GoalDetailPage {

public checked = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

}
