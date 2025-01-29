```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('use effect count: ', count)
    },[count]);

    const increment = () =>{
        setCount(prevCount => prevCount + 1);
    }

    return(
        <div>
            <h1>About page</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
```