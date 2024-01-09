import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';




function App() {
  const [selectedTopic, setSelectedTopic] = useState()
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((item) => (<CoreConcept key={item.title} {...item} />))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}
              onSelect={() => { handleClick('components') }}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
              onSelect={() => { handleClick('jsx') }}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
              onSelect={() => { handleClick('props') }}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
              onSelect={() => { handleClick('state') }}>State</TabButton>
          </menu>
          {!selectedTopic ? (<p>Please Select a Topic</p>) :
            (<div id="tab-content">
              <h2>{EXAMPLES[selectedTopic].title}</h2>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)}

        </section>
      </main>
    </div>
  );
}

export default App;