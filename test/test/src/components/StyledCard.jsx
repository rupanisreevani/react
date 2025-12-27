export default function StyledCard() {
  const Products = [
    {
      name: "Book",
      price: "150",
      description: "React books",
    },
  ];

  return (
    <>
      {Products.map((product) => (
        <div  className="card" >
          {product.name}<br></br>
          Price:{product.price}<br></br>
          {product.description}
        </div>
      ))}
    </>
  );
}


