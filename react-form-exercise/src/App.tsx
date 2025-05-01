import { ChangeEvent, FormEvent, useState } from "react";

export type Form = {
  firstname: string
  lastname: string
  age: number
  favoriteFoods: string[]
}


const App = () => {
      const [formData, setFormData] = useState<Form>({
          firstname: "",
          lastname: "",
          age: 0,
          favoriteFoods: []
      })
      const [displayFormData, setDisplayFormData] = useState<boolean>(false)
  
  
  
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
          const {name, value} = e.target
          setFormData(prevState => ({
              ...prevState,
              [name]: value
          }))
      }

      const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target
        setFormData(prevState => {
          const newFoods = checked ? [...prevState.favoriteFoods, value] : prevState.favoriteFoods.filter(food => food !== value)
          return {
           ...prevState,
           favoriteFoods: newFoods
          }
        })
      }
  
      const handleClear = (e: FormEvent) => {
          e.preventDefault()
          setFormData({
            firstname: '',
            lastname: '',
            age: 0,
            favoriteFoods: []
         })
         setDisplayFormData(false)
        }
      
  


    return (
      <div>
        <h1>Controlled Form</h1>
        <form>
          <div>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" placeholder="first name" onChange={handleChange} value={formData.firstname}/>
          </div>
          <div>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" onChange={handleChange} name="lastname" placeholder="last name" value={formData.lastname} />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age"  placeholder="age" onChange={handleChange} value={formData.age} />
          </div>
          <div>
            <label>Favorite Foods:</label>
            <div>
              <input type="checkbox" id="chicken" name="favoriteFoods" value="Chicken" checked={formData.favoriteFoods.includes("Chicken")} onChange={handleCheckboxChange}/>
              <label htmlFor="chicken">Chicken</label>
            </div>
            <div>
              <input type="checkbox" id="beef" name="favoriteFoods" value="Beef" checked={formData.favoriteFoods.includes("Beef")} onChange={handleCheckboxChange}/>
              <label htmlFor="beef">Beef</label>
            </div>
            <div>
              <input type="checkbox" id="vegetables" name="favoriteFoods" value="Vegetables" checked={formData.favoriteFoods.includes("Vegetables")} onChange={handleCheckboxChange}/>
              <label htmlFor="vegetables">Vegetables</label>
            </div>
            <div>
              <input type="checkbox" id="dessert" name="favoriteFoods" value="Dessert" checked={formData.favoriteFoods.includes("Dessert")} onChange={handleCheckboxChange}/>
              <label htmlFor="dessert">Dessert</label>
            </div>
            <div>
              <input type="checkbox" id="pork" name="favoriteFoods" value="Pork" checked={formData.favoriteFoods.includes("Pork")} onChange={handleCheckboxChange}/>
              <label htmlFor="pork">Pork</label>
            </div>
          </div>
        </form>

        <button onClick={() => setDisplayFormData(!displayFormData)}>Display User</button>
        <button onClick={handleClear}>Clear</button>

        <div className="output">
          {displayFormData && (
            <p>Hello {formData.firstname} {formData.lastname}. You are {formData.age} years of age and your favorite foods are {formData.favoriteFoods.join(", ")} Tell me Im wrong.</p>
          )}
        </div>
      </div>
    );
  };


  export default App;