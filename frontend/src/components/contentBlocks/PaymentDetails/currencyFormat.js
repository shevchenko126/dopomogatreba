const currencyFormat = (value, currencyDisplay) => {
    return new Intl.NumberFormat('uk', {
        style: 'currency',
        currency: 'UAH',
        currencyDisplay: currencyDisplay
    }).format(value);
}

export default currencyFormat