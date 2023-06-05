const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchQuery = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchQuery}`);
    for (let i = 0; i < res.length; i++) {
        const img = document.createElement('img');
        img.src = res.data[i].show.image.medium;
        document.body.append(img)
    }


    form.reset();
});
