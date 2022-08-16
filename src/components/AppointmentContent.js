export default function AppointmentContent({data, ...restProps}) {
    return (
    <div data={data} className='appointment-content-container'>
      <div className='appointment-content-tags'>
        <div className='appointment-content-tag-location'>
          {data.location}  
        </div> 
        <div className='appointment-content-tag-staff'>
          {data.staff}  
        </div>
      </div>
      <div className="appointment-content-details">
        <h4 className='appointment-content-title'>{data.title}</h4>
        <p className='appointment-content-time'>{`${data.startDate.toLocaleTimeString("en-US", {timeStyle:"short"})} - `}</p>
        <p className='appointment-content-time'>{`${data.endDate.toLocaleTimeString("en-US", {hour:"2-digit", minute:'2-digit'})}`}</p>
        <p className='appointment-content-canceled'>{data.reasonCanceled}</p>
      </div>
    </div>
  )} 