import styles from './eventList.module.css'
import EventItem from "./eventItem";
export default function EventList({ items }) {
  return (
      <ul className={styles.list}>
        {
          items.map(event => <EventItem
              key={event.id}
              id={event.id}
              title={event.title}
              description={event.description}
              location={event.location}
              date={event.date}
              image={event.image}
              isFeatured={event.isFeatured}
          />)
        }
      </ul>
  );
}
