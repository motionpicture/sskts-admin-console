import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { SettingsRoutingModule, routedComponents } from './search-routing.module';

@NgModule({
    imports: [
        ThemeModule,
        SettingsRoutingModule,
        Ng2SmartTableModule,
    ],
    declarations: [
        ...routedComponents,
    ],
    providers: [
    ],
})
export class SearchModule { }
