export default function Summary({ className, priceList = [] }) {
  const totalPrice = priceList.reduce((a, b) => a + b?.price, 0);
  return (
    <div className={className}>
      <h3>Summary</h3>

      {/* Summary/Total */}
      <div className="d-flex flex-column">
        {priceList.map((item, index) => (
          <p key={index}>
            {item?.label} (x{item?.qty}) Rp{item?.price}
          </p>
        ))}
        <hr />
        <h3>Total: {totalPrice}</h3>
      </div>
    </div>
  );
}
