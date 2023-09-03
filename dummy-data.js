const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'BUBBLE FOAM POOL PARTY',
    description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Crimson resort foam party, Philippines Boracay',
    date: '2023-09-20',
    image: 'images/pool-party.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2023-12-31',
    image: 'images/hokangs.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2023-11-15',
    image: 'images/infinitypool.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'Beer party',
    description:
        'Beer Party and fireworks party',
    location: 'Songdo, Broke City',
    date: '2023-09-02',
    image: 'images/beer-party.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter(event => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const {year, month} = dateFilter;
  const filteredEvents = DUMMY_EVENTS.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month -1;
  })
  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find(event => event.id === id);
}
