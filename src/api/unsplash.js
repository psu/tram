import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID S-9L7thtLn8ABNSSbidj5UwUY9XWchcbnb9HiII8k00',
  },
})

// axios
//   .get('https://api.unsplash.com/search/photos', {
//     params: { query: term },
//     headers: {
//       Authorization:
//         'Client-ID S-9L7thtLn8ABNSSbidj5UwUY9XWchcbnb9HiII8k00',
//     },
//   })
//   .then(response => {
//     console.log(response.data.results)
//   })
