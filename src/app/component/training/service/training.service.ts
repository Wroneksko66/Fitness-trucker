import {Injectable} from '@angular/core';
import {Exercise} from "../interface/exercise.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  currentExercise: Subject<Exercise | undefined> = new Subject<Exercise | undefined>()
  exerciseSours:Subject<Exercise[]> =  new Subject<Exercise[]>
  private exercises: Exercise[] = [
    {id: 'crunches', name: 'Crunches', duration: 30, calorie: 30},
    {id: 'touch-toes', name: 'Touch-toes', duration: 180, calorie: 20},
    {id: 'side-lunges', name: 'Side-lunges', duration: 120, calorie: 10},
    {id: 'burpees', name: 'Burpees', duration: 60, calorie: 8}
  ]
  private runningExercise: Exercise | undefined;
  private pastExercise: Exercise[] = []

  constructor() {
  }

  get availableExercises() {
    return this.exercises.slice()
  }
 get onPastExercise(){
    return this.pastExercise.slice()
 }
  startExercise(idExercise: string) {
    this.runningExercise = this.exercises.find(ex => ex.id === idExercise
    )
    if (this.runningExercise) {
      this.currentExercise.next({...this.runningExercise})
    }

  }

  addPastExercise(){
    if(this.onPastExercise){
      this.exerciseSours.next({...this.onPastExercise})
    }
  }

  doneExercise() {
    if (this.runningExercise) {
      this.pastExercise.push({...this.runningExercise, date: new Date(), state: 'complete'})
    }
    this.runningExercise = undefined
    this.currentExercise.next(undefined)

  }

  cancelExercise(progress: number) {
    if (this.runningExercise) {
      this.pastExercise.push({
        ...this.runningExercise,
        duration: this.runningExercise.duration * (progress / 100),
        calorie: this.runningExercise.calorie * (progress / 100),
        date: new Date(),
        state: 'cancel'
      })
    }
    this.runningExercise = undefined
    this.currentExercise.next(undefined)

  }

  getRunningExercise() {
    return {...this.runningExercise}
  }
}



