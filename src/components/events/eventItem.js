import styles from './eventItem.module.css';
import Button from "@/components/ui/button";
import DateIcon from "@/components/icons/date-icon";
import AddressIcon from "@/components/icons/address-icon";
import ArrowRightIcon from "@/components/icons/arrow-right-icon";
export default function EventItem({ id, title, date, image, location}) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: "long",
    year: "numeric",
  })
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;
  return(
      <li className={styles.item}>
        <img src={'/' + image} alt={image} />
        <div className={styles.content}>
          <div>
            <h2>{title}</h2>
            <div className={styles.date}>
              <DateIcon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={styles.address}>
              <AddressIcon />
              <address>{formattedAddress}</address>
            </div>
          </div>
          <div className={styles.actions}>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className={styles.icon}><ArrowRightIcon/></span>
            </Button>
          </div>
        </div>
      </li>
  )
}
