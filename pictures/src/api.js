import axios from "axios";

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=qvYwjG3WM0I88-zQCmfFGP3XCMuoY6p5zuGk-h9qOvs'
    
    const response =  await axios.get(url,{
        params: {
            query: 'cars'
        }
    })
    console.log(response)
}

export default searchImage