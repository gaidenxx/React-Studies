import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Some event 1'
    },
    {
        id: 'e2',
        title: 'Some event 2'
    },
];

export default function EventsPage() {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}