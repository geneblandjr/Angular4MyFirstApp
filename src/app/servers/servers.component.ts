import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: '/servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No Server Was Created.';
    serverName = 'Not Set';
    serverCreated = false;
    servers = ['TestServer', 'TestServer 2'];
  constructor() {
   setTimeout(() => {
       this.allowNewServer = true;
   }, 2000);
  }

  ngOnInit() {
  }

    onCreateServer(){
        this.servers.push(this.serverName);
        this.serverCreated = true;
        this.serverCreationStatus = 'Server was Created!  Server Name was ' + this.serverName;
    }
    OnUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
