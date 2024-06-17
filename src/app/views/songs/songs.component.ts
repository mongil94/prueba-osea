import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, first } from 'rxjs';
import { OriginEnum } from 'src/app/enums/origin.enum';
import { SongResponse } from 'src/app/interfaces/song/song-response.interface';
import { CoreService } from 'src/app/services/core.service';

@Component({
  templateUrl: 'songs.component.html',
})
export class SongComponent implements OnInit, OnDestroy {
  constructor(private _coreService: CoreService) {}

  private _destroy$: Subject<void> = new Subject<void>();

  public dataTable: SongResponse[];

  private _getSongs() {
    this._coreService
      .getSongs()
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.dataTable = response;
          this._coreService.setSongData(response);
        },
      });
  }

  ngOnInit(): void {
    this._getSongs();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
