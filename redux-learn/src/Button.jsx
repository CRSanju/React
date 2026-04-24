import { useDispatch } from "react-redux";
import { addMoney } from "./storenew"
import { removeMoney } from "./storenew"

export default function Button() {
    const dispatch = useDispatch();

    return (
        <>
        <button onClick={() => dispatch(addMoney(1000))}>
            Add 1000
        </button>
        <button onClick={() => dispatch(removeMoney(1000))}>
            Remove 1000
        </button>
        </>
    )
}