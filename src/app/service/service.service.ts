import { Injectable } from '@angular/core';
import{RouterModule,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})



export class ServiceService {

  private endpoint = 'http://localhost:3000/send';
  constructor(private router: Router,private http: HttpClient) { }

  public colorPrimary:any="#000000";
  public colorSecondary:any="#FFFFFF";

  public isHovered:boolean=false;


  public changeMode(){
   let colorTemp=this.colorPrimary;
   this.colorPrimary=this.colorSecondary;
   this.colorSecondary=colorTemp;
  }

  scrollToElement(id: string): void {
    this.router.navigate([], { fragment: id });
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    
  }


  sendEmail(emailData: any) {
    return this.http.post(this.endpoint, emailData, { observe: 'response', });
  }


  
}
