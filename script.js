// Nasdaq returns by year
const nasdaqReturns = {
  2024: 4.85, 2023: 53.81, 2022: -32.97, 2021: 26.63, 2020: 47.58,
  2019: 37.96, 2018: -1.04, 2017: 31.52, 2016: 5.89, 2015: 8.43,
  2014: 17.94, 2013: 34.99, 2012: 16.82, 2011: 2.70, 2010: 19.22,
  2009: 53.54, 2008: -41.89, 2007: 18.67, 2006: 6.79, 2005: 1.49,
  2004: 10.44, 2003: 49.12, 2002: -37.58, 2001: -32.65, 2000: -36.84,
  1999: 101.95, 1998: 85.30, 1997: 20.63, 1996: 42.54, 1995: 42.54,
  1994: 1.50, 1993: 10.58, 1992: 8.86, 1991: 64.99, 1990: -10.41,
  1989: 26.17, 1988: 13.54, 1987: 10.50, 1986: 6.89
};

// Function to calculate final balance
function calculateFinalBalance() {
  const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
  const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
  const investmentStartYear = parseInt(document.getElementById('investmentStartYear').value);
  const investmentEndYear = parseInt(document.getElementById('investmentEndYear').value);

  let balance = initialInvestment;
  let totalInvestment = initialInvestment;

  for (let year = investmentStartYear; year <= investmentEndYear; year++) {
    if (nasdaqReturns.hasOwnProperty(year)) {
      const returnPercentage = nasdaqReturns[year] / 100;
      balance *= 1 + returnPercentage;

      // Add monthly investment
      for (let i = 0; i < 12; i++) {
        balance += monthlyInvestment;
        totalInvestment += monthlyInvestment;
      }
    }
  }

  // Display the final balance and total investment
  document.getElementById('finalBalance').innerText = `Final Balance: $${balance.toFixed(2)}`;
  document.getElementById('totalInvestment').innerText = `Total Investment: $${totalInvestment.toFixed(2)}`;
}
