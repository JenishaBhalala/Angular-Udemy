import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{

  allowNewServer = false;
  serverCreationStatus = 'No Server was Created :(';
  serverName = 'Test-Server';
  serverCreated = false;
  servers = ['Test-Server 1', 'Test-Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created & Its Name is ' + this.serverName + ' :)'
  }

  onUpdateServerName(event: any) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

