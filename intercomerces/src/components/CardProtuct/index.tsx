import React from "react";
import { ProdutoType } from "../../@types/ProdutoType";

const CardProd = (props:ProdutoType) =>{
    return(
        <>
            <figcaption style={{background:"black", width:"10rem", display:"flex", justifyContent:"center"}}>
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