import React from 'react';
import Header from '../components/global/Header';
import useSWR from 'swr'
import { useSearchParams } from 'react-router-dom';
import fetcher from '../utils/fetcher';
import AnimatedLoading from '../components/global/AnimatedLoading';

const SingleVehicle = () => {

    const [routerQuery, setRouterQuery] = useSearchParams();
    const params: any = Object.entries(routerQuery);
    const { data, error, isLoading } = useSWR(routerQuery.get('id') && `/filter?id=${routerQuery.get('id')}`, fetcher);
    const postData = data || {};

    if (error) return <p>Error</p>
    if (isLoading) return <AnimatedLoading />

    return <div>
        <Header title={routerQuery.get('name') || ''}/>
        
        Welcome
    </div>;
};

export default SingleVehicle;