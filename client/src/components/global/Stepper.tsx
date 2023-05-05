import * as React from 'react';

export interface IAppProps {
    maxIndex: number,
    startsAt: number,
    children?: React.ReactNode,
    setIndex: Function,
    activeIndex: number,
    items: Array<{ name: string, label: string }>
}

const Stepper: React.FunctionComponent<IAppProps> = ({ activeIndex, setIndex, children, maxIndex = 10, startsAt = 0, items }) => {

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
      <div className='space-y-2 w-40 sm:space-y-0 sm:flex sm:space-x-3'>
        {items.map((item, i) => (
          <p key={i} onClick={e => switchIndex(1, i)} className={`${activeIndex == i ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 cursor-pointer"}`}>{item.label}</p>
        ))}
      </div>
      <div>
        {children || <>Empty content</>}
      </div>
  </aside>
}

export default Stepper;