import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ApplicationsRoutingModule} from './applications-routing.module';
import {ApplicationsComponent} from './applications.component';
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {TableComponent} from "./components/table/table.component";
import {CreateButtonComponent} from "./components/create-button/create-button.component";

@NgModule({
    imports: [
        CommonModule,
        ApplicationsRoutingModule,
        PageHeaderModule
    ],
    declarations: [ApplicationsComponent,
        TableComponent,
        CreateButtonComponent
    ]
})
export class ApplicationsModule {
}
