import { CounterService } from './counter.service';
import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {

    activeUsers = ['Jenisha', 'Harsh'];
    inactiveUsers = ['Prapti', 'Vinit'];

    constructor(private counterService: CounterService) {}

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incrementInactiveToActive();
    }
    
    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementActiveToInactive();
    }
}