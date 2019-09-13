import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, FormBuilder} from '@angular/forms'
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  store:any;
  register:any;
  registerForm:any;
  setVal:any;
  storeGetItem:any;
  

  constructor(private fb : FormBuilder, private data : DataService,private route : Router) {
    this.store = sessionStorage.getItem('loginuser');
    console.log(this.store);
    if(this.store =="" || this.store==null){
      this.route.navigate(["/signin"]);
    } else{
      // this.router.navigate(["/content"]);
    }
   }
  
  ngOnInit() {
   
    this.register = this.fb.group({
      user_email : '',
      user_password:''
    });

  }
  sbmitForm(){
    this.data.sendForm(this.register.value).subscribe(data=>{
      this.registerForm = data;

      var codes = data['code'];
      // console.log(data['loginData'][0].user_id);
      
      if(codes == 200){

        this.setVal =sessionStorage.setItem('loginuser', data['loginData'][0].user_id);
        
        this.route.navigate(['/home']);
        // this.store = sessionStorage.getItem('loginuser');
        
        // console.log(sessionStorage.getItem('loginuser'));
        // if (this.store == '') {
        //   this.route.navigate(['/']);
        // } else {
        //   
        // }
      }

    })
  }

}
