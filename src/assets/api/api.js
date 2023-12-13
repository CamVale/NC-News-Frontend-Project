

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

  export function patchVotes(ID, change){
    let patchReq = {
      inc_votes: 1
    }
    if (change === 'down'){
      patchReq.inc_votes = -1
    }

    return fetch(`https://be-portfolio-project.onrender.com/api/articles/${ID}`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchReq),
    }).then((data =>{
    return data.json()
  })).then((res)=>{
    return res.article
  })
  }