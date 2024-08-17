import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  toggleValue:boolean=true;

  toggleActive={
    'transform':'translateX(100%)',
    'transition':'all 200ms ease-out'
  }

  toggleMode(){}
 

}
