import { filters } from '../utils/general';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as React from 'react';
import PostsFeed from '../components/post/PostsFeed';
import Header from '../components/global/Header';

const Catalog = () => {

    const navigate = useNavigate();
    const [routerQuery, setRouterQuery] = useSearchParams();

    const setQuery = (name: string, value: string | number) => {
        let params: any = Object.fromEntries(routerQuery)
        if (!params[name] || params[name] !== value) {
            params[name] = value;
        }
        const searchParams = new URLSearchParams(params);
        return navigate(`/catalog?${searchParams}`);
    }

    const removeQuery = (name: string) => {
        let params: any = Object.fromEntries(routerQuery)
        if (!params[name]) return false;
        delete params[name];
        const searchParams = new URLSearchParams(params);
        return navigate(`/catalog?${searchParams}`);
    }

    React.useEffect(() => {
        console.log(routerQuery.toString())
    }, [routerQuery])

    return <div>
        <Header title='Catálogo'/>
        <div className="bg-black relative h-96 w-full bg-[url('/images/catalog-banner.png')] object-fill bg-fixed bg-auto bg-top bg-no-repeat">
            <div className='absolute flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 top-1/2 left-1/2 transform w-4/6 -translate-x-1/2 -translate-y-1/2'>
                {Object.keys(Object.fromEntries(routerQuery)).map((q, i) => (
                    <div onClick={() => removeQuery(q)} title='Quitar filtro' key={i} className='flex justify-between bg-white cursor-pointer hover:text-white transition-all hover:bg-red-500 rounded-lg p-3'>
                        {(q == "model" || q == "exchange" || q == "negotiable" || "bulletproof")
                            ?
                                <div>
                                    <p className='text-sm'>{filters?.[filters.findIndex(el => el.name == q)]?.label}</p>
                                    <p className='font-bold text-xl'>{(q == "exchange" || q == "negotiable" || q == "bulletproof") ? 'Sí' : Object.fromEntries(routerQuery)?.[q]}</p>
                                    <p className='text-xs'>Presiona para quitar</p>
                                </div>
                            :
                                <div>
                                    <p className='text-sm'>{filters?.[filters.findIndex(el => el.name == q)]?.label}</p>
                                    <p className='font-bold text-xl'>{filters?.[filters.findIndex(el => el.name == q)]?.options?.[filters?.[filters.findIndex(el => el.name == q)]?.options?.findIndex(opt => opt.value.toString() == routerQuery.get(q))]?.label}</p>
                                    <p className='text-xs'>Presiona para quitar</p>
                                </div>
                        }
                        <p className='ml-5 font-bold'>X</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='block md:flex'>
            <div className='text-lg md:text-2xl whitespace-nowrap font-bold bg-primary-default flex flex-col justify-center items-center text-white py-5 px-40'>
                <p>Filtrar ({Object.keys(Object.fromEntries(routerQuery)).length})</p>
                <p className='underline text-blue-500 text-xl font-bold cursor-pointer transition-all hover:text-white'>Ver más filtros</p>
            </div>
            <div className='bg-gray-300 w-full p-5'>
                <div className='w-full block md:flex items-center md:space-x-5'>
                    {filters.map((filter, i) => i < 4 && (
                        <div key={i} className='space-y-2'>
                            <label className='font-bold'>{filter.label}</label>
                            <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setQuery(filter.name, e.target.value)} className="cursor-pointer w-full px-3 py-2 bg-white border border-gray-500 rounded-md text-sm shadow-sm placeholder-primary-default-400
                                focus:outline-none focus:border-primary-default focus:ring-1 focus:ring-primary-default
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-red-700 invalid:text-red-600
                                focus:invalid:border-red-700 focus:invalid:ring-red-500">
                                {filter.options.map((opt, ii) => (
                                    <option value={opt.value} key={ii}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='p-5 md:p-10 max-w-screen-md mx-auto'>
            <PostsFeed />
        </div>
    </div>;
};

export default Catalog;