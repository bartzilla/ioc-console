import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {ApplicationService} from "../../../../shared/services/application.service";

@Component({
    selector: 'createApp-modal',
    templateUrl: './createApp-modal.component.html',
    styleUrls: ['./createApp-modal.component.scss']
})
export class CreateAppModalComponent {
    closeResult: string;

    constructor(private modalService: NgbModal, private applicationService: ApplicationService) { }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    createApplication(event) {
        event.preventDefault();

        var newApplication = {
            applicationName: "ui-app"
        };


        this.applicationService.createApplication(newApplication).subscribe(application => {
            console.log('This is the new application', application);
            close();
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
