import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePlayerComponent } from './single-player.component';
import { VgCoreModule } from 'videogular2-betatester/core';
import { VgControlsModule } from 'videogular2-betatester/controls';
import { VgOverlayPlayModule } from 'videogular2-betatester/overlay-play';
import { VgBufferingModule } from 'videogular2-betatester/buffering';


@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    declarations: [ SinglePlayerComponent ]
})
export class SinglePlayerModule {
}
