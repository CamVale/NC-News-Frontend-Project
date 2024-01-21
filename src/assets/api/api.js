export function getArticles(ID) {
  let articleID = "";
  if (ID) {
    articleID = `/${ID}`;
  }

  return fetch(
    `https://be-portfolio-project.onrender.com/api/articles${articleID}`
  )
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      return res;
    });
}

export function getComments(ID) {
  return fetch(
    `https://be-portfolio-project.onrender.com/api/articles/${ID}/comments`
  )
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      return res.comments;
    });
}

export function postComment(ID, comment) {
  return fetch(
    `https://be-portfolio-project.onrender.com/api/articles/${ID}/comments`,
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "tickle122",
        body: comment,
      }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.comment;
    });
}

export function deleteComment(ID) {
  fetch(`https://be-portfolio-project.onrender.com/api/comments/${ID}`, {
    method: "DELETE",
  }).then((data) => {
    return data
  })
}

export function getTopics(){
  return fetch(
    `https://be-portfolio-project.onrender.com/api/topics`
  )
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      return res.topics
    });
}

export function getArticlesByTopic(topic) {
  return fetch(
    `https://be-portfolio-project.onrender.com/api/articles?topic=${topic}`
  )
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      return res;
    });
}
