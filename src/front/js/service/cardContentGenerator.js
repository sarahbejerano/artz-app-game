const randomNumber = (limit) => Math.floor(Math.random() * limit);
const imageUrl = "https://www.artic.edu/iiif/2/";
const imageParams = "/full/843,/0/default.jpg";

export const getArtworks = (query) => {
    const encodedSearchParams = encodeURIComponent(JSON.stringify(query));
    return fetch("https://api.artic.edu/api/v1/artworks/search?limit=100&fields=artist_title,id,title,image_id,style_title,date_end,place_of_origin,medium_display,dimensions,thumbnail,artist_ids&params=" + encodedSearchParams)
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


