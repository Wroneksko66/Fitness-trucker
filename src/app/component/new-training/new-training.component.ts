import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrainingService} from "../training/service/training.service";
import {Exercise} from "../training/interface/exercise.interface";
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private trainingService: TrainingService, private db:AngularFirestore) {
  }

  ngOnInit() {
   this.db.collection('exercises').valueChanges().subscribe(result =>{
      console.log(result)
    })
  }

  starExercise(f: NgForm) {
    const idExercise = f.value['exercise']
    this.trainingService.startExercise(idExercise)
  }
}
