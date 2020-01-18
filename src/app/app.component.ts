import { Component } from '@angular/core';
import { TestserviceService } from './testservice.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ang-material';
    constructor(private testSer: TestserviceService) { }

    incrsCount(): void {
        this.testSer.count++;
    }
    minDob = new Date();
    maxDob = new Date(2019, 3, 10);
    gender: string;
    fname: string;
    test = "test"
    isPrmntAdrs: Boolean = false;
}
