import { Injectable } from '@angular/core';
import{Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})



export class ServiceService {

  private endpoint = 'https://email-sender-z9lk.onrender.com/api/send-email';
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


  sendEmail(emailData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.endpoint, JSON.stringify(emailData), { headers: headers, observe: 'response' });
  }


  
}
