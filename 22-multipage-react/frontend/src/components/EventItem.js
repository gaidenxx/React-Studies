import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit(); // Use to trigger an action in react-router-dom App.js defined

  function startDeleteHandler() {
    const userConfirm = window.confirm('Are you sure?')

    if (userConfirm) {
      // first param is a data to send, the second is the request param accessed by the action as prop
      submit(null, {method: 'delete'}) 
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
