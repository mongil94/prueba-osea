import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONTEXT } from '../constants/api-context.constant';
import { ArtistResponse } from '../interfaces/artists/artist-response.interface';
import { CompanyResponse } from '../interfaces/company/company-response.interface';
import { BehaviorSubject, delay, map } from 'rxjs';
import { SongResponse } from '../interfaces/song';
import { EMPTY_SONG } from '../mocks';

const songOptions: SongResponse[] = EMPTY_SONG;

@Injectable()
export class CoreService {
  constructor(private _http: HttpClient) {}

  private _songData$ = new BehaviorSubject<SongResponse[]>(songOptions);
  private _songTable: SongResponse[];

  get songData$(): Observable<SongResponse[]> {
    return this._songData$;
  }

  public setSongData(value: SongResponse[]) {
    this._songData$.next(value);
    console.log(value);
  }

  public getSongs(): Observable<SongResponse[]> {
    return this._http.get<SongResponse[]>(`${API_CONTEXT}/songs`).pipe(
      delay(1000),
      map((response) => (this._songTable = response))
    );
  }

  public getArtists(): Observable<ArtistResponse[]> {
    return this._http
      .get<ArtistResponse[]>(`${API_CONTEXT}/artists`)
      .pipe(delay(1000));
  }

  public getCompanies(): Observable<CompanyResponse[]> {
    return this._http
      .get<CompanyResponse[]>(`${API_CONTEXT}/companies`)
      .pipe(delay(1000));
  }

  public receiveSongFilter(value: string) {
    const tableFilteredBySongName: SongResponse[] = this._songTable.filter(
      (item) => item.title.toUpperCase().includes(value.toUpperCase())
    );
    this.setSongData(tableFilteredBySongName);
  }
}
