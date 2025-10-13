import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/event/event-list";
import { Fragment } from "react";
import ResultsTitle from "../../components/event/results-title";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/Button";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Loading...</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> invalid filter. please adjust your values! </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }
  const filtredEvent = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filtredEvent || filtredEvent.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> No events found for the chosen filter! </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filtredEvent} />
    </Fragment>
  );
}
