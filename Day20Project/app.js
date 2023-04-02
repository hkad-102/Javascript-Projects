const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
})

//Document.documentElement returns the Element that is the root element of document (ex: <html>)
const articlesData = articles.map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');

    return `<article class="post">
        <h2>${title}</h2>
        <div class="post">
            <span>${formatDate}</span>
            <span>${length}</span>
        </div>
        <p>${snippet}</p>
    </article>`
}).join('');

articlesContainer.innerHTML = articlesData