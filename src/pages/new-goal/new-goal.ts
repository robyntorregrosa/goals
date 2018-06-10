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
	public myOtherList = [];
	public displayOther = false;
	public other = " ";
	public displayImage = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addMilestone() {
  	this.myItemsList.push(this.myItemsList[this.myItemsList.length -1] + 1);
  }
  doNothing() {


  }

  finish() {
  	this.navCtrl.pop();
  }
  addImage() {
  	console.log("che");
  	this.displayImage = true;
  }
  onSelect() {
  	console.log('sdf');
  	  	if(this.other == "other")
  	{
  		console.log("df");
  		  	this.displayOther = true;

  	}
  }

  addOther() {
  	console.log("sdf");
  	if(this.myOtherList.length == 0)
  	{
  		this.myOtherList.push(" ");

  	}
  }

  

}
