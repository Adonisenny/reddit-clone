import { useState,useEffect } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './App.css'
import './index.css'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import supabase from "./config/supabaseClient.js"
import Navbar from './components/Navbar'
import SignUp from './components/signUp';
import Account from './components/Account';
import Single from './components/single';


var url = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=c0bfd39ff28949b285dd8cf7330026f6';

var req = new Request(url);

  
function App() {
  const [news,setNews] =useState([]);
  const [thread,setThreads] =useState(null)
  const [errorFetch,setErrorFetch] =useState(null)
  const [session,setSession] =useState(null)
useEffect(() => {
  setSession(supabase.auth.getSession())
  supabase.auth.onAuthStateChange((_event,session)=>{
    setSession(session)

  })
},[])
  
  
useEffect(() => {
  async function  fetchIt(){
    var response = await fetch(req)
    var data = await response.json()
    return data
  }
   fetchIt() 
.then(data =>setNews(data.articles))


},[])  
    const fnews= news[0]
    const snews = news[1]
    const tnews = news[2]
    const lnews =news [3]
  useEffect(() => {
const fetchThreads = async () => {
  const {data,error} = await supabase
  .from("Threads").
  select()
  if(error){
setErrorFetch('could not do it')
setThreads(null)
  }
  if(data){

    setThreads(data)
    setErrorFetch(null)
  }
}

fetchThreads()


  },[])
return(
<Router>
  <div>
 
  
    <Navbar/>
  <Switch>
    <Route exact path='/'>
  <Home 
  fnews={fnews}
  snews ={snews}
  tnews={tnews}
  lnews ={lnews}
 />
 </Route>
 <Route exact path='/login'>
  <Login/>
 </Route>
 <Route exact path='/signUp'>
<SignUp />
 </Route>
 {/* <Route exact path='/Dashboard'>
<Dashboard />
 </Route> */}
 <Route exact path='/single'>
<Single session={session}/>
 </Route>
 <Route exact path='/account'>
<Account />
 </Route>
 </Switch>  
 
</div>
</Router>
)

}
export default App
