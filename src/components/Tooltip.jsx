// src/components/Tooltip.jsx

import React from 'react';
import PropTypes from 'prop-types';

function Tooltip({ children, text }) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded-md p-2 whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tooltip;
