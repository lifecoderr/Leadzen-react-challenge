import './PageIndicator.css';

export default function PageIndicator({PageCursor,PageLength,setPageCursor}){
    const range = Array.from({ length: 10 }, (value, index) => index);

    return(
        <div className='page-indicator'>
            <button onClick={()=>setPageCursor((prev)=>(prev!==0) ? prev-1:prev)}> {`<`} </button>
            {
                range.splice(0,0+3).map((index)=><h5 key={index}>{index+1}</h5>)
            }
            <button onClick={()=>setPageCursor((prev)=>(prev<=2) ? prev+1:prev)}> {`>`} </button>

        </div>
    );
}