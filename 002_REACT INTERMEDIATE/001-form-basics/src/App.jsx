import { useState } from "react"


const App = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: 'India',
        city: '',
        state: '',
        postalcode: '',
        comments: false,
        candidate: false,
        gender: ''
    })

    function valueChangeHandler(e) {
        const { name, value, type, checked } = e.target
        setFormData((prev) => {
            return (
                {
                    ...prev,
                    [name]: type === 'checkbox' ? checked : value
                }
            )
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(formData);

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="firstName">First Name</label>
                <div>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={valueChangeHandler}
                    />
                </div>

                <label htmlFor="lastName">Last Name</label>
                <div>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={valueChangeHandler}
                    />
                </div>

                <label htmlFor="email">Email</label>
                <div>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={valueChangeHandler}
                    />
                </div>

                <label htmlFor="address">Street Address</label>
                <div>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={valueChangeHandler}
                    />
                </div>

                <label htmlFor="country">Country</label>
                <div>
                    <select name="country"
                        value={formData.country}
                        onChange={valueChangeHandler}>
                        <option value="Russia">Russia</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="France">France</option>
                        <option value="Japan">Japan</option>
                    </select>
                </div>

                <label htmlFor="city">City</label>
                <div>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={valueChangeHandler}
                    />
                </div>
                <label htmlFor="state">State/Province</label>
                <div>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.city}
                        onChange={valueChangeHandler}
                    />
                </div>

                <label htmlFor="country">Country</label>
                <div>
                    <select name="country"
                        value={formData.country}
                        onChange={valueChangeHandler}>
                        <option value="Russia">Russia</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="France">France</option>
                        <option value="Japan">Japan</option>
                    </select>
                </div>


                <label htmlFor="postalcode">Postal Code</label>
                <div>
                    <input
                        type="text"
                        id="postalcode"
                        minLength={6}
                        maxLength={6}
                        name="postalcode"
                        value={formData.postalcode}
                        onChange={valueChangeHandler}
                    />
                </div>

                <div>By Email</div>
                <input
                    type="checkbox"
                    name="comments"
                    value='comments'
                    checked={formData.comments}
                    onChange={valueChangeHandler} />
                <label htmlFor="">Comments</label>

                <br />

                <input
                    type="checkbox"
                    name="candidate"
                    value='candidate'
                    checked={formData.candidate}
                    onChange={valueChangeHandler} />
                <label htmlFor="">Candidate</label>

                <div>
                    <p>Gender</p>
                    <input type="radio" value='Female' checked={(formData.gender === 'Female') ? true : false} name='gender'
                        onChange={valueChangeHandler} />
                    Female
                    <br />
                    <input type="radio" value='Male' checked={(formData.gender === 'Male') ? true : false}
                        name='gender'
                        onChange={valueChangeHandler} />
                    Male
                    <br />
                    <input type="radio" value='Prefer not to say' checked={(formData.gender === 'Prefer not to say') ? true : false}
                        name='gender'
                        onChange={valueChangeHandler} />
                    Prefer not to say
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default App