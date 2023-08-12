import React from 'react';

const Table = ({ tableData}) => {
  return (
    <div className='grid justify-center'>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th className='border-[1px] px-12'>事件</th>
                    <th className='border-[1px] px-12'>日期</th>
                    <th className='border-[1px] px-12'>進度</th>
                    <th className='border-[1px] px-12'>時間</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td className='border-[1px]'>{data.text}</td>
                      <td className='border-[1px]'>{data.date}</td>
                      <td className='border-[1px]'>{data.checkbox ? '完成' : '未完成'}</td>
                      <td className='border-[1px]'>{data.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;