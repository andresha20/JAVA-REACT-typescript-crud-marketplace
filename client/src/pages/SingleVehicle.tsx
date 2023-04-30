import React from 'react';
import Header from '../components/global/Header';
import useSWR from 'swr'
import { useSearchParams } from 'react-router-dom';
import fetcher from '../utils/fetcher';
import AnimatedLoading from '../components/global/AnimatedLoading';
import { convertToNumericFormat, filters } from '../utils/general';

const SingleVehicle = () => {

    const [routerQuery, setRouterQuery] = useSearchParams();
    const params: any = Object.entries(routerQuery);
    const { data, error, isLoading } = useSWR(routerQuery.get('id') && `/filter?id=${routerQuery.get('id')}`, fetcher);
    const postData = data?.[0] || {};

    if (error) return <p>Error</p>
    if (isLoading) return <AnimatedLoading />

    return <div>
        <Header title={routerQuery.get('name') || ''}/>
        <div className='p-10 grid grid-cols-1 md:grid-cols-2 gap-14 max-w-screen-lg mx-auto'>
            <div>
                <img src={postData?.imgUrl || '/images/noimage.jpg'} />
            </div>
            <div>
                <h1 className='text-blue-500'>{postData.postName}</h1>
                <p>Año {postData.year} - {postData.model} - {postData?.location || 'Sin ubicación'}</p>
                <h1 className='font-bold'>${convertToNumericFormat(postData.price)}</h1>
                <div className='my-10 space-y-5'>
                    <p className='font-bold text-xl border-b border-gray-400'>Información del vehículo</p>
                    <div className='space-y-2'>
                        {Object.keys(postData).map((q, i) => filters.map(filter => filter.name == q && q).includes(q) && (
                            <div key={i} className='flex justify-between items-center'>
                                <p className='text-sm'>{filters?.[filters.findIndex(el => el.name == q)]?.label}</p>
                                {(q == "model" || q == "exchange" || q == "negotiable" || q == "bulletproof")
                                    ?
                                    <p className='font-bold text-xl'>{(q == "exchange" || q == "negotiable" || q == "bulletproof") ? 'Sí' : postData?.[q]}</p>
                                    :
                                    <p>{filters?.[filters?.findIndex(el => el.name == q)]?.options?.[filters?.[filters?.findIndex(el => el.name == q)]?.options?.findIndex(opt => opt.value == postData[q])]?.label || 'N/A'}</p>
                                }
                            </div>
                        ))}
                    </div>
                    <p>{postData?.description || 'Sin descripción'}</p>
                </div>
            </div>
        </div>
    </div>;
};

export default SingleVehicle;