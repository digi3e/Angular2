import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = Math.floor(Math.random() * 10);
  serverStatus: string = 'offline';

  walt() {
    return this.serverId
  }
}


