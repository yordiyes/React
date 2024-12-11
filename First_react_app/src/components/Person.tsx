import  { useState } from 'react';

export default function Person() {
  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  });

  const handleClick = () => {
    setName({ firstName: 'Yordanos', lastName: 'Yeshitla' });
  };

  return (
    <div>
      <button onClick={handleClick}>Show Name</button>
      <div>My Name is: {name.firstName} {name.lastName}</div>
    </div>
  );
}
