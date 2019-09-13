import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addPackers:any;
  insertPack:any;
  constructor(private data : DataService, private route: Router) {
    this.addPackers = {
      'packer_name' : '',
      'packer_mobile': '',
      'packer_email': '',
      'packer_location_from': '',
      'packer_location_to': '',
      'contacted_date': '',
      'VehicleNo': '',
      'VehicleType': '',
      'DriverName': '',
      'payment': ''
    }
   }

  ngOnInit() {
  }
  sbmitForm(){
    this.data.PostAddData(this.addPackers).subscribe(data=>{
      this.insertPack = data;
      this.route.navigate(['/home'])
    })
  }

}
