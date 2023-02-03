import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY)

export const getGifs = async (searchValue, limit = 10, sort = 'relevant') => {
    const result = await gf.search(searchValue, {
        limit, sort, lang: 'en'
    })
    console.log(result)
    return result.data
}