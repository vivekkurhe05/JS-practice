function doesStartWith(input, substr) {
    let index = substr.lastIndexOf("-");
    let portfolio = substr.substring(index+1);
    console.log(portfolio)
    const re = new RegExp(`^Risk And PNL TradeLevel ${portfolio}$`,'i');
    return re.test(input);
}

console.log(doesStartWith('Risk And PNL TradeLevel CR NZ FIX', 'show-tradelevel-icon-CR NZ FIX'));