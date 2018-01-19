const getCrypto = async (props) => {
  console.log('getCrypto called')
  try {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${props.baseCurrency}&limit=15`);
    const currencies = await response.json();
      props
      .crypto
      .forEach(Rcurrency => {
        currencies
          .filter(currency => currency.symbol == Rcurrency)
          .forEach(crypto => props.updatePrice([crypto.symbol], {
            price: Number(crypto[
              `price_${
                props
                .baseCurrency
                .toLowerCase()}`
            ]),
            change: crypto.percent_change_1h,
          }));
          // props.updatePrice('BTC', this.state.BTC);
      });
  } catch (e) {
    console.log('error', e);
  }
};
const getReal = async (props) => {
  console.log(props.baseCurrency, 'real')
  try {
    const response = await fetch(`https://api.fixer.io/latest?base=${props.baseCurrency}`);
    const currencies = await response.json();
    console.log('reducer', props.baseCurrency)
    props.updatePrice(`${props.baseCurrency}`,{price:1})
      props
      .real
      .filter(currency => currency !== props.baseCurrency)
      .forEach(Rcurrency => {
        props.updatePrice([Rcurrency], {price: currencies.rates[Rcurrency]});
      });
  } catch (e) {
    console.log('error', e);
  } finally {
    //  console.log('done');
  }
};

module.exports={
  getCrypto,
  getReal,
}
;
