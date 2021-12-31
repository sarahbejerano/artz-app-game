export const fetcher = async path => {
    const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1" + path);
    if (response.status === 200) {
        const data = await response.json();

        return data;
    }

    return null;
};
