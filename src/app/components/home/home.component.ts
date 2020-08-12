import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albums:any[] = [];
  loading:boolean;
  error:boolean;
  message:string;

  constructor(private spotifyService : SpotifyService) { 
    this.loading = true;
    this.error = false;
  }

  ngOnInit(): void {
    this.spotifyService.getNewReleases().subscribe(res => {
      console.log(res)
      this.albums = res;
      this.loading= false;
    }, (err) => {
      this.loading = false;
      this.error = true;
      this.message = err.error.error.message;
    })
  }

}
