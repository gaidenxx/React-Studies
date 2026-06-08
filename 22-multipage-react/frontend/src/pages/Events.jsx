import { useLoaderData } from 'react-router-dom'; // Lib to get access to Loader data from App.js routers
import EventsList from '../components/EventsList';

export default function EventsPage() {
    const eventsData = useLoaderData();

    // if (eventsData.isError) {
    //     return eventsData.message;
    // }
    
  return (
    <>
      <EventsList events={eventsData} />
    </>
  );
}

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.'};
        throw new Response(JSON.stringify({title: 'Route not found', message: 'Could not fetch events'}), {status: 404});
        // return json({title: 'Route not found', message: 'Could not fetch events'}, {status: 404});
    } else {
        const resData = await response.json();
        return resData.events; // return data to the page component
    }
}