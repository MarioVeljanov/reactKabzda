import React from "react";
import { useState } from "react";

export default {
  title: "components/React.memo",
//   component: Acordion,
};


const Counter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: string[]}) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["1", "2", "3", "4", "5"]);
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <Counter count={count}/>
        <br/>
        <hr/>
        <br/>
        <Users users={users} />
    </>
}