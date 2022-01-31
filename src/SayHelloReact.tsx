import * as React from "react";

interface SayHelloReactProps {
  text: string;
}

export const SayHelloReact = ({text}: SayHelloReactProps) => {
  return(
    <div> 
      <h1>My text is {text}</h1>
    </div>);
};
