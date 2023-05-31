import React, { useState } from "react";
import CardProd from "../CardProtuct";

function ListaProdutos() {
    const [showList, setShowList] = useState(false);

    const src = "https://th.bing.com/th/id/OIP.33CwBYkmnMfpA9Djup22JwHaHa?pid=ImgDet&rs=1";
    const produtos: any = [];

    produtos.push({
        src: "cacaca",
        price: 322,
        name: "casa",
        description: "casa de ferreira",
    }, {
        src: "cacaca",
        price: 322,
        name: "casa",
        description: "casa de ferreira",
    }, {
        src: "cacaca",
        price: 322,
        name: "casa",
        description: "casa de ferreira",
    }, {
        src: "cacaca",
        price: 322,
        name: "casa",
        description: "casa de ferreira",
    });


    function renderCardsProducts() {
        let arrayCards: any = [];

        // produtos.forEach(produto => {
            // let prodElement = <CardProd
            //    ProdutoModel={ProdutoModel}
            // />
            // arrayCards.push(prodElement);
        // });

        return arrayCards;
    }

    function troca(){
        const state = showList;
        setShowList(!state);
    }
    
    return (
        <div>
            {showList && renderCardsProducts()}
            <button onClick={()=>{troca}}>Troca</button>
        </div>
    );
}

export default ListaProdutos;