import { getFeaturedEvents } from '../../dummy-data';
import EventList from '../components/events/eventList';
export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  const text = process.env.NEXT_PUBLIC_TOKEN;
  console.log(text);
  return (
      <main>
        <div>텍스트: {text}</div>
        <EventList items={featuredEvents}/>
      </main>
  );
}
