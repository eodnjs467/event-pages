import {getFeaturedEvents} from "../../../dummy-data";
import EventList from "../../components/events/EventList";

export default function EventsPage() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents)
  return(
        <div>
          <EventList events={featuredEvents} />
        </div>
  )
}
