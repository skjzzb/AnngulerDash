import {Component, OnInit, ViewChild} from '@angular/core';
import { CvServiceService } from 'src/app/cv-service.service';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSort, MatSortable  } from "@angular/material/sort";
import { MatTableDataSource, MatTable} from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';


interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styles: []
})
export class RegularComponent implements OnInit {

  cvInfo : any
  value : any

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource ;


  displayedColumns : [ 'id', 'folderName', 'noCV', 'edit', 'delete']

  serachHere : any
  p : number=1


  heading = 'Regular Tables';
  subheading = 'Tables are the backbone of almost all web applications.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  constructor( private cvService : CvServiceService, private router : Router, private route : ActivatedRoute) 
  {     }

  countries = COUNTRIES;

  ngOnInit() {
    let obResult = this.cvService.getCvData()
    obResult.subscribe(data=>{
      console.log(data)
      this.cvInfo = data,
      this.dataSource = new MatTableDataSource(this.cvInfo );
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator;
    })
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
