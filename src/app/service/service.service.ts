import { Injectable } from '@angular/core';
import{RouterModule,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public colorPrimary:any="#000000";
  public colorSecondary:any="#FFFFFF";

  public isHovered:boolean=false;


  public changeMode(){
   let colorTemp=this.colorPrimary;
   this.colorPrimary=this.colorSecondary;
   this.colorSecondary=colorTemp;
  }
  constructor(private router: Router) { }

  scrollToElement(id: string): void {
    this.router.navigate([], { fragment: id });
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    
  }

  
}
