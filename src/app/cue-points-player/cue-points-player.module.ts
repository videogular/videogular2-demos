import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuePointsPlayerComponent } from './cue-points-player.component';
import { VgCoreModule } from 'videogular2-betatester/core';
import { VgOverlayPlayModule } from 'videogular2-betatester/overlay-play';
import { VgControlsModule } from 'videogular2-betatester/controls';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgOverlayPlayModule,
        VgControlsModule
    ],
    declarations: [ CuePointsPlayerComponent ]
})
export class CuePointsPlayerModule {
}
