import React from 'react';
import { getAPI } from '../../dataservice/dataservice';
import './table.css'

const LocTable = () => {
    
    const [data,setData] = React.useState([]);

    async function proccessData(){
        let response = await getAPI();
        console.log(response);
        setData(response.data);
    }
    
    React.useEffect(() => {
        proccessData();
    })
    return(
        <>
         <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>County</th>
                    <th>District</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Postcode</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.address.county}</td>
                                <td>{item.address.state_district}</td>
                                <td>{item.address.state}</td>
                                <td>{item.address.country}</td>
                                <td>{item.address.postcode}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default LocTable