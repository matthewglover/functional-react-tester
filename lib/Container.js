import React from 'react';

// Container -> [ReactElement] -> ReactElement
const Container = (children) =>
  (<div>
    <div>{children}</div>
  </div>);

export default Container;
