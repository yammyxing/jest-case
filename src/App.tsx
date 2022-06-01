import React from 'react';
import Title from './components/Title'

const App = () => {
  return (
    <div>
      <section>
          <Title type="small" title="hello small"/>
          <Title type="large" title="hello large"/>
      </section>
    </div>
  )
}

export default App;