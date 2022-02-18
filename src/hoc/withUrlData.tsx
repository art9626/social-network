import { useParams } from "react-router-dom"
import React from 'react';


export const WithURLData = <P extends {userId: number}>(WrappedComponent: React.ComponentType<P>) => {

  const URLDataComponent: React.FC<Omit<P, 'userId'>> = (props) => {
    
    let userId: number | null = null;

    // Использование данного хука приводит к перерисовке URLDataComponent!!!
    // Из за этого перерисовываются вложенные компоненты!!!
    let {id} = useParams();
    if (id) {
      userId = +id;
    }

    // let a = useParams().userId;
    // let userId = 21727;

    return (
      <WrappedComponent {...props as P} userId={userId} />
    )
  }

  return URLDataComponent;
}