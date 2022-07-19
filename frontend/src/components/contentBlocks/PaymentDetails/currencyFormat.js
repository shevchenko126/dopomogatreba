const currencyFormat = (value, currencyDisplay) => {
    console.log(typeof (value), value)
    return new Intl.NumberFormat('uk', {
        style: 'currency',
        currency: 'UAH',
        currencyDisplay: currencyDisplay
    }).format(value);
}

export default currencyFormat