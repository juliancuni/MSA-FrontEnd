// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { LOCALE_ID, NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common'
import localeAl from '@angular/common/locales/sq';

registerLocaleData(localeAl, 'al');

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

import { RoutesModule } from './routes/routes.module';
import { AuthModule } from './auth/auth.module';
import { SDKBrowserModule } from './shared/sdk/index';

import { MsToasterService, ModalService } from './shared/services';
// import { KyPerdoruesService } from './shared/services/kyPerdorues.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule, // required for ng2-tag-input
        CoreModule,
        LayoutModule,
        SharedModule.forRoot(),
        SDKBrowserModule.forRoot(),
        AuthModule,
        RoutesModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        ToasterService,
        MsToasterService,
        ModalService,
        // KyPerdoruesService,
        { provide: LOCALE_ID, useValue: "al" }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
