import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/event/event-list";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear
  const numMonth = +filteredMonth

if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || filteredMonth > 12 || filteredMonth < 1){
    return <p> invalid filter. please adjust your values! </p>
}
const filtredEvent = getFilteredEvents({ year: numYear, month: numMonth });

if(!filtredEvent || filtredEvent.length === 0){
    return <p> No events found for the chosen filter! </p>
}

  return <EventList items={filtredEvent} />;
}
