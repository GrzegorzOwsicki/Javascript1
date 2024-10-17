(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  const showLoadingPopup = () => {
    const loadingPopup = document.createElement('div');
    loadingPopup.id = 'loadingPopup';
 
    loadingPopup.innerText = 'Loading…';
    loadingPopup.style.position = 'fixed';
    loadingPopup.style.top = '50%';
    loadingPopup.style.left = '50%';
    loadingPopup.style.transform = 'translate(-50%, -50%)';
    loadingPopup.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    loadingPopup.style.color = 'white';
    loadingPopup.style.padding = '20px';
    loadingPopup.style.borderRadius = '5px';
    document.body.appendChild(loadingPopup);
  };

  const hideLoadingPopup = () => {
    const loadingPopup = document.getElementById('loadingPopup');
    if (loadingPopup) {
      loadingPopup.remove();
    }
  };

  cw1.addEventListener("click", function () {
    //TODO
    showLoadingPopup();
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      answer.innerHTML='';
      const ul = document.createElement('ul');

      posts.forEach(post => {

        const li = document.createElement('li');
        li.innerHTML = `<strong> User : ${post.id} ${post.title} </strong><br> ${post.body}`;
        ul.appendChild(li);
        hideLoadingPopup();
      });
      answer.appendChild(ul)
      
    });
  });

  cw2.addEventListener("click", function () {
    //TODO
    showLoadingPopup();

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => {
      console.log(post)
      answer.innerHTML='';
      const postDiv = document.createElement('div')
      postDiv.innerHTML = `<strong>${post.title}</strong>${post.body}`;
      hideLoadingPopup();
      answer.appendChild(postDiv);
    });
  });

  cw3.addEventListener("click", function () {
    //TODO
    showLoadingPopup();
    const createPost = {
      title : 'new Post',
      body : 'lorem ipsum',
      userId : 1
    };
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(createPost)
    })
    
    .then(response => response.json())
    .then(data => {
      console.log(data)
      hideLoadingPopup();
      answer.innerHTML=`Dodano nowy post o nazwie = ${data.id}`;
      postDiv.innerHTML = `<strong>${post.title}</strong>${post.body}`;
    });
  })

})();
