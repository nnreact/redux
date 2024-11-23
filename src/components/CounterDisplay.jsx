import { useSelector } from "react-redux"

function CounterDisplay() {

    const { count } = useSelector((state) => state.counter);

    return (
        <h1 className='w-full my-6 text-[56px] font-bold text-zinc-800 text-center'>{count}</h1>
    )
}

export default CounterDisplay