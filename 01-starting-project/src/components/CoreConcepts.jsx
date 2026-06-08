import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS2 } from '../data.js';

export default function CoreConcepts () {
    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        {}
        <ul>
          {CORE_CONCEPTS2.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem}/>
          )
          )}
          {/* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          /> */}
        </ul>
        </section>
    )
}