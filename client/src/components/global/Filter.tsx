import { useForm } from 'react-hook-form';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { brands as models } from '../../utils/general';
export interface IAppProps {
    color?: string,
}

type FormData = {
    brand: number;
    model?: string;
    exchange: boolean;
    negotiable: boolean;
    bulletproof: boolean;
};

const Filter: React.FunctionComponent<IAppProps> = ({ color }) => { 
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm<FormData>();

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name: origin } = e.target;
        let properties = getValues();
        let keys = Object.keys(properties);
        switch (origin) {
            case 'bulletproof':
            case 'negotiable':
            case 'exchange':
                setValue(origin, !properties[origin]);
                break;
                
                default:
                break;
        }
    }

    const submit = () => {
        const properties = getValues();
        let params: any = { brand: 1 };
        if (Object.keys(properties).length == 0) return false;
        Object.keys(properties).map((el) => {
            switch (el) {
                case 'brand':
                    params[el] = properties[el];
                    break;
                case 'model':
                    if (properties[el] == '') {
                        delete properties[el];
                    } else {
                        params[el] = properties[el];
                    }
                    break;
                case 'bulletproof':
                case 'exchange':
                case 'negotiable':
                    if (properties[el] == false) {
                        delete properties[el];
                    } else {
                        params[el] = properties[el];
                    }
                    break;
                default:
                    break;
            }
        })
        const searchParams = new URLSearchParams(params);
        return navigate(`/catalog?${searchParams}`);
    }

    return <aside>
        <form onSubmit={handleSubmit(() => submit())} className='space-y-5 select-none'>
            <div className='flex space-x-2 w-full'>
                <div className='w-full space-y-2'>
                    <label className='font-bold'>Marca</label>
                    <div className='w-full'>
                        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            setValue("brand", parseInt(e.target.value))
                        }} className="cursor-pointer w-full px-3 py-2 bg-white border border-gray-500 rounded-md text-sm shadow-sm placeholder-primary-default-400
                        focus:outline-none focus:border-primary-default focus:ring-1 focus:ring-primary-default
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-red-700 invalid:text-red-600
                        focus:invalid:border-red-700 focus:invalid:ring-red-500">
                        {models.map((el: any, i: number) => (
                            <option value={i+1} key={i}>{el.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className='w-full space-y-2'>
                    <label className='font-bold'>Modelo</label>
                    <input placeholder='Modelo del vehículo' className="w-full px-3 py-2 bg-white border border-gray-500 rounded-md text-sm shadow-sm placeholder-primary-default-400
                        focus:outline-none focus:border-primary-default focus:ring-1 focus:ring-primary-default
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-red-700 invalid:text-red-600
                        focus:invalid:border-red-700 focus:invalid:ring-red-500
                        " {...register("model")} />
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <input onChange={(e) => handleCheckbox(e)} type="checkbox" id="demoCheckbox" name="negotiable" value="1"/>
                    <label> Negociable</label>
                </div>
                <div>
                    <input onChange={(e) => handleCheckbox(e)} type="checkbox" id="demoCheckbox" name="exchange" value="2"/>
                    <label> Permuta</label>
                </div>
                <div>
                    <input onChange={(e) => handleCheckbox(e)} type="checkbox" id="demoCheckbox" name="bulletproof" value="3"/>
                    <label> Blindaje</label>
                </div>
            </div>
            <div className='flex justify-end'>
                <input className="cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" />
            </div>
        </form>
    </aside>
}

Filter.defaultProps = {
    
}

export default Filter;