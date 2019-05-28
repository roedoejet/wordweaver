// Core
import { NgModule } from '@angular/core';

// Imports
import { AnimateOnlyPipe } from './animate-only/animate-only';
import { CapitalizePipe } from './capitalize/capitalize';
import { DecapitalizePipe } from './decapitalize/decapitalize';

@NgModule({
	declarations: [AnimateOnlyPipe,
    CapitalizePipe, DecapitalizePipe],
	imports: [],
	exports: [AnimateOnlyPipe,
    CapitalizePipe, DecapitalizePipe]
})
export class PipesModule {}
