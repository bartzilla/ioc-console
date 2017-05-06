import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ApplicationsRoutingModule} from './applications-routing.module';
import {ApplicationsComponent} from './applications.component';
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {TableComponent} from "./components/table/table.component";
import {CreateButtonComponent} from "./components/create-button/create-button.component";
import {CreateAppModalComponent} from "./components/createApp-modal/createApp-modal.component";
import { FormsModule }  from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ApplicationsRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    declarations: [ApplicationsComponent,
        TableComponent,
        CreateAppModalComponent,
        CreateButtonComponent
    ]
})
export class ApplicationsModule {
}
