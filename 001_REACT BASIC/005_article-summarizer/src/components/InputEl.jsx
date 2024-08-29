import './css/Input.css'

const InputEl = ({ url, setUrl, fetchingSummary }) => {
    function handleFormSubmit(e) {
        e.preventDefault()
        fetchingSummary(url)
    }
    return (
        <div style={{ textAlign: 'center', margin: '1rem 0' }} className="form-container">
            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Summarize Articles with <br /><span className='gradient-style'>GPT-SumZ</span></h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        className='input'
                        type="text"
                        value={url}
                        placeholder='Enter the article URL'
                        onChange={(e) => setUrl(e.target.value)} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default InputEl