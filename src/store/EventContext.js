"use client"
import {createContext} from "react";

const initialValue = [
  {
    id: 1,
    title: 'second visitor',
    description: 'Welcome Second Visitor',
    features: false,
  },
  {
    id: 2,
    title: 'Mac',
    description: 'Welcome Second Visitor',
    features: true,
  },
  {
    id: 3,
    title: 'Mouse',
    description: 'Welcome Second Visitor',
    features: false,
  }
]
const EventContext = createContext(initialValue);

export function EventContextProvider({children}){
  return(
      <EventContext.Provider value={EventContext}>
        {children}
      </EventContext.Provider>
  )
}
export default EventContext;
