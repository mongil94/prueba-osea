import { Component, Input, OnInit } from '@angular/core';
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
import { SongResponse } from 'src/app/interfaces/song/song-response.interface';

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
  ],
})
export class FilterSongComponent implements OnInit {
  public filterSongForm = new FormGroup({
    songName: new FormControl(''),
  });
  @Input() data: SongResponse[];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
