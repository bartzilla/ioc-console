import {Component, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationService} from "../../../../shared/services/application.service";
import {Application} from "../../../../domain/Application";

@Component({
    selector: 'createApp-modal',
    templateUrl: './createApp-modal.component.html',
    styleUrls: ['./createApp-modal.component.scss']
})
export class CreateAppModalComponent {
    closeResult: string;
    name: string;
    description: string;
    modalRef: NgbModalRef;

    @Input() apps: Array<Application>;
    constructor(private modalService: NgbModal, private applicationService: ApplicationService) { }

    open(content) {
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    createApplication(event) {
        event.preventDefault();
        var newApplication = {
            name: this.name,
            description: this.description
        };

        this.applicationService.createApplication(newApplication).subscribe(application => {
            this.apps.push(newApplication);
            this.modalRef.close();
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
