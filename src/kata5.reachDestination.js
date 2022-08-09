const reachDestination = (distance, speed) => {
  // time = distance / speed
  const time = distance / speed;
  const newArray = (Math.round(time * 2) / 2).toFixed(1);
  return `I should be there in ${newArray} hours.`;
};

module.exports = reachDestination;
