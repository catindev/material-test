const filter = () => {
  return (input) => {
    return new Date(input).toLocaleTimeString();
  };
}

export default filter;
