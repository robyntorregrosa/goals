import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewGoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-goal',
  templateUrl: 'new-goal.html',
})
export class NewGoalPage {


	public myItemsList = [1,2,3];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addMilestone() {
  	this.myItemsList.push(this.myItemsList[this.myItemsList.length - 1] + 1);
  }

  

}
