import Filter from "../../UI/Filter";

function ProductOperations() {
  return (
    <div>
      <Filter
        filterField="status"
        options={[
          { value: "In stock", label: "In stock" },
          { value: "Out of Stock", label: "Out of stock" },
        ]}
      />
    </div>
  );
}

export default ProductOperations;
