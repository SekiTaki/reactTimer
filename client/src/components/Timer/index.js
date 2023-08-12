import React, { useState, useEffect } from 'react';

const TimeComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1 className='text-3xl font-bold'>監聽時間</h1>
      <h2 className='text-xl font-bold'>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default TimeComponent;