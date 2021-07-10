const getData = async(name) => {
    const apiURL = name ? `${process.env.VUE_APP_API_URL}${name}` : process.env.VUE_APP_API_URL;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    }
}

export default getData;