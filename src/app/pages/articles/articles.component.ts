import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequesthandlerService } from 'src/services/requesthandler.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles: any[] = [];

  constructor(private request: RequesthandlerService, private router: Router, private route: ActivatedRoute) {

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


}
