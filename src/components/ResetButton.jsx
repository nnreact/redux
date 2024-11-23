import { Button } from '@/components/ui/button';
import { reset } from '@/store/slices/counterSlice';
import { RotateCcw } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

function ResetButton() {

    const { count } = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    return (
        <div className='w-full flex justify-end items-center gap-4'>
            <p>{count}</p>
            <Button onClick={() => dispatch(reset())}>
                <RotateCcw />
            </Button>
        </div>
    )
}

export default ResetButton