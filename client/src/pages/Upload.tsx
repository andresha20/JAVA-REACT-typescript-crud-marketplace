import React from 'react';
import Header from '../components/global/Header';
import UploadForm from '../components/global/UploadForm';

const Upload = () => {

    return <div>
        <Header title='Publicar'/>
        <div className='p-10 grid grid-cols-1 md:grid-cols-2 gap-14 max-w-screen-lg mx-auto'>
            <UploadForm/>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold'>Publica tu vehículo</h1>
                <p>Publica tu vehículo en nuestro portal de manera gratuita.</p>
                <div>
                    <img src='/images/txl.png' height={500} width={500} alt='Showcase'/>
                </div>
            </div>
        </div>
    </div>;
};

export default Upload;