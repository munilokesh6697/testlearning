import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
// import{SigninComponent} from '../signin/signin.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginVal:any;
  darkLogo:boolean = false;
  constructor(private route: Router) { 
    this.loginVal = sessionStorage.getItem("loginuser")
    // console.log(this.loginVal);
    
  }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  showOpc(event) {
    const verticalOffset = window.pageYOffset;
    if(verticalOffset>100){
      this.darkLogo = true;
    }else{
      this.darkLogo = false;
    }
  }
  logout(){
    sessionStorage.removeItem('loginuser'); 
    this.route.navigate(["/"]);

  }
}
