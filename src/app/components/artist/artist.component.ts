import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist:any = {};
  tracks:any[] = [];

  constructor(private activatedRoute : ActivatedRoute,
              private spotifyService : SpotifyService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.getArtistById(res['id']);
      this.getTopTracks(res['id']);
    });
  }

  getArtistById(id : string) {
    this.spotifyService.getArtistById(id).subscribe(res => {
      this.artist = res;
    })
  }

  getTopTracks(id : string) {
    this.spotifyService.getTopTracks(id).subscribe(res => {
      console.log(res)
      this.tracks = res;
    });
  }

}
