import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongComponent } from './views/songs/songs.component';

const routes: Routes = [{ path: '', component: SongComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
