import { Fragment } from "react";
import EventList from "../../components/event/event-list";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../components/event/event-search";
import { useRouter } from "next/router";

export default function AllEventPage() {
  const event = getAllEvents();
  const router = useRouter();
  function findEventHandler(year, month) {
    const fullRouth = `/events/${year}/${month}`;
    router.push(fullRouth);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={event} />
    </Fragment>
  );
}
