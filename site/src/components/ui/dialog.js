import React from 'react';

import './dialog.css';

function Dialog({ message, classNames }) {
  return (
    <div className={`dialog ${classNames}`}>
      <p className="dialog_message">{message}</p>
    </div>
  )
}

export default Dialog;