import {
    pink, purple, teal, amber, deepOrange,
  } from '@mui/material/colors';
  
  export const appointments = [
    {
      id: 0,
      title: 'Therapy',
      location: 'Room 101',
      staff: 'AG',
      startDate: new Date(2022, 7, 1, 9, 30),
      endDate: new Date(2022, 7, 1, 11),
      rRule: 'FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10',
      reasonCanceled: '',
    }, {
      id: 1,
      title: 'Therapy',
      location: 'Meeting room',
      staff: "TH",
      startDate: new Date(2022, 7, 1, 9, 30),
      endDate: new Date(2022, 7, 1, 11),
      rRule: 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10',
      reasonCanceled: '',
    }, {
      id: 2,
      title: 'Testing',
      location: 'Conference hall',
      staff: "BL",
      startDate: new Date(2022, 7, 1, 12, 0),
      endDate: new Date(2022, 7, 1, 13, 0),
      rRule: 'FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2',
    }, {
      id: 3,
      title: 'Meeting of Instructors',
      location: "Room 102",
      staff: "AS",
      startDate: new Date(2022, 7, 15, 9, 0),
      endDate: new Date(2022, 7, 15, 9, 15),
      rRule: 'FREQ=DAILY;BYDAY=WE;UNTIL=20220601',
    }, {
      id: 4,
      title: 'Recruiting students',
      location: "Room 101",
      staff: "NB",
      startDate: new Date(2022, 7, 26, 10, 0),
      endDate: new Date(2022, 7, 26, 11, 0),
      rRule: 'FREQ=YEARLY;BYWEEKNO=23',
      exDate: '20220611T100000',
    }, {
      id: 5,
      title: 'Final exams',
      location: "Room 103",
      staff: "BL",
      startDate: new Date(2022, 7, 26, 12, 0),
      endDate: new Date(2022, 7, 26, 13, 35),
      rRule: 'FREQ=YEARLY;BYWEEKNO=24;BYDAY=TH,FR',
    }, {
      id: 6,
      title: 'Monthly Planning',
      location: "Meeting room",
      staff: "AG",
      startDate: new Date(2022, 7, 26, 14, 30),
      endDate: new Date(2022, 7, 26, 15, 45),
      rRule: 'FREQ=MONTHLY;BYMONTHDAY=27;COUNT=1',
    }, {
      id: 7,
      title: 'Open Day',
      location: "Room 101",
      staff: "TH",
      startDate: new Date(2022, 7, 1, 9, 30),
      endDate: new Date(2022, 7, 1, 13),
      rRule: 'FREQ=YEARLY;BYYEARDAY=148',
      reasonCanceled: 'we cancelled',
    },{
      id: 8,
      title:'Intake Meeting',
      location:"Meeting Room",
      staff:"DN",
      startDate: new Date(2022, 7, 15, 12),
      endDate: new Date(2022, 7, 15, 13) 
    },{
      id: 9,
      allDay:false,
      title:'Intake Meeting',
      location:"Meeting Room",
      staff:"DN",
      startDate: new Date(2022, 7, 17, 11),
      endDate: new Date(2022, 7, 17, 12) 
    },{
      id: 10,
      allDay:false,
      title:'Intake Meeting',
      location:"Meeting Room",
      staff:"DN",
      startDate: new Date(2022, 7, 15, 15),
      endDate: new Date(2022, 7, 15, 16) 
    },{
      id: 11,
      allDay:false,
      title:'Intake Meeting',
      location:"Meeting Room",
      staff:"DN",
      startDate: new Date(2022, 7, 19, 8),
      endDate: new Date(2022, 7, 19, 9) 
    },{
      id: 12,
      allDay:false,
      title:'Therapy',
      location:"Room 103",
      staff:"TH",
      startDate: new Date(2022, 7, 15, 14),
      endDate: new Date(2022, 7, 15, 15),
      rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;UNTIL=20230815T190000Z" 
    },{
      id: 13,
      allDay:false,
      title:'Therapy',
      location:"Room 102",
      staff:"ES",
      startDate: new Date(2022, 7, 15, 14, 30),
      endDate: new Date(2022, 7, 15, 15, 30),
      rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO,TU,TH;UNTIL=20230815T193000Z" 
    },{
      id: 14,
      allDay:false,
      title:'Weekly Supervisor Meeting',
      location:"Conference hall",
      staff:"AS",
      startDate: new Date(2022, 7, 17, 9),
      endDate: new Date(2022, 7, 17, 10),
      rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=WE;UNTIL=20230817T133000Z"
    },
  ];
  

  export const location = [
    {
      text: 'Room 101',
      id: 'Room 101',
      color: amber,
    }, {
      text: 'Room 102',
      id: 'Room 102',
      color: pink,
    }, {
      text: 'Room 103',
      id: 'Room 103',
      color: purple,
    }, {
      text: 'Meeting room',
      id: 'Meeting room',
      color: deepOrange,
    }, {
      text: 'Conference hall',
      id: 'Conference hall',
      color: teal,
    },
  ];
  export const billingCode =[
    {
      text: "97151",
      id:"97151",
      color:'#FF0000'
    },{
      text:'97153',
      id:'97153',
      color:'#FFFF00'
    },
  ];
  export const reasonCanceled =[
    {
      text: "client cancelled",
      id:"client cancelled",
      color:'#252525'
    },{
      text:'we cancelled',
      id:'we cancelled',
      color:'#DEDEDE'
    },{
      text:'n/a',
      id:'n/a',
    },
  ];
  export const staff = [
    {
      text: 'AS',
      id: 'AS',
      color: '#7E57C2',
    }, {
      text: 'TH',
      id: 'TH',
      color: '#FF7043',
    }, {
      text: 'NB',
      id: 'NB',
      color: '#E91E63',
    }, {
      text: 'BL',
      id: 'BL',
      color: '#E91E63',
    }, {
      text: 'AG',
      id: 'AG',
      color: '#AB47BC',
    }, {
      text: 'DN',
      id: 'DN',
      color: '#FFA726',
    },{
      text: 'ES',
      id:'ES',
      color: '#FF0000'
    }
  ];