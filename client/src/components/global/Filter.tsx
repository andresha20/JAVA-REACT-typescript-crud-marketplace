import { useForm } from 'react-hook-form';
import * as React from 'react';

export interface IAppProps {
    color?: string,
}

const Filter: React.FunctionComponent<IAppProps> = ({ color }) => { 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const models = [
        { name: "BMW", value: 1 }
    ]

    const submit = () => {

    }

    return <aside>
        <form onSubmit={handleSubmit(() => submit())} className='space-y-5'>
            <div className='flex space-x-2 w-full'>
                <div className='w-full space-y-2'>
                    <label className='font-bold'>Modelo</label>
                    <div className='w-full'>
                        <select defaultValue={1} className="w-full px-3 py-2 bg-white border border-gray-500 rounded-md text-sm shadow-sm placeholder-primary-default-400
                    focus:outline-none focus:border-primary-default focus:ring-1 focus:ring-primary-default
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-red-700 invalid:text-red-600
                    focus:invalid:border-red-700 focus:invalid:ring-red-500">
                        {models.map((el: any, i: number) => (
                            <option value={el.value} key={i}>{el.name}</option>
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
                " {...register('lastName', { required: true })} />
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <input type="checkbox" id="demoCheckbox" name="checkbox" value="1"/>
                    <label> Negociable</label>
                </div>
                <div>
                    <input type="checkbox" id="demoCheckbox" name="checkbox" value="1"/>
                    <label> Permuta</label>
                </div>
                <div>
                    <input type="checkbox" id="demoCheckbox" name="checkbox" value="1"/>
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