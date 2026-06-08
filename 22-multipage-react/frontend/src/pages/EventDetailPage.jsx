import { redirect, useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
    // const params = useParams();
    const data = useRouteLoaderData('event-detail-loader');

    return (
        <EventItem event={data.event}/>
    )
}

export async function loader({request, params}) {
    const eventId = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${eventId}`);
    
    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not fetch details for selected event.'}), {status: 500});
    } else {
        return response;
    }
}

export async function action ({request, params}) {
    const eventId = params.eventId;
    console.log('action', eventId)

    const response = await fetch(`http://localhost:8080/events/${eventId}`, {
        method: request.method,
    });

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not delete event.'}), {status: 500});
    } else {
        redirect('/events');
    }
}