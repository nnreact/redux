    import { decrement, increment } from "@/store/slices/counterSlice"
import { Button } from "./ui/button"
import { useDispatch } from "react-redux";

function CustomButton({
    text,
    type
}) {

    const dispatch = useDispatch();

    const handleLocalClick = () => {

        if (type === "increment") {
            dispatch(increment());
        } else {
            dispatch(decrement());
        }

    }

    return (
        <Button onClick={() => handleLocalClick()} >{text}</Button>
    )
}

export default CustomButton