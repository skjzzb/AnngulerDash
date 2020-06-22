import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  constructor(private http : HttpClient) { }

  getCvData(){
    return this.http.get("https://cv-processing-api.herokuapp.com/v1/doc")
  }

}
