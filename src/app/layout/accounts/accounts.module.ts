import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountsRoutingModule} from './accounts-routing.module';
import {AccountsComponent} from './accounts.component';
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {TableComponent} from "./components/table/table.component";
import {CreateAppModalComponent} from "./components/createApp-modal/createApp-modal.component";
import { FormsModule }  from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AccountsRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    declarations: [AccountsComponent,
        TableComponent,
        CreateAppModalComponent
    ]
})
export class AccountsModule {
}
