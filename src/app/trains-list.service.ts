import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TrainsListService {

  constructor(private http:HttpClient) { }

  api='http://localhost:3031';




  // http get all trains list
  public getTrainsList(){
    return this.http.get(this.api+'/trains/allTrains');
  }


  // search trains by source and destinaation
  public searchTrain(source ,destination ){
    return this.http.get(this.api+'/trains/searchTrain/'+source+'/'+destination);
  }

  /*add new train to the list*/
  public addTrain(data){
    return this.http.post<any>(this.api+'/trains/addTrain',data)
    .pipe(map((res:any)=>{
      return res;
    }));
  }


  /*update trains data */
  updateTain(data:any , id:number){
    return this.http.put<any>(this.api+'/trains/updateTrain/'+id , data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  /* delete train by id */
  public deleteTrainById(id:number){
    return this.http.delete<any>(this.api+'/trains/deleteTrain/'+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  /*delete train by id  */
  public deleteTrain(id){
    this.http.delete(this.api+'/trains/deleteTrain/'+id);
  }


}
