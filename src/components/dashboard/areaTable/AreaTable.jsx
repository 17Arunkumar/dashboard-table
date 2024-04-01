import { useEffect,useState } from "react";
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.css";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

// const TABLE_DATA = [
//   {
//     id: 100,
//     name: "Iphone 13 Pro",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "delivered",
//     amount: 400,
//   },
//   {
//     id: 101,
//     name: "Macbook Pro",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "pending",
//     amount: 288,
//   },
//   {
//     id: 102,
//     name: "Apple Watch",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "canceled",
//     amount: 500,
//   },
//   {
//     id: 103,
//     name: "Microsoft Book",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "delivered",
//     amount: 100,
//   },
//   {
//     id: 104,
//     name: "Apple Pen",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "delivered",
//     amount: 60,
//   },
//   {
//     id: 105,
//     name: "Airpods",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "delivered",
//     amount: 80,
//   },
// ];



function Area({pro,getdata}){

  return (
                  <tr key={pro.id}>
                    <td>{pro.name}</td>
                    <td>{pro.order_id}</td>
                    <td>{pro.date}</td>
                    <td>{pro.customer}</td>
                    <td>
                      <div className="dt-status">
                        <span
                          className={`dt-status-dot dot-${pro.status}`}
                        ></span>
                        <span className="dt-status-text">{pro.status}</span>
                      </div>
                    </td>
                    <td>${pro.amount.toFixed(2)}</td>
                    <td className="dt-cell-action">
                      <AreaTableAction />
                    </td>
                  </tr>
    );
}
const AreaTable = () => {

  let [data,setdata] = useState([])
  console.log(data);
  const getdata=()=>{
      fetch(`https://65f17108034bdbecc7629d11.mockapi.io/Table`,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
      }).then((das)=>das.json())
      .then((da)=>{setdata(da)
      console.log(da)})
     
  } 
  
  useEffect(()=>{
      getdata();
  },[])

  return(
      <div>
       <section className="content-area-table">
       <div className="data-table-info">
         <h4 className="data-table-title">Latest Orders</h4>
       </div>
       <div className="data-table-diagram">
         <table>
           <thead>
             <tr>
               {TABLE_HEADS?.map((th, index) => (
                 <th key={index}>{th}</th>
               ))}
             </tr>
           </thead>
           <tbody>
             {data.map((element,index)=>(
             <Area  className="data" pro={element} key={index} getdata={getdata}/>
             ))}
           </tbody>
           </table>
        </div>
      </section>
  </div>
      
  )
};

export default AreaTable;








  // return (
  //   <section className="content-area-table">
  //     <div className="data-table-info">
  //       <h4 className="data-table-title">Latest Orders</h4>
  //     </div>
  //     <div className="data-table-diagram">
  //       <table>
  //         <thead>
  //           <tr>
  //             {TABLE_HEADS?.map((th, index) => (
  //               <th key={index}>{th}</th>
  //             ))}
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {TABLE_DATA?.map((dataItem) => {
  //             return (
  //               <tr key={dataItem.id}>
  //                 <td>{dataItem.name}</td>
  //                 <td>{dataItem.order_id}</td>
  //                 <td>{dataItem.date}</td>
  //                 <td>{dataItem.customer}</td>
  //                 <td>
  //                   <div className="dt-status">
  //                     <span
  //                       className={`dt-status-dot dot-${dataItem.status}`}
  //                     ></span>
  //                     <span className="dt-status-text">{dataItem.status}</span>
  //                   </div>
  //                 </td>
  //                 <td>${dataItem.amount.toFixed(2)}</td>
  //                 <td className="dt-cell-action">
  //                   <AreaTableAction />
  //                 </td>
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //     </div>
  //   </section>
  // );
