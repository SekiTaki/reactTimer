import React, { useState } from 'react';

const InputForm = ({ onAddData, onClearTable }) => {
  const [textInput, setTextInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [checkboxInput, setCheckboxInput] = useState(false);

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

    const newData = {
      text: textInput,
      date: dateInput,
      checkbox: checkboxInput,
      time: new Date().toLocaleTimeString(),
    };

    onAddData(newData);

    setTextInput('');
    setDateInput('');
    setCheckboxInput(false);
  };

  return (
    <div>
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
          <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900" type="submit">Add to Table</button>
          <button type="button" className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900" onClick={onClearTable}>清空表格</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;