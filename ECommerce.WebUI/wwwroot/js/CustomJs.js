//$('#txtSearch').keyup(function () {
//    debugger
//    var typeValue = $(this).val();
//    var prods = document.getElementById("name");
//    prods.each(function () {
//        if ($(this).text().search(new RegExp(typeValue, "i")) < 0) {
//            $(this).fadeOut;
//        }
//        else {
//            $(this).show();
//        }
//    })
//});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#form1').addEventListener('input', function () {
        var query = document.getElementById('form1').value;
        if (query.trim() != '') {
            fetch('/Product/Search?word=' + query)
                .then(function (response) {
                    if (!response.ok) {
                        return;
                    }
                    return response.json();
                })
                .then(function (data) {
                    let content = "";
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        content += `
                         <tr>
                <td>
                    ${data[i].productName}
                </td>
                <td>
                   ${data[i].unitPrice}
                </td>
                <td>
                   ${data[i].unitsInStock}
                </td>
                <td>
                    <a class="btn btn-xs btn-success"
                       href="/Cart/AddToCart?productId=${data[i].productId}&page=@Model.CurrentPage&category=@Model.CurrentCategory">Add To Cart</a>

                   
                       ${
                           if (data[i].hasAdded)` < a id = "remove" class="btn btn-xs btn-danger" href = "/Cart/RemoveDirectly?productId=${data[i].productId}" > Remove from Cart</a>`
                    }
                    </td >
            </tr >
                        `;
                    }
                    document.querySelector('#mytable').innerHTML = content;
                })
                .catch(function (error) {
                    console.error('Error : ', error);
                });
        }
    });
})