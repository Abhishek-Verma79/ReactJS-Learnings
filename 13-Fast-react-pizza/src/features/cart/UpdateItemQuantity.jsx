import { useDispatch } from "react-redux"
import Button from "../../ui/Button.jsx"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice.js";

function UpdateItemQuantity({pizzaId, currQuantity}) {

    const dispatch = useDispatch();

    return (
        <div className="flex gap-2 items-center md:gap-3" >
            <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))} >-</Button>
            <span className="text-sm font-medium" >{ currQuantity }</span>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))} >+</Button>
        </div>
    )
}

export default UpdateItemQuantity
