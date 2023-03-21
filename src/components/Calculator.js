const Calculator = () => {
  const arr = [
    { btn: 'AC' },
    { btn: '+/-' },
    { btn: '%' },
    { btn: '/' },
    { btn: 7 },
    { btn: 8 },
    { btn: 9 },
    { btn: '*' },
    { btn: 4 },
    { btn: 5 },
    { btn: 6 },
    { btn: '-' },
    { btn: 1 },
    { btn: 2 },
    { btn: 3 },
    { btn: '+' },
    { btn: 0 },
    { btn: '.' },
    { btn: '=' },
  ];
  return (
    <div className="container">
      <input type="text" readOnly placeholder="0" />
      <div className="keys">
        {arr.map((element, index) => (<button id={index} key={element.btn} type="button">{element.btn}</button>))}
      </div>
    </div>
  );
};
export default Calculator;
