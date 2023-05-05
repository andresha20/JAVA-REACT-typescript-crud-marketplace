import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Stepper from './Stepper';

type FormData = {
    postName: string;
    brand: number;
    model?: string;
    color?: string;
    location?: string;
    exchange: boolean;
    negotiable: boolean;
    bulletproof: boolean;
    fuelType?: number;
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
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const navigate = useNavigate();
  const {
      register,
      handleSubmit,
      getValues,
      setValue,
      formState: { errors },
  } = useForm<FormData>();

  return <aside>
    <form className='space-y-5'>
        <Stepper maxIndex={steps.length} items={steps} startsAt={0} activeIndex={activeIndex} setIndex={(data: number) => setActiveIndex(data)}>
          {activeIndex == 0 &&
            <>
              <div>
                <div className='w-full'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la publicación</label>
                    <input type="text" maxLength={50} id="postName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ejemplo: Vendo por motivo viaje" required/>
                </div>
                <div className='w-full'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modelo</label>
                    <input type="text" maxLength={50} id="model" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ejemplo: Land Cruiser Prado" required/>
                </div>
              </div>
              <div className='flex space-x-3'>
                <div className='w-full'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color del vehículo</label>
                    <input type="text" maxLength={15} id="color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ejemplo: Rojo" required/>
                </div>
                <div className='w-full'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicación</label>
                    <input type="text" maxLength={50} id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ejemplo: Medellín" required/>
                </div>
              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
              </div>
            </>
          }
        </Stepper>
      <Button>Publicar</Button>
    </form>
  </aside>
}

UploadForm.defaultProps = {
    
}

export default UploadForm;