import EventList from "../../../components/events/eventList";
import {getFilteredEvents} from "../../../../dummy-data";
import ResultsTitle from "../../../components/events/resultsTitle";
import ErrorAlert from "../../../components/ui/errorAlert";
import Button from "../../../components/ui/button";
export default function FilteredEventsPage({params}) {
  const filteredData = params.slug;

  if(!filteredData){
    return <p className="center">Loading...</p>
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if(isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredMonth > 12) {
    return (
        <>
          <ErrorAlert>
            <p>Invalid filter. Please adjust your values!</p>
          </ErrorAlert>
          <div className="center">
            <Button link={"/events"}>Show all events</Button>
          </div>
        </>
    );
  }

  const filteredEvents = getFilteredEvents({year: filteredYear, month: filteredMonth});

  if(!filteredEvents || filteredEvents.length === 0){
    return (
        <>
          <ErrorAlert>
            <p>No events found for the chosen filter!</p>
          </ErrorAlert>
          <div className="center">
            <Button link={"/events"}>Show all events</Button>
          </div>
        </>

    );
  }
  const date = new Date(filteredYear, filteredMonth - 1);

  return (
      <div>
        <ResultsTitle date={date}/>
        <EventList items={filteredEvents} />
      </div>
  );
}

