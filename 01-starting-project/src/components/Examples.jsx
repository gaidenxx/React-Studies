import { useState } from 'react';
import TabButton from './TabButton.jsx';
import Section from './shared_components/Section.jsx';
import Tabs from './shared_components/Tabs.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples () {
    const [ selectedTopic, setSelectedTopic ] = useState(null);

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <Section id="examples" title="Examples" className="exampleClass">
            <Tabs 
            ButtonsContainer="menu"
            buttons={
                <>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                </>
            }>
                {selectedTopic ?  (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                    </pre>
                </div>
                ) : (
                    <p>Please select a topic</p>
                )}
            </Tabs>
          {/* <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu> */}
        </Section>
    )
}