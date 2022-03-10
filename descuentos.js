//const preciooriginal = 120;
//const preciodescuento = 18;

function caclcularpreciocondescuento (precio, descuento) {
    const porcentajepreciocondescuento = 100 - descuento;
    const preciocondescuento = (precio * porcentajepreciocondescuento) / 100;

    return preciocondescuento;
}

function buttonpricediscount() {
    const inputprice = document.getElementById("inputprice");
    const pricevalue = inputprice.value;

    const inputdiscount = document.getElementById("inputdiscount");
    const discountvalue = inputdiscount.value;
    
    const preciocondescuento = caclcularpreciocondescuento(pricevalue, discountvalue);

    const resultp = document.getElementById("resultp");
    resultp.innerText = "El precio con descuento son: $" + preciocondescuento;
}

function buttonpricecoupon() { 
    const coupons = ["code10", "code20", "code30"];   
    const inputprice = document.getElementById("inputprice");
    const pricevalue = inputprice.value;

    const inputcoupon = document.getElementById("inputcoupon");
    const couponvalue = inputcoupon.value;

    let descuento;

    switch (couponvalue) {
        case "code10":
          descuento = 30;  
            break;

        case "code20":
          descuento = 20;  
            break;

        case "code30":
          descuento = 10;  
            break;
                
        default:
          descuento = 0;  
            break;
      }

    const preciocondescuento = caclcularpreciocondescuento(pricevalue, descuento);

    const resultp1 = document.getElementById("resultp1");
    resultp1.innerText = "El precio con descuento son: $" + preciocondescuento;
}
