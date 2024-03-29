import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Stepper from './Stepper';
import { getYears } from '../../utils/general';
import fetcher from '../../utils/fetcher';
import ErrorWarning from './Error';

type FormData = {
    postName: string | undefined;
    brand: number;
    model?: string | undefined;
    color?: string | undefined;
    location?: string | undefined;
    exchange: boolean;
    negotiable: boolean;
    bulletproof: boolean;
    fuelType?: number;
    condition?: number;
    transmission?: number;
    category?: number;
    year?: number;
};

export interface IAppProps {
    children?: React.ReactNode
}

const UploadForm: React.FunctionComponent<IAppProps> = ({ children }) => {

  const steps = [
    { name: "1", label: "Datos" },
    { name: "2", label: "Detalles" },
  ]
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [notification, setNotification] = React.useState<Object>({});
  const [formData, setFormData] = React.useState<FormData | undefined>();
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const navigate = useNavigate();
  const {
      register,
      handleSubmit,
      getValues,
      setValue,
      formState: { errors },
  } = useForm<FormData>({ defaultValues: { negotiable: false, exchange: false, bulletproof: false }});

  const postData = async () => {
    if (activeIndex == 0) setActiveIndex(state => state + 1);
    if (errors.model || errors.color || errors.location || errors.postName) return setActiveIndex(0);
    return false;
    setLoading(true);
    try {
      const response = await fetcher(`http://localhost:3000/api/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      setNotification({ state: true, type: 'success' })
    } catch (error) {
      console.log(error)
      setNotification({ state: false, type: 'error' })
    }
    setLoading(false);
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: origin, value } = e.target;
    let properties = getValues();
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

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id: origin, value } = e.target;
    switch (origin) {
      case 'postName':
      case 'model':
      case 'location':
      case 'color':
        console.log('this ran')
        setFormData({ ...formData, [origin]: value } as FormData);
        break;
      case 'fuelType':
      case 'transmission':
      case 'category':
        setFormData({ ...formData, [origin]: parseInt(value) } as FormData);

        break; 
    
      default:
        break;
    }
  }

  React.useEffect(() => {
    console.log(formData)
  }, [formData])

  return <aside>
    <form className='space-y-5 select-none' onSubmit={handleSubmit(postData)}>
        <Stepper isButtonDisabled={true} maxIndex={steps.length} items={steps} startsAt={0} activeIndex={activeIndex} setIndex={(data: number) => setActiveIndex(data)}>
          {activeIndex == 0 &&
              <div className='space-y-5'>
                  <div className='flex space-x-3'>
                    <div className='w-full'>  
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la publicación</label>
                        <input {...register("postName", { required: true, minLength: 5, maxLength: 30 })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ejemplo: Vendo por motivo viaje" />
                        {errors.postName && <ErrorWarning>Nombre de la publicación no debe estar vacío.</ErrorWarning>}
                    </div>
                    <div className='w-full'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modelo</label>
                        <input {...register("model", { required: true, minLength: 5, maxLength: 30 })} type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ejemplo: Land Cruiser Prado"/>
                        {errors.model && <ErrorWarning>Modelo del vehículo no debe estar vacío.</ErrorWarning>}

                    </div>
                  </div>
                  <div className='flex space-x-3'>
                    <div className='w-full'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color del vehículo</label>
                        <input {...register("color", { required: true, minLength: 5, maxLength: 30 })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ejemplo: Rojo"/>
                        {errors.color && <ErrorWarning>Color del vehículo no debe estar vacío.</ErrorWarning>}
                    </div>
                    <div className='w-full'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicación</label>
                        <input {...register("location", { required: true, minLength: 5, maxLength: 30 })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ejemplo: Medellín"/>
                        {errors.location && <ErrorWarning>Ubicación del vehículo no debe estar vacía.</ErrorWarning>}

                    </div>
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Año</label>
                      <select {...register("year", { required: true })} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        {getYears().map((el: any, i: number) => (
                          <option value={i+1} key={i}>{el}</option>
                        ))}
                      </select>
                      {errors.year && <ErrorWarning>Año del vehículo no debe estar vacío.</ErrorWarning>}
                  </div>
                  <div className={`flex justify-end mt-5`}>
                    {activeIndex > 0 &&
                      <input onClick={() => setActiveIndex((state: number) => state - 1)} className="text-center cursor-pointer rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"/>
                    }
                    {(!errors.postName && !errors.color && !errors.location && !errors.model) &&
                      <input value="Siguiente" type='submit' className="cursor-pointer rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"/>
                    }
                  </div>
              </div>
          }
          {activeIndex == 1 &&
            <div className='space-y-5'>
              <h2 className='font-bold'>Detalles técnicos</h2>
              <div className='space-y-2'>
                <div>
                    <input type="checkbox" {...register("negotiable") } value='1' id="demoCheckbox" name="negotiable"/>
                    <label> Negociable</label>
                </div>
                <div>
                    <input type="checkbox" {...register("exchange") } value='2' id="demoCheckbox" name="exchange"/>
                    <label> Permuta</label>
                </div>  
                <div>
                    <input type="checkbox" {...register("bulletproof") } value='3' id="demoCheckbox" name="bulletproof"/>
                    <label> Blindaje</label>
                </div>
              </div>
              <h2 className='font-bold'>Detalles mecánicos</h2>
              <div className='space-y-2'>
                <p className='font-bold'>Transmisión</p>
                <div>
                    <input type="radio" {...register("transmission", { required: true })} id="transmission" name="transmission" value="1"/>
                    <label> Manual</label>
                </div>
                <div>
                    <input type="radio" {...register("transmission", { required: true })} id="transmission" name="transmission" value="2"/>
                    <label> Automático</label>
                </div>  
                <div>
                    <input type="radio" {...register("transmission", { required: true })} id="transmission" name="transmission" value="3"/>
                    <label> CVT</label>
                </div>
                {errors.transmission && <ErrorWarning>Elige el tipo de transmisión.</ErrorWarning>}
              </div>
              <div className='space-y-2'>
                <p className='font-bold'>Tipo de Combustible</p>
                <div>
                    <input type="radio" {...register("fuelType", { required: true })} id="demoCheckbox" name="fuelType" value="1"/>
                    <label> Gasolina</label>
                </div>
                <div>
                    <input type="radio" {...register("fuelType", { required: true })} id="demoCheckbox" name="fuelType" value="2"/>
                    <label> Diesel</label>
                </div>  
                <div>
                    <input type="radio" {...register("fuelType", { required: true })} id="demoCheckbox" name="fuelType" value="3"/>
                    <label> Eléctrico</label>
                </div>
                <div>
                    <input type="radio" {...register("fuelType", { required: true })} id="demoCheckbox" name="fuelType" value="4"/>
                    <label> Híbrido</label>
                </div>
                {errors.fuelType && <ErrorWarning>Elige el tipo de combustible.</ErrorWarning>}
              </div>
              <div className='space-y-2'>
                <p className='font-bold'>Condición</p>
                <div>
                    <input type="radio" id="demoCheckbox" {...register("condition", { required: true })}  name="condition" value="1"/>
                    <label> Usado</label>
                </div>
                <div>
                    <input type="radio" id="demoCheckbox" {...register("condition", { required: true })}  name="condition" value="2"/>
                    <label> Nuevo</label>
                </div>  
                {errors.condition && <ErrorWarning>Elige la condición.</ErrorWarning>}
              </div>
              <div className={`flex justify-between mt-5`}>
                {activeIndex > 0 &&
                  <input value="Volver" onClick={() => {
                    setActiveIndex((state: number) => state - 1)
                    scrollTo(0, 0)
                  }} className="text-center cursor-pointer rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"/>
                }
                {Object.keys(errors).length > 0 
                  ?
                  <ErrorWarning>Hay errores en el diligenciamiento del formulario.</ErrorWarning>
                  :
                  <input value="Publicar" type='submit' className="cursor-pointer rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"/>
                }                    
              </div>
            </div> 
          }
        </Stepper>
    </form>
  </aside>
}

UploadForm.defaultProps = {
    
}

export default UploadForm;