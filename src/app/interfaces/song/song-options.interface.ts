import { OriginEnum } from 'src/app/enums/origin.enum';
import { SongResponse } from './song-response.interface';

export interface SongOptions {
  // origin: OriginEnum;
  songTable: SongResponse[];
}
