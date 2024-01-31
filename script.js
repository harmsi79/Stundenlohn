function rechnen() {
  const gehaltInput = document.getElementById("monat");
  const stundenInput = document.getElementById("stunden");

  const gehalt = parseFloat(gehaltInput.value);
  const stunden = parseFloat(stundenInput.value);

  const stundenlohn = (3 * gehalt) / 13 / stunden;

  const stundenlohnElement = document.getElementById("stundenlohn");
  stundenlohnElement.textContent = stundenlohn.toFixed(2);
}
