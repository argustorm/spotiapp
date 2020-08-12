import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists:any[] = [];
  loading:boolean;
  error:boolean;
  message:string;

  constructor(private spotifyService : SpotifyService) { 
    this.error = false;
  }

  ngOnInit(): void {
  }

  showText(text : string) {
    this.loading = true;
    this.spotifyService.getArtistByName(text).subscribe(res => {
      this.artists = res;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      this.error = true;
      this.message = err.error.error.message;
    })
  }

}
