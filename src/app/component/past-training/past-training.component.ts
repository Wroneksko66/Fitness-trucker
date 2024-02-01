import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TrainingService} from "../training/service/training.service";
import {Exercise} from "../training/interface/exercise.interface";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.scss']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (!this.dataSource.sort) {
      this.dataSource.sort = sort;
    }
  }
  displayedColumns: string[] = ['date', 'name', 'duration', 'calorie', 'state']
  dataSource = new MatTableDataSource<Exercise>()

  subscriptionExercise:Subscription | undefined;
  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    // this.dataSource.data = this.trainingService.onPastExercise
    //
    // console.log(this.dataSource.data)
    this.trainingService.addPastExercise()
  }
ngAfterViewInit() {

}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
