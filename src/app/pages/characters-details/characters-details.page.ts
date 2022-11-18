import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.page.html',
  styleUrls: ['./characters-details.page.scss'],
})
export class CharactersDetailsPage implements OnInit {

  characters: any;
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`).subscribe(res => {
      this.characters = res[0]; 
    });
  }

} 