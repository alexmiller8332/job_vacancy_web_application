import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import '../style/JobList.css';

const JobList = () => {

    const [data, setdata] = useState({})

    useEffect(() => {
        axios.get('https://dev6.dansmultipro.com/api/recruitment/positions.json')
            .then((res) => {
                setdata(res.data)
            })
    }, [])

    const handleSearch = (event) => {
        
        let search = data.filter((respons) => {

            if (event.target.value === "") {
                axios.get('https://dev6.dansmultipro.com/api/recruitment/positions.json')
                    .then((res) => {
                        setdata(res.data)
                    })
            }

            return Object.values(respons).join('').toLocaleLowerCase().includes(event.target.value)
        })
        setdata(search)
    }

    return (
        <div className='container'>
            <input onChange={handleSearch} type='text' placeholder='Ketik Untuk Mencari.....'/>

            <h1>Job List</h1>

            <div>
                {data !== null && data.map((res, index) => {
                    return (
                        <div className='card' key={index}>
                            <hr></hr>
                            <Link to={'/detail/'+ res.id}>
                                    <button>
                                        <table>
                                            <tr>
                                                <td className='table80'>
                                                    <p className='jobTitle'>{res.title}</p>
                                                </td>
                                                <td className='table20'>
                                                    <b>{res.location}</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='table80'>
                                                    <p>{res.company} - <span className='jobType'>{res.type}</span></p>
                                                </td>
                                                <td className='table20'>
                                                    <p>{res.created_at}</p>
                                                </td>
                                            </tr>                              
                                        </table>
                                    </button>
                            </Link>                    
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default JobList