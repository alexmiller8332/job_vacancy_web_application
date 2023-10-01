import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import '../style/JobDetail.css';

const JobDetail = () => {

    const { url_params } = useParams();

    const [data, setdata] = useState({})

    const [company, setCompany] = useState()

    const [type, setType] = useState()

    const [title, setTitle] = useState()

    const [description, setDescription] = useState()
    
    const [location, setLocation] = useState()

    const [company_logo, setCompany_logo] = useState()

    const [company_url, setCompany_url] = useState()

    const [how_to_apply, setHow_to_apply] = useState()


    useEffect(() => {
        axios.get(`https://dev6.dansmultipro.com/api/recruitment/positions/`+ url_params)
            .then((res) => {
                setdata(res.data)
            })
    }, [])

    useEffect(() => {
        const { company, type, title, description, location, company_url, company_logo, how_to_apply } = data;
        setCompany(company)
        setType(type)
        setTitle(title)
        setDescription(description)
        setLocation(location)
        setCompany_url(company_url)
        setCompany_logo(company_logo)
        setHow_to_apply(how_to_apply)
    });

    return (
        <div className='container'>

            <Link to="/" className='backBtn'>back</Link>

            <div>
                <div className='card'>
                    <div className='isiCard'>
                        <p>{type} - {location}</p>
                        <h2 className='detailTitle'>{title}</h2>
                        <hr/>
                        <table>
                            <tr>
                                <td className='table65'>
                                    {description}
                                </td>
                                <td className='table35'>
                                    <table className='card'>
                                        <tr><td>{company}</td></tr>
                                        <tr><td><hr/></td></tr>
                                        <tr><td><img src={company_logo} alt='Company Logo' className='logo'></img></td></tr>
                                        <tr><td><a href={company_url}>{company_url}</a></td></tr>
                                    </table>
                                    <table className='card'>
                                        <tr><td><b>How to apply</b></td></tr>
                                        <tr><td><hr/></td></tr>
                                        <tr><td>{how_to_apply}</td></tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetail