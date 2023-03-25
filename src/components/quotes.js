import { useState, useEffect } from 'react';

const Getquotes = () => {
  const [quote, changeQuote] = useState();
  const [isLoading, changeLoadState] = useState(false);
  const [showError, changeErrorState] = useState(false);
  const apiKey = 'x+JkndIUEBzws+CmMdkBqQ==2BneZCsgYRpwN2ar';
  useEffect(() => {
    const test = async () => {
      changeLoadState(true);
      const collectQuote = fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        method: 'GET',
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json',
      });
      const test = await collectQuote;
      const test2 = test.json();
      test2.then((res) => {
        changeQuote(res[0].quote);
        changeLoadState(false);
      }).catch(() => {
        changeLoadState(false);
        changeErrorState(true);
      });
    };
    test();
  },
  [changeQuote]);
  if (isLoading && !showError) {
    return (
      <div className="parent">
        <div className="rotateright" />
        <div className="rotateleft" />
      </div>
    );
  }
  if (showError) {
    return (<div>Sorry, cannot reach server</div>);
  }
  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};

export default Getquotes;
