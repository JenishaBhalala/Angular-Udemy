import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // // Get the initial value of the 'id' parameter from the snapshot
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);

    // // Subscribe to changes in route parameters
    // this.route.params.subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    // );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
