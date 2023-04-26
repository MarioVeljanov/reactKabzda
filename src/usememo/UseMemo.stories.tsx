import React, { useMemo, useState } from "react";


export default {
    title: 'useMemo'
}



export const Example1 = () => {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(3);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResult = 1;
    for (let i = 1; i <= a; i++) {
      tempResult *= i;
    }
    return tempResult;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB *= i;
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </>
  );
};


const Counter = (props: { count: number }) => {
  return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: string[] }) => {
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const Example2 = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["1", "2", "3", "4", "5"]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Counter count={count} />
      <br />
      <hr />
      <br />

      <Users users={users} />
    </>
  );
};