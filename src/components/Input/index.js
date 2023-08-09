import React, { useState, useEffect } from 'react';

const MyForm = () => {
    const [textInput, setTextInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [checkboxInput, setCheckboxInput] = useState(false);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // 从本地存储中读取数据
        const storedData = localStorage.getItem('tableData');

        if (storedData) {
            setTableData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        // 将数据存储到本地存储中
        localStorage.setItem('tableData', JSON.stringify(tableData));
    }, [tableData]);

    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleDateChange = (event) => {
        setDateInput(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setCheckboxInput(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // 创建新的数据对象
        const newData = {
            text: textInput,
            date: dateInput,
            checkbox: checkboxInput,
            time: new Date().toLocaleTimeString() // Add the current time
        };

        // 将新的数据对象添加到表格数据中
        setTableData([...tableData, newData]);

        // 清空输入字段
        setTextInput('');
        setDateInput('');
        setCheckboxInput(false);
    };

    const handleClearTable = () => {
        // 清空表格数据
        setTableData([]);
    };

    return (
        <div className='grid justify-center'>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th className='border-[1px]'>事件</th>
                                        <th className='border-[1px]'>日期</th>
                                        <th className='border-[1px]'>進度</th>
                                        <th className='border-[1px]'>時間</th> {/* Add time column */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data, index) => (
                                        <tr key={index}>
                                            <td className='border-[1px]'>{data.text}</td>
                                            <td className='border-[1px]'>{data.date}</td>
                                            <td className='border-[1px]'>{data.checkbox ? '完成' : '未完成'}</td>
                                            <td className='border-[1px]'>{data.time}</td> {/* Display time */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='pt-10'>
                <label>
                    記錄時件:
                    <input className="border-2 rounded mr-5 ml-2" type="text" value={textInput} onChange={handleTextChange} />
                    日期:
                    <input type="date" value={dateInput} onChange={handleDateChange} />
                    進度:
                    <input
                        type="checkbox"
                        checked={checkboxInput}
                        onChange={handleCheckboxChange}
                    />
                </label>
                <div className='pt-10'>
                    <button class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900" type="submit">Add to Table</button>
                    <button type="button" class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900" onClick={handleClearTable}>清空表格</button>
                </div>
            </form>
            <br />
        </div>
    );
};

export default MyForm;