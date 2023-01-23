import { useState,useEffect } from 'react';
import Detail from '../Detail';
import './CompanyCard.css';

export default function CompanyCard({companyDetails}){
    // console.log(companyDetails);

    const [toggleDetail,setToggleDetail] = useState(false);
    const [buttonText,setButtonText] = useState('View Details');
    const [detailStyle,setdetailStyle] = useState({
        display:'none',
    });

    useEffect(()=>{

        if(toggleDetail){
            setButtonText('Hide Details');
            setdetailStyle({});
            console.log({toggleDetail,buttonText,detailStyle});

            
        }
        else{
            setButtonText('View Details');
            setdetailStyle({display:'none'});

            
        }

    },[toggleDetail]);

   

    return(
        <div className='company-card'>
            
            <div className='company-card-item'>
                <h5>{companyDetails.company.name}</h5>
            </div>
            <div className='company-card-item'>
                <h5 className='label'>CONTACT</h5>
                <h5>{companyDetails.name}</h5>
            </div>
            <div className='company-card-item'>
                <h5 className='label'>CITY</h5>
                <h5>{companyDetails.address.city}</h5>
            </div>
            <div className='company-card-item'>
                <h5 className='label'>STREET</h5>
                <h5>{companyDetails.address.street}</h5>
            </div>
            
            

            <div className='company-card-item'>
                <button onClick={()=>setToggleDetail(prev=> !prev)} className='details-button'>
                    {buttonText}
                </button>
            </div>

            <div style={detailStyle} className='company-card-item detail-container'>

                <Detail companyDetails={companyDetails}/>
                
            </div>


        </div>
    )


}


