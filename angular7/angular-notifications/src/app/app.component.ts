import { Component } from '@angular/core';

// add manualmente
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'myApp';

  constructor(private toastr: ToastrManager) {}

  toastrSuccess() {
    
    this.toastr.successToastr("Mensagem de success!", 'Titulo success');
  
  }

  toastrInfo() {
  
    this.toastr.infoToastr("Mensagem de info.", "Titulo info");
  
  }

  toastrError() {
  
    this.toastr.errorToastr("Mensagem de error.", "Titulo erro");
  
  }

  toastrWarning() {

    this.toastr.warningToastr("Mensagem de warning.", "Titulo warning");
  }

  toastrDefault(position: any = 'top-left') {

    this.toastr.infoToastr('Default toast', 'Default title', { position: position });

  }

  toastrClear() {

    this.toastr.dismissAllToastr();
  
  }


}
