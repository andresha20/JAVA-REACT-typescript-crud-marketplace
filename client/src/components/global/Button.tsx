import * as React from 'react';

export interface IAppProps {
    color?: string,
    fn?: Function,
    id?: string,
    textColor?: string,
    children?: React.ReactNode,
    hoverColor?: string,
    hoverText?: string,
    hoverBorder?: string,
}

const Button: React.FunctionComponent<IAppProps> = ({ hoverColor = "hover:bg-gray-900", hoverBorder="hover:border-gray-900", hoverText="hover:text-white", children, id = 'randomId', fn = () => {}, textColor = 'text-white', color = 'bg-primary-default' }) => <aside>
  <div onClick={() => fn()} className={`${color} ${textColor} ${hoverBorder} cursor-pointer transform hover:scale-105 transition-all ${hoverColor} ${hoverText} font-bold rounded-md px-5 py-1 shadow border border-gray-100`}>
    <button className='' id={id}>{children}</button>
  </div>
</aside>

export default Button;