import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser,CommonModule } from '@angular/common';
import { format, toZonedTime } from 'date-fns-tz';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  
  formattedTime: string = "";
  isBrowser: boolean;

  constructor(
    public Service: ServiceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.updateFormattedTime();
      setInterval(() => {
        this.updateFormattedTime();
      }, 1000);
    }
  }

  private updateFormattedTime(): void {
    const timeZone = 'Europe/Belgrade';
    const now = new Date();
    const zonedTime = toZonedTime(now, timeZone);
    this.formattedTime = format(zonedTime, 'HH:mm:ss', { timeZone });
  }
}