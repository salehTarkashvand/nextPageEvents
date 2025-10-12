import EventList from "../../components/event/event-list";
import { getAllEvents } from "../../dummy-data";

export default function AllEventPage() {
  const event = getAllEvents();
  console.log(event);
  
  return (
    <div>
      <EventList items={event} />
    </div>
  );
}
