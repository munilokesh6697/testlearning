import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  getId:any;
  retriveById:any;
  editData: any;
  editSbmtlist:any;
  constructor(private route : ActivatedRoute,private data: DataService,private router: Router) {
    var id = this.route.params.subscribe(params=>this.getId=params);
    this.editData= {
      'packer_id': '',
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
    // console.log(this.getId.id);
    this.data.getIdRetrive(this.getId.id).subscribe(data =>{
      this.retriveById = data;
      this.editData.packer_id = this.retriveById[0].packer_id;
      this.editData.packer_name = this.retriveById[0].packer_name;
      this.editData.packer_email = this.retriveById[0].packer_email;
      this.editData.packer_mobile = this.retriveById[0].packer_mobile;
      this.editData.packer_location_from = this.retriveById[0].packer_location_from;
      this.editData.packer_location_to = this.retriveById[0].packer_location_to;
      this.editData.contacted_date = this.retriveById[0].contacted_date;
      this.editData.VehicleNo = this.retriveById[0].VehicleNo;
      this.editData.VehicleType = this.retriveById[0].VehicleType;
      this.editData.DriverName = this.retriveById[0].DriverName;
      this.editData.payment = this.retriveById[0].payment;
    })
  }
  EditsbmitForm(){
    this.data.editSbmt(this.editData).subscribe(data=>{
      this.editSbmtlist = data;
      console.log(this.editSbmtlist);
      this.router.navigate(['/home'])
    })
  }

}
