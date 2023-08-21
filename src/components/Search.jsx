import {useState } from 'react'
import {useGlobalContext} from '../context'


const Search = () => {
    const [text, setText] = useState('')
    const {setTerm, fetchRandomMeal} = useGlobalContext()

    const handleChange = (e) =>{
        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text){
            setTerm(text)
            setText('')
        }
    }

    const handleRandomMeal = () => {
        setTerm('')
        fetchRandomMeal()
    }
    return <header className='search-container'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='type favorite name' value={text} onChange={handleChange} className='form-Input' />
            <button type='submit' className='btn'> search</button>
            <button type='submit' className='btn btn-hipster' onClick={handleRandomMeal}> surprise me</button>
        </form>
    </header>
}

export default Search