import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoundPlayerComponent } from './bound-player.component';
import { FormsModule } from '@angular/forms';
import { VgCoreModule } from 'videogular2-betatester/core';
import { VgControlsModule } from 'videogular2-betatester/controls';
import { VgOverlayPlayModule } from 'videogular2-betatester/overlay-play';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule
    ],
    declarations: [ BoundPlayerComponent ]
})
export class BoundPlayerModule {
}
