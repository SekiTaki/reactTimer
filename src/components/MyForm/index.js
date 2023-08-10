import React, { useState, useEffect } from 'react';
import InputForm from '../Input';
import Table from '../Table';

const MyForm = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('tableData');

    if (storedData) {
      setTableData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tableData', JSON.stringify(tableData));
  }, [tableData]);

  const handleAddData = (newData) => {
    setTableData([...tableData, newData]);
  };

  const handleClearTable = () => {
    setTableData([]);
  };

  return (
    <div>
      <Table tableData={tableData} onClearTable={handleClearTable} />
      <InputForm onAddData={handleAddData} />
    </div>
  );
};

export default MyForm;