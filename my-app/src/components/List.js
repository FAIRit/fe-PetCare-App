import React from 'react';


const List = ({ items }) => (
  <p>
    {
      items && items.map((item, index) => <p key={index}>{item}</p>)
    }
  </p>
  );

export default List;