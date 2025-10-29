import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/event/event-list";
import Head from "next/head";
export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>nextJs events</title>
        <meta name="description" content="find a lot of great events that allow you to evolve" />
      </Head>
      <EventList items={events} />
      <EventList items={featuredEvents} />
    </div>
  );
}
