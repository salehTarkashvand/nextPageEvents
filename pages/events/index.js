import { Fragment } from "react";
import EventList from "../../components/event/event-list";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../components/event/event-search";
import { useRouter } from "next/router";
import Head from "next/head";

export default function AllEventPage() {
  const event = getAllEvents();
  const router = useRouter();
  function findEventHandler(year, month) {
    const fullRouth = `/events/${year}/${month}`;
    router.push(fullRouth);
  }

  return (
    <Fragment>
      <Head>
        <title>All events</title>
        <meta name="description" content="find a lot of great evets that allow you to evolve" />
      </Head>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={event} />
    </Fragment>
  );
}
