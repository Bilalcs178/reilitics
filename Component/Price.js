import React from 'react'
import PriceCardData from './PriceCardData'

const Price = (props) => {
    return (
        

    
        
            <div className="mx-auto text-center py-5 px-3 w-100 Card-color shadow ">
                <p className="my-auto">{props.Price}</p>


                <div className="text-center w-75 price-border div-color edge px-4  mx-auto">
                    <h3 className="my-auto text-nowrap" >{props.Amount}</h3>
                    {/* <p className="mt-2 text-nowrap mb-0">{props.Package}</p> */}
                    
                    <div className="price-line mt-2 mx-auto"></div>
                    {props.Tags.map((each)=>{
                        return(
                      <>

                    <div className="d-flex mt-3">
                        <img src={"check-circle-fill.png"} className="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                        <p className="my-auto ms-2" >{each}</p>

                    </div>
                         
                     </>
                        )
                    })}

                </div>
                <button type="submit" onClick={props.Continue} className="btn btn-info buy-color px-5 mt-3">Buy Now</button>

            </div>

        
        
    )

            
     
}

export default Price