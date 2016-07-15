import React from 'react';

const Timer = ({ secondsElapsed }) => (<div>Seconds Elapsed: {secondsElapsed}</div>);

Timer.propTypes = { secondsElapsed: React.PropTypes.number };

export default Timer;
