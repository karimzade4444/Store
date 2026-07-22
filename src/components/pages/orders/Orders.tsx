import { useStore } from "@/components/store/store";


const Orders = () => {
const { cart } = useStore();

return (
  <>
    <div>
        <p>Order details</p>
      {cart.map((item) => (
        <div key={item.id}></div>
      ))}
    </div>
  </>
);}

export default Orders