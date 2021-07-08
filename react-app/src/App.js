import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import UserProfilePage from './components/UserProfile/UserProfilePage';
import HomePage from './components/HomePage/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import BrowseAllLandingPage from './components/BrowseAll/BrowseAllLandingPage';
import PlantPage from './components/PlantPage/PlantPage';
import SearchResults from './components/SearchResults/SearchResults';
import UserGreenhouse from './components/Greenhouses/UserGreenhouse';
import Footer from './components/Footer/Footer';
import LowLight from './components/Light/LowLight';
import AverageLight from './components/Light/MediumLight';
import HighLight from './components/Light/HighLight';
import SmallPlantsLink from './components/Size/SmallPlants';
import MediumPlants from './components/Size/MediumPlants';
import LargePlants from './components/Size/LargePlants';


import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} >
          <LandingPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/home' exact={true}>
          <NavBar />
          <HomePage />
          <Footer />
        </Route>
        <Route path='/browse_all' exact={true}>
          <NavBar />
          <BrowseAllLandingPage />
          <Footer />
        </Route>
        <Route path='/plants/:plantId' exact={true}>
          <NavBar />
          <PlantPage />
          <Footer />
        </Route>
        <Route path='/search/:searchedWord' exact={true}>
          <NavBar />
          <SearchResults />
          <Footer />
        </Route>
        <Route path='/greenhouse/:userId' exact={true}>
          <NavBar />
          <UserGreenhouse />
          <Footer />
        </Route>
        <Route path='/plants/light/low' exact={true}>
          <NavBar />
          <LowLight />
          <Footer />
        </Route>
        <Route path='/plants/light/average' exact={true}>
          <NavBar />
          <AverageLight />
          <Footer />
        </Route>
        <Route path='/plants/light/high' exact={true}>
          <NavBar />
          <HighLight />
          <Footer />
        </Route>
        <Route path='/plants/size/small' exact={true}>
          <NavBar />
          <SmallPlantsLink />
          <Footer />
        </Route>
        <Route path='/plants/size/medium' exact={true}>
          <NavBar />
          <MediumPlants />
          <Footer />
        </Route>
        <Route path='/plants/size/large' exact={true}>
          <NavBar />
          <LargePlants />
          <Footer />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <NavBar />
          <UserProfilePage />
          <Footer />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
