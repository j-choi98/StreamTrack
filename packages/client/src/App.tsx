import React, { Suspense } from 'react';
import environment from './environment';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Home from './components/Home';
import Lookup from './components/Lookup';

library.add(faSpinner);

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="flex flex-col min-h-screen bg-dark">
        <Router>
          <Header />

          <Suspense fallback={<h1 className="text-white text-6xl">Loading</h1>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/lookup" component={Lookup} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </RelayEnvironmentProvider>
  );
}
