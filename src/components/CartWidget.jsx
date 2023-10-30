import "./CartWidget.css";

export function CartWidget ({nombre}){

    return(

        <div class="cartBtn">
            <a>
                <i class="fa-solid fa-cart-shopping position-relative" id="iconoCarrito">
                    <span class="numeroCarrito">0</span>
                </i>

            </a>
        </div>


    )
}