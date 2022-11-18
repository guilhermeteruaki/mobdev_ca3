import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.characters = this.http.get('https://www.breakingbadapi.com/api/characters');
    this.characters.subscribe(data => {
      console.log('my characters: ', data);
    });
  }
 
  openDetails(characters) {
    
    let id = characters.char_id;
    this.router.navigateByUrl(`/tabs/characters/${id}`);
  }
}
