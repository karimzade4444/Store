import { useStore } from "@/components/store/store";


const Orders = () => {
const { cart } = useStore();

return (
  <>
    {cart.map((item) => (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.quantity}</p>
      </div>
    ))}
  </>
);}

export default Orders