import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HlsButtonModule } from '@shared/components/button/button.module';
import { HlsLabelModule } from '@shared/components/label/label.module';
import { HlsPaletteModule } from '@shared/components/palette/palette.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HlsButtonModule,
    HlsLabelModule,
    HlsPaletteModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
