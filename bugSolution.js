```javascript
// pages/index.js
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  const data = useSomeData(); //This could be your api call or any other asynchronous operation

  if(data === undefined || data.someProperty === undefined){
      return <p>Loading...</p> //This will solve the undefined issue
  }

  return (
    <div>
      <h1>Next.js 15 App</h1>
      <p>Current Path: {pathname}</p>
      <p>Data from API:{data.someProperty}</p>
    </div>
  );
}

function useSomeData(){
  //Here we are simulating a API call
  const [data, setData] = React.useState(undefined);

  React.useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setData({ someProperty: 'Some Data' });
    };
    fetchData();
  }, []);
  return data;
}
```