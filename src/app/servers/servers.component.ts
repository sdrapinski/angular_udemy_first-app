import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created!';
  servers = [];
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Was Created';
    this.servers.push('server');
  }
  ouUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
