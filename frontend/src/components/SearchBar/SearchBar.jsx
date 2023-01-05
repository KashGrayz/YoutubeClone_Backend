
//fetch videos from the YouTube DATA API based on a provided search string and display in a centered iframe. 


export default function SearchBar({criteria, setCriteria, getVideoBySearchTerm}) {


  function handleSubmit(event){
      event.preventDefault();
      getVideoBySearchTerm(criteria);
      setCriteria('')

  }
    
  
  return (
    <div>
       <form onSubmit ={handleSubmit} className = 'search'>
            <input className = 'search-input' type = 'text' onChange={(event) => setCriteria(event.target.value)} value = {criteria}>
              
            </input>
            <button  type = 'submit'>Search</button>
      </form>

    </div>
  )
}

