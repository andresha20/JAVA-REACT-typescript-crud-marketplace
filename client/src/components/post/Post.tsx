import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faLocationDot, faGasPump } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

export interface IAppProps {
    postData?: any,
}

const Post: React.FunctionComponent<IAppProps> = ({ postData }) => {

    const navigate = useNavigate();

    const redirectTo = (data: any) => {
        let { postName, id } = data;
        navigate(`/catalog/${id}?post=${postName}`)
    }

    return <aside>
        <div onClick={() => redirectTo(postData)} className='p-3 rounded shadow border border-gray-100'>
            <div className='relative'>
                <img src={postData.imgUrl}/>
                <p className='bg-opacity-80 text-white p-3 font-bold'>
                    $ {postData.price}
                </p>
            </div>
            <p>{postData.postName}</p>
            <p>{postData.model}</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <p><FontAwesomeIcon title='Kilometraje' icon={faGauge} className='h-5 w-5 mr-2'/>{postData.mileage}</p>
                <p><FontAwesomeIcon title='Combustible' icon={faGasPump} className='h-5 w-5 mr-2'/>{postData.fuelType == 1 ? 'Gasolina' : (postData.fuelType == 2 ? 'Diesel' : (postData.fuelType == 3 ? 'Eléctrico' : 'Híbrido'))}</p>
                <p><FontAwesomeIcon title='Combustible' icon={faLocationDot} className='h-5 w-5 mr-2'/>{postData.location}</p>
            </div>
        </div>
    </aside>
}

Post.defaultProps = {
    
}

export default Post;