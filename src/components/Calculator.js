import keys from './keys';

const Calculator = () => (<div className="container">
      <input type="text" readOnly placeholder="0" />
      <div className="keys">
        {keys().map((element, index) => (<button id={index} key={element.btn} type="button">{element.btn}</button>))}
      </div>
    </div>
  );

export default Calculator;