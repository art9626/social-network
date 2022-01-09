import { useParams, useNavigate } from "react-router-dom"


export const WithURLData = (Component) => {
  const URLDataComponent = (props) => {
    const userId = useParams().userId;


    return (
      <Component {...props} userId={userId} />
    )
  }

  return URLDataComponent;
}