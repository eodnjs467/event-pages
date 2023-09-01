"use client"
import styles from './eventsSearch.module.css';
import Button from "../ui/button";
import {useRef} from "react";

function EventsSearch(props) {
  const yearRef = useRef(null);
  const monthRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  }
  return (
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="year">Year</label>
            <select id="year" ref={yearRef}>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div className={styles.control}>
            <label htmlFor="month">Month</label>
            <select id="month" ref={monthRef}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <Button>Find Events</Button>
        </div>
      </form>
  );
}

export default EventsSearch;
