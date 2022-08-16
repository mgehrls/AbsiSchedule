import * as React from 'react';
import Paper from '@mui/material/Paper';
import { 
  ViewState, 
  EditingState
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  Toolbar,
  ViewSwitcher,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  DragDropProvider,
  DateNavigator,
  CurrentTimeIndicator,
} from '@devexpress/dx-react-scheduler-material-ui';
import { 
  appointments, 
  location, 
  billingCode, 
  reasonCanceled, 
  staff 
} from './resources';
import {DateEditorComponent} from './DateEditor';
import AppointmentContent from './AppointmentContent';
import ResourceSwitcher from './ResourceSwitcher';

//fetchs data from local storage, if there isn't any, it defaults to the appointments hardcoded in resources.js
//The funny date stuff is because JSON is all strings so when it comes back from localStorage, the javascript isn't reading it as a date anymore.
const getDataFromStorage = () =>{
  let data = JSON.parse(localStorage.getItem('scheduleTest'))
  if(data){
    data.map(item =>{
        item.startDate = new Date(item.startDate)
        item.endDate = new Date(item.endDate)
        return item
    })
    return data
  }else{
    return appointments
  }
}

const saveDataToStorage = (data) =>{
    localStorage.setItem("scheduleTest", JSON.stringify(data))
    console.log(data)
}

/*--------------------------------------------------------------Calendar-------------------------------------------------------- */
export default function BaseCalendar() {
    //Viewname: week-view, month-view, day-view
    //Resources: staff, location, billingCode, reasonCanceled
    const [state, setState] = React.useState({
        data: getDataFromStorage(),
        mainViewName: 'week-view',
        mainResourceName:'staff',
        resources: [
            {
            fieldName: 'location',
            title: 'Location',
            instances: location,
            },
            {
            fieldName: 'staff',
            title: 'Staff',
            instances: staff,
            },
            {
                fieldName: 'billingCode',
                title: 'Billing Code',
                instances: billingCode,
            },
            {
                fieldName: 'reasonCanceled',
                title: 'Canceled?',
                instances: reasonCanceled
            }
        ]
    })

    function commitChanges({ added, changed, deleted }) {
    setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      saveDataToStorage(data)
      return {...state, data };
    });
    }   

    function changeMainResource(mainResourceName){
        setState({ ...state, mainResourceName });
    }

    return (
        <>
        <ResourceSwitcher
            resources={state.resources}
            mainResourceName={state.mainResourceName}
            onChange={(e) =>changeMainResource(e)}
            />
      <Paper>
        <Scheduler
          data={state.data}
          locale={"en-US"}
          crossScrollingEnabled={true}
          adaptivityEnabled={true}
        >
          <ViewState defaultCurrentViewName='Week'
          />
          <EditingState
            onCommitChanges={commitChanges}
          />
          <EditRecurrenceMenu />
          <Toolbar/>
          <DateNavigator/>
          <ViewSwitcher/>
          <DayView startDayHour={8} endDayHour={19}/>
          <WeekView startDayHour={8} endDayHour={19}/>
          <MonthView />
          <Appointments 
            appointmentContentComponent={AppointmentContent}
            />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
            />
          <AppointmentForm dateEditorComponent={DateEditorComponent} />

          <Resources
            data={state.resources}
            mainResourceName={state.mainResourceName}
            allowMultiple={false}
            />
          <DragDropProvider />
          <CurrentTimeIndicator/>
        </Scheduler>
      </Paper>
        </>
    );
  }
