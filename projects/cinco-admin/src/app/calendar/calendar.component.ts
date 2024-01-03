import { Component, ViewChild } from '@angular/core';
import { DayPilot, DayPilotCalendarComponent, DayPilotMonthComponent, DayPilotNavigatorComponent } from '@daypilot/daypilot-lite-angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  

  @ViewChild("day") day!: DayPilotCalendarComponent;
  @ViewChild("week") week!: DayPilotCalendarComponent;
  @ViewChild("month") month!: DayPilotMonthComponent;
  @ViewChild("navigator") nav!: DayPilotNavigatorComponent;

  events: DayPilot.EventData[]= [ 
     {
    "id": 1,
    "start": "2023-05-29T10:00:00",
    "end": "2023-05-29T12:00:00",
    "text": "Lord Ganesha Boocked\n deluxe room for 2 weeks"
  },
  {
    "id": 2,
    "start": "2023-05-24",
    "end": "2023-05-24",
    "text": "Event 2"
  },
  {
    "id": 3,
    "start": "2023-05-21T00:00:00",
    "end": "2023-05-21T00:00:00",
    "text": "Event 3",
    // "allday": true
  }
 ];                         

  date = DayPilot.Date.today();

  configNavigator: DayPilot.NavigatorConfig = {

    cellWidth: 25,
    cellHeight: 25,
    onVisibleRangeChanged: args => {
      this.loadEvents();
    }
  };

  selectTomorrow() {
    this.date = DayPilot.Date.today().addDays(1);
  }

  changeDate(date: DayPilot.Date): void {
    this.configDay.startDate = date;
    this.configWeek.startDate = date;
    this.configMonth.startDate = date;
  }

  configDay: DayPilot.CalendarConfig = {
    viewType: "Day",
    onTimeRangeSelected: async (args) => {
      // const modal = dispatchEvent DayPilot: any.Modal.prompt("display this.events"),
      // const dp = args.control;
      // dp.clearSelection();
      // if (!modal.result) { return; }
      // dp.events.add(new DayPilot.Event({
      //   start: args.start,
      //   end: args.end,
      //   id: DayPilot.guid(),
      //   text: modal.result
      // }));
    }
    
    
  };
  

  configWeek: DayPilot.CalendarConfig = {
    viewType: "Week"
    // onTimeRangeSelected: async (args) => {
    //   const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 2");
    //   const dp = args.control;
    //   dp.clearSelection();
    //   if (!modal.result) { return; }
    //   dp.events.add(new DayPilot.Event({
    //     start: args.start,
    //     end: args.end,
    //     id: DayPilot.guid(),
    //     text: modal.result
    //   }));
    // }
  };

  configMonth: DayPilot.MonthConfig = {

  };

  constructor(private ds: DataService) {
    // this.viewWeek();
  }

  // constructor(private ds: DataService) {
  //   this.viewDay();
  // }

  ngAfterViewInit(): void {
    this.loadEvents();
  }
  

  loadEvents(): void {
    const from = this.nav.control.visibleStart();
    const to = this.nav.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
    });
  }
 
     

  viewDay():void {
    this.configNavigator.selectMode = "Day";
    this.configDay.visible = true;
    this.configWeek.visible = false;
    this.configMonth.visible = false;
  }

  viewWeek():void {
    this.configNavigator.selectMode = "Week";
    this.configDay.visible = false;
    this.configWeek.visible = true;
    this.configMonth.visible = false;
  }

  viewMonth():void {
    this.configNavigator.selectMode = "Month";
    this.configDay.visible = false;
    this.configWeek.visible = false;
    this.configMonth.visible = true;
  }

}
