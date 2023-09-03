import {getEventById} from "../../../../dummy-data";
import EventSummary from "../../../components/events/eventSummary";
import EventLogistics from "../../../components/events/eventLogistics";
import EventContent from "../../../components/events/eventContent";

export default function EventDetailPage({ params }){
  const eventId = params.id;
  const event = getEventById(eventId);
  if(!event) {
    return <p>No event found!</p>;
  }
  return(
      <>
        <EventSummary title={event.title}/>
        <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </>
  )
}
