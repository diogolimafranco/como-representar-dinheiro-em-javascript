function formatMoney(amount, decimalCount = 2, decimal = ",", thousands = ".") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    let formatted = negativeSign;
    formatted += (j ? i.substr(0, j) + thousands : '');
    formatted += i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands);
    formatted += (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");

    return formatted
  } catch (e) {
    console.log(e)
  }
};