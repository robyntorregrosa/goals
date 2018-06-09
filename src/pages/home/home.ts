import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewGoalPage } from '../new-goal/new-goal';
import { GoalDetailPage } from '../goal-detail/goal-detail';

import {ProgressBarModule} from "angular-progress-bar";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onNewGoal() {
  	this.navCtrl.push(NewGoalPage);
  }

  onGoalDetails() {
  	this.navCtrl.push(GoalDetailPage);
  }

}
