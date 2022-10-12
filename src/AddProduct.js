import { useState, useMemo, useRef } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();
  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((total, curr) => {
      console.log("ahiahia");
      return total + curr.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name ..."
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        value={price}
        placeholder="Enter price ..."
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <button onClick={() => handleSubmit()}>Add</button>

      <h2>Total: {total}</h2>
      <ul>
        {products.map((data, index) => (
          <li key={index}>
            {data.name} - {data.price}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddProduct;
