import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequesthandlerService } from 'src/services/requesthandler.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  articles: any[] = [];
  currentArticle! : any;
  slug! : any;

  constructor(private request: RequesthandlerService, private router: Router, private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.getArticles();
  }
  ngOnInit() {
   console.log("Innit...");
  }
  
  getArticles() {
    this.request.getArticles().subscribe(
      result => {
        this.articles = result;
        this.currentArticle = this.articles.filter(a=> a.slug === this.slug)[0];
      });
  }
}
