import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { TrainsListService } from 'src/app/trains-list.service';
import { TrainsData } from './trainsData.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  
  // to add new train
  addTrainForm!:FormGroup;
  trainsDataModelObj:TrainsData=new TrainsData();

  // to edit and add
  showAdd!:boolean;
  showEdit!:boolean;


  // to store trains list
  trainsList :any=null;
  

   // search train by source and destination
   source;
   destination;
 
   constructor(private trainsListServcie:TrainsListService ,private router:Router, private formBuilder:FormBuilder) {
 
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

    // to new train to the list
    this.addTrainForm=this.formBuilder.group({
      trainName:[''],
      source:[''],
      destination:[''],
      price:[''],
      seats:[''],
      time:['']

    });


    
  }

  clickAddTrain(){
    this.addTrainForm.reset();
    this.showAdd=true;
    this.showEdit=false;
  }


  //now subscribing data
  addTrain(){
    this.trainsDataModelObj.trainName=this.addTrainForm.value.trainName;
    this.trainsDataModelObj.source=this.addTrainForm.value.source;
    this.trainsDataModelObj.destination=this.addTrainForm.value.destination;
    this.trainsDataModelObj.price=this.addTrainForm.value.price;
    this.trainsDataModelObj.seats=this.addTrainForm.value.seats;
    this.trainsDataModelObj.time=this.addTrainForm.value.time;

    this.trainsListServcie.addTrain(this.trainsDataModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Train Added SuccessFully!");
      this.addTrainForm.reset();
      this.getTrainsList();
    },
    error=>{
      alert("Something went Wrong!!!");
    }
    )
    
  }


  /*Delete the trains by id */
  deleteTrain(train){
    this.trainsListServcie.deleteTrainById(train.trainId)
    .subscribe(res=>{
      console.log(res);
      alert("Train Deleted Successfully!")
      this.getTrainsList();
    })
    
    
   
   
      // alert("Train Deleted Successfully!");
      // this.getTrainsList();
   
  }


  /*Delete the trains by id *
  deleteTrain(train){
    this.trainsListServcie.deleteTrainById(train.trainId)
    .subscribe(
      (resp) =>{
        console.log(resp);
      },
      (error)=>{
        console.log(error);
      }
    );
  } 
*/
  onEditTrain(train:any){

    this.showAdd=false;
    this.showEdit=true;

    this.trainsDataModelObj.trainId=train.trainId;
    this.addTrainForm.controls['trainName'].setValue(train.trainName);
    this.addTrainForm.controls['source'].setValue(train.source);
    this.addTrainForm.controls['destination'].setValue(train.destination);
    this.addTrainForm.controls['price'].setValue(train.price);
    this.addTrainForm.controls['seats'].setValue(train.seats);
    this.addTrainForm.controls['time'].setValue(train.time);
  }

  updateTrain(){

    
    this.trainsDataModelObj.trainName=this.addTrainForm.value.trainName;
    this.trainsDataModelObj.source=this.addTrainForm.value.source;
    this.trainsDataModelObj.destination=this.addTrainForm.value.destination;
    this.trainsDataModelObj.price=this.addTrainForm.value.price;
    this.trainsDataModelObj.seats=this.addTrainForm.value.seats;
    this.trainsDataModelObj.time=this.addTrainForm.value.time;

    this.trainsListServcie.updateTain(this.trainsDataModelObj,this.trainsDataModelObj.trainId)
    .subscribe(res=>{
      alert("Train Updated Successfully!");

      this.addTrainForm.reset();
      this.getTrainsList();

    })

  }


  // to deletee train
 /* removeTrain(id:number){
    let resp=this.trainsListServcie.deleteTrain(id);
    resp.subscribe((data)=>
      this.trainsList=data
    );
  }*/
  




}
