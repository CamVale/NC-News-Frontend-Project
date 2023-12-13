

export function getArticles() {
    return fetch("https://be-portfolio-project.onrender.com/api/articles")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        return res.articles
      });
  }