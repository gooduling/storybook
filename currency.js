let formData = new FormData()
formData.append('date', '29.09');
formData.append('type', 'nal');

let m = await fetch("https://my.ukrsibbank.com/ua/api/currency.php", {
    method: 'POST',
    mode: 'no-cors',
    body: formData
})
