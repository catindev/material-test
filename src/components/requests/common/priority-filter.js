const filter = () => {
  return (input) => {
    let mock = {
      'ORDINARY': 'Обычный',
      'HIGH': 'Высокий'
    };
    return mock[ input ];
  };
}

export default filter;
