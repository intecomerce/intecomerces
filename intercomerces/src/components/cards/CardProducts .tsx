const CardProd= (props) =>{
    return(
        <>
            <figcaption>
                <figure>
                    {props.src}
                </figure>
                <span>
                    {props.price}
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