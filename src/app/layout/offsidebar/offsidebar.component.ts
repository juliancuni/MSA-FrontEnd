// import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

// import { SettingsService } from '../../core/settings/settings.service';
// import { ThemesService } from '../../core/themes/themes.service';
// import { TranslatorService } from '../../core/translator/translator.service';

// @Component({
//     selector: 'app-offsidebar',
//     templateUrl: './offsidebar.component.html',
//     styleUrls: ['./offsidebar.component.scss']
// })
// export class OffsidebarComponent implements OnInit, OnDestroy {

//     currentTheme: any;
//     selectedLanguage: string;

//     constructor(public settings: SettingsService, public themes: ThemesService, public translator: TranslatorService, public elem: ElementRef) {
//         this.currentTheme = themes.getDefaultTheme();
//     }

//     ngOnInit() {
//         this.anyClickClose();
//     }


//     anyClickClose() {
//         document.addEventListener('click', this.checkCloseOffsidebar.bind(this), false);
//     }

//     checkCloseOffsidebar(e) {
//         const contains = (this.elem.nativeElement !== e.target && this.elem.nativeElement.contains(e.target));
//         if (!contains) {
//             this.settings.setLayoutSetting('offsidebarOpen', false);
//         }
//     }

//     ngOnDestroy() {
//         document.removeEventListener('click', this.checkCloseOffsidebar);
//     }
// }
