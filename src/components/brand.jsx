
import { React } from "react";
import './brand.css';



export default function Brand ()  {

  const printDiv = () => {
    window.print();
}



    return (
            <div className="main">
              <div className="title">
                <div className="bio">Grow your bussiness at junction</div>
                <div className="name">GBJ BUZZ</div>
              </div>
       
           <button className="butn" onClick={printDiv}>Print / Download</button></div>
           
    );
   };
   
   