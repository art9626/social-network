import { useParams } from "react-router-dom"


export const WithURLData = (Component) => {
  const URLDataComponent = (props) => {

    // console.log('url data');

    // Использование данного хука приводит к перерисовке URLDataComponent!!!
    // Из за этого перерисовываются вложенные компоненты!!!
    let {userId} = useParams();
    if (userId) {
      userId = +userId;
    }

    // let a = useParams().userId;
    // let userId = 21727;

    return (
      <Component {...props} userId={userId} />
    )
  }

  return URLDataComponent;
}