import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  episodes: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.episodes = this.http.get('https://www.breakingbadapi.com/api/episodes');
    this.episodes.subscribe(data => {
      console.log('my episodes: ', data);
    });
  }
 
  openDetails(episodes) {
    
    let id = episodes.episode_id;
    this.router.navigateByUrl(`/tabs/episodes/${id}`);
  }
}
