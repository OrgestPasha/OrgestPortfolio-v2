import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(public Service:ServiceService){}

  ngOnInit():void{
     let colorPrimary:any=this.Service.colorPrimary;
  }

  toggleValue:boolean=true;

  getStyles() {
    return {
      'background-color': this.Service.colorPrimary,
      ...(this.toggleValue ? this.toggleActive : {})
    };
  }

  toggleActive={
    'transform':'translateX(100%)',
    'transition':'all 200ms ease-out'
  }

  toggleMode(){
    this.Service.changeMode();
  }
 

}
