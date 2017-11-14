import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleImaPlayerComponent } from './google-ima-player.component';
import { VgCoreModule } from 'videogular2-betatester/core';
import { VgControlsModule } from 'videogular2-betatester/controls';
import { VgOverlayPlayModule } from 'videogular2-betatester/overlay-play';
import { VgImaAdsModule } from 'videogular2-betatester/ima-ads';

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgImaAdsModule
    ],
    declarations: [ GoogleImaPlayerComponent ]
})
export class GoogleImaPlayerModule {
}
