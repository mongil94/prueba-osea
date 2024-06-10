import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONTEXT } from '../constants/api-context.constant';
import { SongResponse } from '../interfaces/song/song-response.interface';
import { ArtistResponse } from '../interfaces/artists/artist-response.interface';
import { CompanyResponse } from '../interfaces/company/company-response.interface';

@Injectable()
export class CoreService {
  constructor(private _http: HttpClient) {}

  public getSongs(): Observable<SongResponse> {
    return this._http.get<SongResponse>(`${API_CONTEXT}/songs`);
  }

  public getArtists(): Observable<ArtistResponse> {
    return this._http.get<ArtistResponse>(`${API_CONTEXT}/artists`);
  }

  public getCompanies(): Observable<CompanyResponse> {
    return this._http.get<CompanyResponse>(`${API_CONTEXT}/companies`);
  }
}
