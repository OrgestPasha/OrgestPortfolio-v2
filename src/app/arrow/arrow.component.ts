import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [],
  templateUrl: './arrow.component.html',
  
})
export class ArrowComponent {

  constructor(public Service:ServiceService){}

}
