
type Props = {
        firstname: string,
        lastname: string,
        age: number,
        favoriteFoods: string[]
     }
     


const ControlledForm = (props: Props) => {
  return (
    <h3>Hello {props.firstname} {props.lastname}. You are {props.age} years of age and your favorite foods are  {props.favoriteFoods} Tell me im wrong .</h3> 
)
}

export default ControlledForm