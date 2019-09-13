import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  retrivedatalist:any;
  pageno = 1;
  deleteListId:any;
  constructor(private data :DataService) { }

  ngOnInit() {
    this.data.getData(this.pageno).subscribe(data=>{
      this.retrivedatalist = data;
      console.log(this.retrivedatalist);
      
    })
  }
  deletepacId(id){
    this.data.delId(id).subscribe(data=>{
      this.deleteListId = data;
    })
  }

}
