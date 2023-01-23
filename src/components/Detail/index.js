import './Detail.css';

export default function Detail({companyDetails}){

    const {street,suite,zipcode,city}= companyDetails.address;

    return(
        
        <div className='detail'>

            <div className='description'>
                <h5 className='label'>Description</h5>
                <h5>{companyDetails.company.catchPhrase}</h5>
            </div>
            <div className='detail-item'>
                <h5 className='label'>Contact Person</h5>
                <h5>{companyDetails.name}</h5>
            </div>
            <div className='detail-item'>
                <h5 className='label'>Address</h5>
                <h5>{`${suite}, ${street}, ${zipcode}`}</h5>
            </div>
            <div className='detail-item'>
                <h5 className='label'>website</h5>
                <h5>{companyDetails.website}</h5>
            </div>
            <div className='detail-item'>
                <h5 className='label'>City</h5>
                <h5>{city}</h5>
            </div>
            <div className='detail-item'>
                <h5 className='label'>Emails</h5>
                <h5>{companyDetails.email}</h5>
            </div>
            <div className='detail-item'>
                <h5 className='label'>Street</h5>
                <h5>{street}</h5>
            </div>
            <div className='detail-item'>
                <h5 className='label'>Phones</h5>
                <h5>{companyDetails.phone.split(' ')[0]}</h5>
            </div>
            <div className='detail-item'>
                <h5 className='label'>Country</h5>
                <h5>{zipcode}</h5>
            </div>
            

        </div>

    )

}



