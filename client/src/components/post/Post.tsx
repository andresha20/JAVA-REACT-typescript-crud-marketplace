import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faLocationDot, faGasPump } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { convertToNumericFormat } from '../../utils/general';

export interface IAppProps {
    postData?: any,
    key?: any,
}

const Post: React.FunctionComponent<IAppProps> = ({ postData }) => {

    const navigate = useNavigate();

    const redirectTo = (data: any) => {
        let { postName, id } = data;
        navigate(`/catalog/post?id=${id}&name=${postName}`)
    }

    return <aside onClick={() => redirectTo(postData)} className='grid grid-cols-1 p-3 rounded shadow border border-gray-100'>
            <div className='relative flex flex-col items-center'>
                <img src={postData?.imgUrl || '/images/noimage.jpg'} width={500} height={500}/>
                <p className='bg-opacity-80 text-white p-3 font-bold'>
                    $ {convertToNumericFormat(postData.price)}
                </p>
            </div>
            <div>
                <p onClick={() => redirectTo(postData)} className='cursor-pointer hover:text-blue-500 transition-all transform hover:scale-105 font-bold text-xl text-center'>{postData.postName}</p>
                <p className='text-center flex-1'>{postData.model}</p>
            </div>
            <div className='text-sm text-gray-500 mt-5 space-y-2 flex-1'>
                <p><FontAwesomeIcon title='Kilometraje' icon={faGauge} className='h-5 w-5 mr-2'/>{postData.mileage} {postData.mileageType == 2 ? 'millas' : 'kilometros'}</p>
                <p><FontAwesomeIcon title='Combustible' icon={faGasPump} className='h-5 w-5 mr-2'/>{postData.fuelType == 1 ? 'Gasolina' : (postData.fuelType == 2 ? 'Diesel' : (postData.fuelType == 3 ? 'Eléctrico' : 'Híbrido'))}</p>
                <p><FontAwesomeIcon title='Combustible' icon={faLocationDot} className='h-5 w-5 mr-2'/>{postData?.location || 'Sin ubicación'}</p>
            </div>
    </aside>
}

Post.defaultProps = {
    
}

export default Post;