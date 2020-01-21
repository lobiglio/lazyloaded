import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { PlaylistCreateComponent } from './playlist-create/playlist-create.component';


@NgModule({
  declarations: [PlaylistComponent, PlaylistDetailsComponent, PlaylistCreateComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
