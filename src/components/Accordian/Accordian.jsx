import React, { useState } from 'react';
import data from './data.jsx';

const Accordian = () => {
  const [selected, setSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const handleSelection = (id) => {
    if (enableMultiSelection) {
      const isSelected = selected.includes(id);
      setSelected(isSelected ? selected.filter((sId) => sId !== id) : [...selected, id]);
    } else {
      setSelected([id]);
    }
  };

  return (
    <div className="container">
      <button className='btn' onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? 'Disable Multi Selection' : 'Enable Multi Selection'}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div onClick={() => handleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>{selected.includes(dataItem.id) ? '➖' : '➕'}</span>
              </div>
              {(enableMultiSelection && selected.includes(dataItem.id)) ||
              (!enableMultiSelection && selected[0] === dataItem.id) ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
