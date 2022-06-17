import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BotoneraInicioPageModule} from './components/botonera-inicio/botonera-inicio.module';
import {HomePageModule} from './home/home.module';
import {ComponentsModule} from "./components/components.module";


@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        BotoneraInicioPageModule,
        HomePageModule,
        HttpClientModule,
        ComponentsModule
    ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
