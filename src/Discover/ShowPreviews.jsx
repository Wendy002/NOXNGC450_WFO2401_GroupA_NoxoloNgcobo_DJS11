import React from 'react'

function ShowPreviews() {
  const [previews, setPreviews] = React.useState([]) // initialise state for  podcast preview
  const [error, setError] = React.useState(null) //  initialise state for  error messages
  
  
  React.useEffect(()=>{    //set use effect hook for handling api calls
    async function addPreviews(){
      try {
        const response = await fetch('https://podcast-api.netlify.app')          //fetch  data and set it to set preview
        const data = await response.json()
        setPreviews(data)

        if (!response.ok) {
            throw Error("Data Fetching Failed")
        }

      } catch (err) {
        setError(err)        //set error to err
        
      }
    }
    addPreviews()  // call function
   }, [])

  if (error) {                 // if error display this message
    return <h1 className='text-red-600 font-extrabold'>{error.message}</h1>
  }
  


  return (
    <>


       <ul className='list-none flex flex-wrap text-white'>
        {previews.map(preview => (
          <li key={preview.id}>
            <h3>{preview.title}</h3>
            <p>{preview.description}</p>
            <p><span className='font-bold'>Seasons</span>{preview.seasons}</p>
            

          </li>
        ))}
      </ul>

    </>
  )
}

export default ShowPreviews;
