import React from "react";
import { ProdutoType } from "../../@types/ProdutoType";

const CardProd = (props:ProdutoType) =>{
    return(
        <>
            <figcaption>
                <figure>
                    <img src={props.src} alt="img"/>
                    
                </figure>
                <span>
                    Preço: {props.price}
                </span>
            </figcaption>
          
            <strong>
                {props.name}
            </strong>
            
            <footer>
                {props.description}
            </footer>
        </>
    );
}

export default CardProd;