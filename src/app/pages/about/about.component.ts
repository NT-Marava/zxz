import { Component } from '@angular/core';
import { RequesthandlerService } from 'src/services/requesthandler.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  testimonials: any[] = [];
  constructor(private request: RequesthandlerService) {
    this.getTestimonials();
    this.scrollToTop();
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getTestimonials() {
    this.request.getTestimonials().subscribe(
      result => {
        this.testimonials = result;
      }
    )
  }
}
