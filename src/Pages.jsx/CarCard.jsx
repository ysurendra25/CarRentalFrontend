

const CarCard = ({ brand, model, price, image_url }) => {

    return(
        <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <img src={image_url} alt="Cant be Displayed" style={{height:"150px", width:"200px"}} />
            <h1>{brand}-{model}</h1>
            <p style={{fontSize:"20px"}}>{price}rs/DAY</p>
            <button >Book</button>
        </div>
    );
};

export default CarCard;







