

export function getArticles(ID) {
  let articleID = ""
  if(ID){
    articleID = `/${ID}`
  }


    return fetch(`https://be-portfolio-project.onrender.com/api/articles${articleID}`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        return res
      });
  }

  export function getComments(ID){

    return fetch(`https://be-portfolio-project.onrender.com/api/articles/${ID}/comments`).then((data)=>{
      return data.json()
    }).then((res)=>{
      return res.comments
    })
  }