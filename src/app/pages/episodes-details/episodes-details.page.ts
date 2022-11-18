import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.page.html',
  styleUrls: ['./episodes-details.page.scss'],
})
export class EpisodesDetailsPage implements OnInit {

  episodes: any;
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit() {
    let epid = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://www.breakingbadapi.com/api/episodes/${epid}`).subscribe(res => {
      this.episodes = res[0]; 
    });
  }
  

}