const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchQuery = form.elements.query.value;
    const config = { params: { q: searchQuery } }
    const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';

})


const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)
            console.log(show);
        }
    }
}