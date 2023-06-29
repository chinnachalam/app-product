import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class LoggingService {

  constructor() { }

  logError(message:any) {
    console.error(message)
  }

  logInfo(message:any) {
    console.info(message)
  }

  logWarn(message:any) {
    console.warn(message)
  }
}
