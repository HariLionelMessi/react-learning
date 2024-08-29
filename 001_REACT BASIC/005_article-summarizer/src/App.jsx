import { useState } from 'react'
import InputEl from './components/InputEl.jsx'
import Navbar from './components/Navbar.jsx'
import Text from './components/Text.jsx'
import Loader from './components/Loader.jsx'


function App() {
  const [url, setUrl] = useState('')
  const [summaryText, setSummaryText] = useState(null)
  const [loader, setLoader] = useState(false)
  const [noData, setNoData] = useState(false)
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '41f865b8dcmsh01f78ecdff58399p19cb2fjsn415c311d1899',
      'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };
  const fetchingSummary = async (url) => {
    try {
      setLoader(true)
      // const response = await fetch(`https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${url}&lang=en&engine=2`, {
      //   headers: {
      //     'x-rapidapi-key': '41f865b8dcmsh01f78ecdff58399p19cb2fjsn415c311d1899',
      //     'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      //   }
      // });
      const response = await fetch(`https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${url}&lang=en&engine=2`, options)
      const data = await response.json();
      console.log(data.summary);
      setSummaryText(data.summary)
    } catch (error) {
      console.log(error);
      setNoData(true)

    } finally {
      setLoader(false)
      console.log('end');
    }
  }
  return (
    <>
      <Navbar />
      <InputEl url={url} setUrl={setUrl} fetchingSummary={fetchingSummary} />
      {
        (url && loader)
          ? (<Loader />)
          : (
            (noData)
              ? <h3>No DAta</h3>
              : <Text summaryText={summaryText} />
          )
      }
    </>
  )
}

export default App



