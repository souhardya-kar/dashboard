import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import Button from './button_';

import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = ({closeChat}) => {
  const { cart, setCart, currentColor, handleClick } = useStateContext();

  const handleQuantityChange = (index, type) => {
    const updatedCart = [...cart];
    if (type === 'increase') {
      updatedCart[index].quantity += 1;
    } else if (type === 'decrease' && updatedCart[index].quantity > 0) {
      updatedCart[index].quantity -= 1;
    }
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };


  return (
    
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button type="button" className="text-white  text-xs rounded p-1 px-2 bg-orange">
            5 New
          </button>
        </div>
        
        <button
            className={`cancel-button inline-block  text-white focus:outline-none focus:ring-2  focus:ring-opacity-50 hover:drop-shadow-xl text-2xl hover:bg-opacity-80 `}
            onClick={closeChat}
            style={{backgroundColor: currentColor, borderRadius: '50px'}}
          >
            <MdOutlineCancel/>
          </button>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer">
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
        <button
            className={`cancel-button inline-block px-4 py-2 text-white focus:outline-none focus:ring-2  focus:ring-opacity-50 hover:drop-shadow-xl  `}
            // onClick={closeChat}
            style={{backgroundColor: currentColor, borderRadius: '50px'}}
          >
            See all messages
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Chat;