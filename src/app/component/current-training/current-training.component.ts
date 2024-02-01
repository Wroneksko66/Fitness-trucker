import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";
import {StopTrainingComponent} from "../stop-training/stop-training.component";
import {TrainingService} from "../training/service/training.service";

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() stopTimer = new EventEmitter<void>();
  progress: number = 0;
  timer: NodeJS.Timeout | undefined
  step: number | undefined = this.trainingService.getRunningExercise().duration

  constructor(private dialog: MatDialog, private trainingService: TrainingService) {
  }

  ngOnInit(): void {
    this.startOrResumeTimer()
  }

  startOrResumeTimer() {
    let stepValue = 0;
    if (this.step) {
      stepValue = this.step / 100 * 1000
    }
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      console.log(this.progress)
      if (this.progress >= 100) {

        this.trainingService.doneExercise()
        this.progress = 0
        clearInterval(this.timer)
      }
    }, stepValue)
  }

  openDialog() {
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingService.cancelExercise(this.progress)
        clearInterval(this.timer)
      } else {
        this.startOrResumeTimer()
      }

    })
  }

}
