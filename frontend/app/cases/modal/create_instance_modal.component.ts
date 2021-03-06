import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'create-instance-modal',
    templateUrl: 'templates/cases/modal/create_instance_modal.component.html'
})
export class CreateInstanceModalComponent {

    @Output() public modalOutput: EventEmitter<any> = new EventEmitter();

    isVisible: boolean;
    validFieldValues: boolean;

    showModal() {
        this.isVisible = true;
        this.validFieldValues = true;
    }

    submit(type: string, customer: string) {
        if (!_checkFieldValues()) {
            this.validFieldValues = false;
            return;
        }
        this.close();
        this.modalOutput.emit({
            type: type,
            customer: customer
        });

        function _checkFieldValues() {
            if (type.trim().length == 0) return false;
            if (customer.trim().length == 0) return false;
            return true;
        }
    }

    close() {
        this.isVisible = false;
        this.modalOutput.emit(null);
    }
}
