import { Component } from '@angular/core';
import {
  LoadingModalService,
  LoadingGlobalService,
  LoadingInputService
} from '@vox-loading';
@Component({
  selector: 'vox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public constructor(
    private loadingGlobalService: LoadingGlobalService,
    private loadingModalService: LoadingModalService,
    private loadingInputService: LoadingInputService
  ) {}

  public global() {
    this.loadingGlobalService.show();
    setTimeout(() => {
      this.loadingGlobalService.hide();
    }, 1500);
  }

  public modal() {
    this.loadingModalService.show('optional text');
    setTimeout(() => {
      this.loadingModalService.hide();
    }, 1500);
  }

  public campoSucesso() {
    this.loadingInputService.show('optional text');
    setTimeout(() => {
      this.loadingInputService.hide('success', {success: 'optional success text'});
    }, 1500);
  }

  public campoErro() {
    this.loadingInputService.show();
    setTimeout(() => {
      this.loadingInputService.hide('error', {error: 'optional error text'});
    }, 1500);
  }
}
