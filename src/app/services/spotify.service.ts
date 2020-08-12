import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  token:string = "Bearer BQAXA1m0Op6CqHNfxbyqvOLIiM1ziPGAAWWrf7y_KfuPDQDH-YSh1q261btrdd2dT5l857nuLb0uHUrvRz0";

  constructor(private http : HttpClient) { }

  getQuery(query : string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders ({
      'Authorization' : this.token
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases?limit=20`)
                  .pipe( map((res:any) => {
                    return res.albums.items;
                  }));
  }

  getArtistByName(name : string) {
    return this.getQuery(`search?q=${name}&type=artist`)
                  .pipe( map((res:any) => {
                    return res.artists.items;
                  }));
  }

  getArtistById(id : string) {
    return this.getQuery(`artists/${id}`)
                  .pipe( map((res:any) => {
                    return res;
                  }));
  }

  getTopTracks(id : string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                  .pipe( map((res:any) => {
                    return res.tracks;
                  }));
  }
}
