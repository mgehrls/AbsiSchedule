import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  ViewState, 
  GroupingState, 
  IntegratedGrouping, 
  IntegratedEditing, 
  EditingState,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentTooltip,
  GroupingPanel,
  WeekView,
  DragDropProvider,
  AppointmentForm,
  Toolbar,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';
import { 
    appointments, 
    location, 
    billingCode, 
    reasonCanceled, 
    staff 
  } from './resources';

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
  }


export default function StaffGroupedCalendar({view}){
    const [state, setState] = React.useState({
        data: getDataFromStorage(),
        mainViewName: view,
        mainResourceName: "staff",
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
        ],
        grouping:[{
            resourceName: "staff"
        }]
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
    const groupOrientation = viewName => viewName.split(' ')[0];

    return (
      <Paper>
        <Scheduler
          data={state.data}
        >
          <ViewState
            defaultCurrentDate={new Date()}
          />
          <EditingState
            onCommitChanges={commitChanges}
          />
          <GroupingState
            grouping={state.grouping}
            groupOrientation={groupOrientation}
          />
            <Toolbar/>
            <DateNavigator/>
        
          <WeekView
            startDayHour={9}
            endDayHour={18}
            name={"Horizontal Week"}
          />
          <Appointments />
          <Resources
            data={state.resources}
            mainResourceName= "staff"
          />

          <IntegratedGrouping />
          <IntegratedEditing />

          <AppointmentTooltip showOpenButton />
          <AppointmentForm />
          <GroupingPanel />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }