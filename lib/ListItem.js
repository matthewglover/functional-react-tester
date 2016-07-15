import React from 'react';

// ListItem :: { id: number | string, text: string } -> ReactElement
const ListItem = ({ id, text }) =>
  (<li key={id}>
    <span>{text}</span>
  </li>);

ListItem.propTypes = {
  id: React.PropTypes.number,
  text: React.PropTypes.string,
};

export default ListItem;
