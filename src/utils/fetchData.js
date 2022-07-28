import axios from "axios";
export const exerciseOptions= {
    
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
      };  
      axios.request(exerciseOptions).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });


export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = await response.json()
    return data;
}