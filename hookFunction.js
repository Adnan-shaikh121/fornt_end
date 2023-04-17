import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {isOpen && <p>Hello, world!</p>}
    </div>
  );
}
