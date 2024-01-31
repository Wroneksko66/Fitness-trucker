import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TrainingService} from "./service/training.service";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  starNewTraining: boolean = false;
  authSubscription: Subscription | undefined;

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.authSubscription = this.trainingService.currentExercise.subscribe(ex => {
      if(ex) {
        this.starNewTraining = true
      } else {
        this.starNewTraining = false
      }
    })
  }
}
