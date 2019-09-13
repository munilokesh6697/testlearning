import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  sendForm(insertData){
    const header = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    let body = 'user_email='+insertData.user_email+'&user_password='+insertData.user_password;
    return this.http.post("http://rmserve.realtymonk.com:3000/api/loginnow",body,{headers:header})
  }

  // PostAddData(addPackers){
  //   const header = new HttpHeaders().set('content-type','application/x-www-form-urlencoded');
  //   let add = 'packer_name='+addPackers.packer_name+'&packer_email='+addPackers.packer_email+'&packer_mobile='+addPackers.packer_mobile+'&packer_location_from='+addPackers.packer_location_from+'&packer_location_to='+addPackers.packer_location_to+'&contacted_date='+addPackers.contacted_date+'&VehicleNo='+addPackers.VehicleNo+'&VehicleType='+addPackers.VehicleType+'&DriverName='+addPackers.DriverName+'&payment='+addPackers.payment; 
  //   return this.http.post("https://www.realtymonk.com/websapi/add-packagers-movers",add,{headers:header});
  // }
  PostAddData(postData){    
    return this.http.post("https://www.realtymonk.com/websapi/add-packagers-movers", postData);
  }
  getData(pageNo){
    return this.http.get("https://www.realtymonk.com/websapi/packagers-movers/"+pageNo)
  }
  delId(id){
    return this.http.get("https://www.realtymonk.com/websapi/del-packagers-movers/"+id);
  }
  getIdRetrive(packer_id){
    return this.http.get("https://www.realtymonk.com/websapi/packagers-movers/pkgid/"+packer_id)
  }
  editSbmt(EditPackers){
    const header = new HttpHeaders().set('content-type','application/x-www-form-urlencoded');
    let add = 'packer_id='+EditPackers.packer_id+'&packer_name='+EditPackers.packer_name+'&packer_email='+EditPackers.packer_email+'&packer_mobile='+EditPackers.packer_mobile+'&packer_location_from='+EditPackers.packer_location_from+'&packer_location_to='+EditPackers.packer_location_to+'&contacted_date='+EditPackers.contacted_date+'&VehicleNo='+EditPackers.VehicleNo+'&VehicleType='+EditPackers.VehicleType+'&DriverName='+EditPackers.DriverName+'&payment='+EditPackers.payment; 
    return this.http.post("https://www.realtymonk.com/websapi/update-packagers-movers",add,{headers:header});
  }
}
