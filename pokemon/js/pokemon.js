// Footer año
document.getElementById('year').textContent = new Date().getFullYear();

// Noticias demo
const API_POSTS = 'https://jsonplaceholder.typicode.com/posts?_limit=3';

function createNews(post){
  const div = document.createElement('div');
  div.className = 'card news-item';
  div.innerHTML = `
    <img src="https://picsum.photos/seed/post${post.id}/300/180" alt="noticia">
    <h4 style="margin:0;font-family:Montserrat;">${post.title}</h4>
    <p style="color:var(--muted); margin:6px 0;">${post.body.slice(0,140)}${post.body.length>140?'…':''}</p>
  `;
  return div;
}

fetch(API_POSTS)
  .then(r => r.json())
  .then(posts => {
    const news = document.getElementById('news');
    news.innerHTML = '';
    posts.forEach(p => news.appendChild(createNews(p)));
  })
  .catch(()=> document.getElementById('news').innerHTML = '<div class="card">No se pudieron cargar las noticias.</div>');