import {Injectable} from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {
  success(message: string, title?: string) {
    toastr.success(message);
  }

  info(message: string, title?: string) {
    toastr.info(message);
  }

  warning(message: string, title?: string) {
    toastr.warning(message);
  }

  error(message: string, title?: string) {
    toastr.error(message);
  }
}
