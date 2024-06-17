import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { Subject, takeUntil } from 'rxjs';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'filter-songs',
  templateUrl: 'filter-songs.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule,
    MatCardModule,
  ],
})
export class FilterSongComponent implements OnInit, OnDestroy {
  constructor(private _coreService: CoreService) {}

  private _destroy$: Subject<void> = new Subject<void>();

  public filterSongForm = new FormGroup({
    songName: new FormControl('', { nonNullable: true }),
  });

  ngOnInit(): void {
    this.filterSongForm
      .get('songName')
      ?.valueChanges.pipe(takeUntil(this._destroy$))
      .subscribe((newValue) => this._coreService.receiveSongFilter(newValue));
  }
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
