import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  quotes: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.quotes = this.http.get('https://www.breakingbadapi.com/api/quotes');
    
  
  }

}
