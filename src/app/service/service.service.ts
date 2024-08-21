import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public colorPrimary:any="#000000";
  public colorSecondary:any="#FFFFFF";

  public isHovered:boolean=false;
  public isHoveredClick:boolean=false;

  public changeMode(){
   let colorTemp=this.colorPrimary;
   this.colorPrimary=this.colorSecondary;
   this.colorSecondary=colorTemp;
  }
  constructor() { }
}
