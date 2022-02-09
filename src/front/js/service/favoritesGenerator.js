const imageUrl = "https://www.artic.edu/iiif/2/";
const imageParams = "/full/843,/0/default.jpg";

export const getFavorites = (ids) => {
    return fetch(`https://api.artic.edu/api/v1/artworks/?ids=${ids.join(',')}&limit=100&fields=artist_title,id,title,image_id,style_title,date_end,place_of_origin,medium_display,dimensions,thumbnail,artist_ids`)
        .then(resp => resp.json())
        .then(results => {
            return results.data.map((artwork) => {
                return {
                    ...artwork,
                    imageUrl: imageUrl + artwork.image_id + imageParams,
                }
            })
        })
};


