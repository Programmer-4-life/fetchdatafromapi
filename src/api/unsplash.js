import axios from "axios"

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID xLYevx6GjJO3jo0scF2fPlz2Ua8i-2Oni-LvsY0mIQc"
    }
})