import react, { useState } from 'react';
import './App.css';
//import FullName, {Info} from './components/Fullname/FullName';
import Layout from './layout/layout';
import Order from './pages/order/order';
/* import PeopleList from './components/GenderFilter/gender'; */


function App() {

  return (
    <div className="App">
{/*     <FullName />
 */}   
 
 <Layout>
<Order></Order>


 </Layout>
 
 

{/*  <PeopleList /> */}
 
  </div>
  );
}

export default App;
