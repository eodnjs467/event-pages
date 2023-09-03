"use client"
import {getAllEvents} from "../../../dummy-data";
import EventList from "../../components/events/eventList";
import EventsSearch from "../../components/events/eventsSearch";
import {useRouter} from "next/navigation";

export default function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  const findEventsHandler = (year, month) => {
    const pullPath = `/events/${year}/${month}`;
    router.push(pullPath);
  }
  return(
        <div>
          <EventsSearch onSearch={findEventsHandler}/>
          <EventList items={events} />
        </div>
  )
}
