import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screen/Home"
import Login from './screen/Login';
import Collection from './screen/Collection';
import { Provider, useDispatch } from 'react-redux';
import { store, persistor } from './state/store';
import SignUp from './screen/Signup';
import ResponsiveDrawer from './screen/AdminPanel';
import { PersistGate } from 'redux-persist/integration/react';
import NewDropdown from "./component/newDropdown"
  // import { GoogleOAuthProvider } from '@react-oauth/google';
  function App() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* <GoogleOAuthProvider clientId="833643574965-45cd9taq2971ni257ct4pf72jn712iqo.apps.googleusercontent.com"> */}
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/Login' element={<Login />} />
              <Route exact path='/Collections/:name' element={<Collection />} />
              <Route exact path='/Collections/:name/:subCate' element={<Collection />} />
              <Route exact path="/SignUp" element={<SignUp />} />
              <Route exact path="/Admin" element={<ResponsiveDrawer />} />
              <Route exact path="/drop" element={<NewDropdown/>}/>
            </Routes>
          </BrowserRouter>
          {/* </GoogleOAuthProvider>; */}
          </PersistGate>
      </Provider>
    );
  }

export default App;
