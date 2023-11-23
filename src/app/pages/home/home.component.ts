import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequesthandlerService } from 'src/services/requesthandler.service';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  articles: any[] = [];
  testimonials: any[] = [];
  height!: number;
  weight!: number;
  bmi!: number;
  category!: string;

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperTestimonial') swiperTestimonial!: ElementRef<SwiperContainer>;

  constructor(private request: RequesthandlerService, private router: Router, private route: ActivatedRoute) {
    this.getTestimonials();
    this.getArticles();
  }

  ngOnInit() {
    let slug = this.route.snapshot.paramMap.get('slug');
  }

  getArticles() {
    this.request.getArticles().subscribe(
      result => {
        this.articles = result;
      });
  }

  getTestimonials() {
    this.request.getTestimonials().subscribe(
      result => {
        this.testimonials = result;
      }
    )
  }

  calculateBMI(): void {
    const heightInMeters = this.height / 100;
    var roundedBMI = this.weight / (heightInMeters * heightInMeters);
    if (roundedBMI < 18.5) {
      this.category = 'Underweight';
    } else if (roundedBMI >= 18.5 && roundedBMI < 25) {
      this.category = 'Normal weight';
    } else if (roundedBMI >= 25 && roundedBMI < 30) {
      this.category = 'Overweight';
    } else {
      this.category = 'Obese';
    }
    this.bmi = parseFloat(roundedBMI.toFixed(2))
  }

  index = 0;

  // Swiper
  swiperConfig: SwiperOptions = {
    // spaceBetween: 30,
    // navigation: true,
    // slidesPerView: 3,
    // speed: 1200,
    // loop: true,
    // effect: 'slide',
    // autoplay: {
    //   delay: 1000,
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  }

  swiperTestimonialConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
  }

  ngAfterViewInit() {
    // this.swiper.nativeElement.swiper.activeIndex = this.index;
    // this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }

  goNext() {
    this.swiper.nativeElement.swiper.slideNext(1000);
  }

  goPrev() {
    this.swiper.nativeElement.swiper.slidePrev(1000);
  }
}
