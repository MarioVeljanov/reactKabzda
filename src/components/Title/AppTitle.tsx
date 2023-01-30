import React from 'react';

type TitlePropsType = {
  value: string
}

export function AppTitle(props: TitlePropsType) {
  console.log('App title');
  return <h1>{ props.value }</h1>;
}
