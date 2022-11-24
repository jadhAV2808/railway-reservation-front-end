import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
}
