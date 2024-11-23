import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from './components/ui/card'
import CounterDisplay from './components/CounterDisplay'
import CustomButton from './components/CustomButton'
import store from './store/store';
import { Provider } from 'react-redux';
import ResetButton from './components/ResetButton';

function App() {

  // const [count, setCount] = useState(0);

  // const handleClick = (type) => {
  //   switch (type) {
  //     case "increment":
  //       setCount(prev => prev + 1);
  //       break;
  //     case "decrement":
  //       setCount(prev => prev - 1);
  //       break;
  //     default:
  //       setCount(0);
  //       break;
  //   }
  // }

  return (
    <Provider store={store}>

      <div className='flex justify-center items-center h-screen'>

        <Card className="w-[400px] p-4">
          <CardTitle>
            Counter Example
            45
          </CardTitle>
          <CardContent>
            <ResetButton />
            <CounterDisplay />
            <div className='flex gap-2 w-full justify-center'>
              <CustomButton text={"Increment"} type={"increment"} />
              <CustomButton text={"Decrement"} type={"decrement"} />
            </div>
          </CardContent>
        </Card>

      </div>
    </Provider>
  )
}

export default App