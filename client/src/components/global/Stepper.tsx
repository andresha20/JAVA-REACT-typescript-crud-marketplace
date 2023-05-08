import * as React from 'react';
import Button from './Button';

export interface IAppProps {
    maxIndex: number,
    startsAt: number,
    children?: React.ReactNode,
    setIndex: Function,
    activeIndex: number,
    items: Array<{ name: string, label: string }>,
    showButton?: boolean,
    buttonLabel?: string,
    isButtonDisabled?: boolean,
}

const Stepper: React.FunctionComponent<IAppProps> = ({ isButtonDisabled = false, buttonLabel = 'Siguiente', showButton = true, activeIndex, setIndex, children, maxIndex = 10, startsAt = 0, items }) => {

  const switchIndex = (action: number, indexOfElement: number) => {
    switch (action) {
      case 1:
        setIndex(indexOfElement);
        break;
      case 2:
        setIndex(indexOfElement);
        break;
      default:
        break;
    }
  }

  return <aside>
      <div className='w-full sm:justify-center select-none text-sm mb-10 space-y-2 sm:space-y-0 sm:flex '>
        {items.map((item, i) => (
          <p key={i} onClick={e => switchIndex(1, i)} className={`${activeIndex == i ? "bg-blue-500 text-white rounded" : " hover:text-blue-500 font-bold text-gray-700 cursor-pointer"} p-2 transition-all`}>{i + 1}. {item.label}</p>
        ))}
      </div>
      <div>
        {children || <>Empty content</>}
        <div className={`flex ${activeIndex == 0 ? 'justify-end' : 'justify-between'} mt-5`}>
          {activeIndex > 0 && showButton &&
            <Button fn={() => setIndex((state: number) => state - 1)} color='bg-gray-700'>Volver</Button>
          }
          {!isButtonDisabled &&
            <Button fn={() => setIndex((state: number) => state + 1)} color='bg-blue-500'>{buttonLabel}</Button>
          }
        </div>
      </div>
  </aside>
}

export default Stepper;