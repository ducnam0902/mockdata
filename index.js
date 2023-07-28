const { productCategory } = require('./stubdata');

function callApi(endpoint, formData){
    fetch(`https://durotan-service.onrender.com/api/v1/${endpoint}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    .then((res) => res.json()).then(data => console.log(data));
}

//color.map(item => callApi('color', item));
//sizes.map(item => callApi('size', item));
//productCategory.map(item => callApi('productcategory', item));