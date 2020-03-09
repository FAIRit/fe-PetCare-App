import React from 'react';


const List = ({ items }) => (
  <p>
    {
      items && items.map((item, id) => <p key={id}>{item}</p>)
    }
  </p>
  );

export default List;