import { getFeaturedEvents } from '../../dummy-data';
import EventList from '../components/events/eventList';

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
  },
};
export default async function HomePage() {
  const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=${'ko'}&page=${1}`,
      options,
  )
      .then((response) => response.json())
  console.log(data);
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
