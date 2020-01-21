import { PlaylistCreateComponent } from './playlist-create/playlist-create.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist.component';

const routes: Routes = [
  { path: '', component: PlaylistComponent },
  { path: 'details', component: PlaylistDetailsComponent },
  { path: 'create', component: PlaylistCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
