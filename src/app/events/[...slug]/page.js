import EventList from "../../../components/events/eventList";
import {getFilteredEvents} from "../../../../dummy-data";
export default function FilteredEventsPage({params}) {
  const filteredData = params.slug;

  if(!filteredData){
    return <p className="center">Loading...</p>
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if(isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredMonth > 12) {
    return <p>Invalid filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({year: filteredYear, month: filteredMonth});

  return (
      <div>
        <EventList items={filteredEvents} />
      </div>
  );
}

