// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// DONE
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// DONE
// 4. Add properly working links to the MainNavigation
// DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// DONE
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// DONE
// 7. Output the ID of the selected event on the EventDetailPage
// DONE
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
// DONE

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, {loader as eventsLoader} from './pages/Events';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDetailAction
}  from './pages/EventDetailPage';
import NewEventPage, {action as newEventAction} from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import MainLayout from './pages/Main';
import EventsRootLayout from './pages/EventsRootLayout';
import ErrorPage from './pages/Error';

// Defining routes with js
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '', 
        element: (<HomePage/>)
      },
      { path: '/events', 
        element: (<EventsRootLayout/>),
        children: [
          { path: '', 
            element: (<EventsPage/>),
            loader: eventsLoader, // Execute the loader defined in eventsPage before the page is loaded to screen
          },
          {
            path: ':eventId',
            id: 'event-detail-loader',
            loader: eventDetailLoader,
            children: [
              {
                path: '',
                element: <EventDetailPage/>,
                action: eventDetailAction,
              },
              {
                path: 'edit',
                element: <EditEventPage/>
              }
            ]
          },
          {
            path: 'new',
            element: <NewEventPage/>,
            action: newEventAction, // Same as loader but to send data to backend, an action
          }
        ]
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
