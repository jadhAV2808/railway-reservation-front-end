import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainsListService } from 'src/app/trains-list.service';

@Component({
  selector: 'app-trains-list',
  templateUrl: './trains-list.component.html',
  styleUrls: ['./trains-list.component.css']
})
export class TrainsListComponent implements OnInit {


  // to store trains list
  trainsList :any=null;

  // search train by source and destination
  source;
  destination;

  constructor(private trainsListServcie:TrainsListService ,private router:Router) {

    this.getTrainsList();

   }

  // get all trains
  getTrainsList(){
    this.trainsListServcie.getTrainsList().subscribe(
      (resp) => {
        console.log(resp);
        this.trainsList=resp;
      },
      (error) =>{
        console.log(error);
      }
    );
  }


  //search train by source and destination
  searchTrain(){
    this.trainsListServcie.searchTrain(this.source,this.destination).subscribe(
      (resp) => {
        console.log(resp);
        this.trainsList=resp;
      },
      (error) =>{
        console.log(error);
      }
    )
  }
  



  ngOnInit(): void {

  }


  goBack(){
    this.router.navigate(['/home']);
  }

}
