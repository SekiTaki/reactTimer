import React, { useState, useEffect } from 'react';

const MyForm = () => {
  const [textInput, setTextInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [checkboxInput, setCheckboxInput] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // 從本地存儲中讀取資料
    const storedData = localStorage.getItem('tableData');

    if (storedData) {
      setTableData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // 將資料儲存到本地存儲中
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

    // 創建新的資料對象
    const newData = {
      text: textInput,
      date: dateInput,
      checkbox: checkboxInput,
    };

    // 將新的資料對象添加到表格資料中
    setTableData([...tableData, newData]);

    // 清空輸入欄位
    setTextInput('');
    setDateInput('');
    setCheckboxInput(false);
  };

  return (
    <div>
      <h1>My Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Text Input:
          <input type="text" value={textInput} onChange={handleTextChange} />
        </label>

        <br />

        <label>
          Date Input:
          <input type="date" value={dateInput} onChange={handleDateChange} />
        </label>

        <br />

        <label>
          Checkbox:
          <input
            type="checkbox"
            checked={checkboxInput}
            onChange={handleCheckboxChange}
          />
        </label>

        <br />

        <button type="submit">Add to Table</button>
      </form>

      <br />

      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Date</th>
            <th>Checkbox</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.text}</td>
              <td>{data.date}</td>
              <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyForm;