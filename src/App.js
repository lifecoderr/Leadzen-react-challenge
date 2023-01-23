import './App.css';
import CompanyCard from './components/CompanyCard';
import {useEffect,useState} from 'react'
import axios from 'axios';
import PageIndicator from './components/PageIndicator';

function App() {
  const [companies,setCompanies] = useState([]);
  const [pageCursor,setPageCursor] = useState(0);
 useEffect(()=>{

  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(response => {
    const companyListResponse = response.data;
    setCompanies(companyListResponse );
    // console.log(companyListResponse);
  })
 },[])

  
  return (
    <div className="App">
      {
        companies.slice(pageCursor*3, pageCursor*3 + 3).map(company=>{
          return(<CompanyCard key={company.id} companyDetails = {company}/>)
        })
        
      }
      <PageIndicator pageCursor={pageCursor} pageLength={companies.length} setPageCursor={setPageCursor}/>
    </div>
  );
}

export default App;
