const filter = () => {
  return (input) => {
    if (input) return 'Да';
    return 'Нет';
  };
}

export default filter;
