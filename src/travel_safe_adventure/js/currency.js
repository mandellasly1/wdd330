document.addEventListener("DOMContentLoaded", () => {
  const amountInput = document.getElementById("amount");
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const convertBtn = document.getElementById("convertBtn");
  const resultDiv = document.getElementById("conversionResult");

  convertBtn.addEventListener("click", async () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
      resultDiv.innerHTML = "<p>Please enter a valid amount.</p>";
      return;
    }

    resultDiv.innerHTML = "<p>Converting...</p>";

    try {
      // Use the /convert endpoint
      const response = await fetch(
        `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
      );
      const data = await response.json();

      if (!data || !data.result) {
        resultDiv.innerHTML = "<p>Conversion failed. Try again.</p>";
        return;
      }

      const converted = data.result.toFixed(2);
      const rate = data.info.rate;

      resultDiv.innerHTML = `
        <p>${amount} ${from} = <strong>${converted} ${to}</strong></p>
        <p>Exchange rate: 1 ${from} = ${rate} ${to}</p>
      `;
    } catch (error) {
      resultDiv.innerHTML = "<p>Error fetching exchange rates.</p>";
      console.error(error);
    }
  });
});
