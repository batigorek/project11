import { Component } from '@angular/core';
import { Sensor, SensorDatabase } from './shared/sensor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projest11';
  sensors: Sensor[] = SensorDatabase;

  AddSensor() {
    let sensor = new Sensor(this.sensors.length+1, `${this.sensors.length+1}`);
    this.sensors.push(sensor);
  }
}
