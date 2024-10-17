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

  cw1.addEventListener("click", function () {
    //TODO
    answer.innerHTML=('loading')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      answer.innerHTML='';
      const ul = document.createElement('ul');

      posts.forEach(post => {

        const li = document.createElement('li');
        li.innerHTML = `<strong> User : ${post.id} ${post.title} </strong><br> ${post.body}`;
        ul.appendChild(li);
        
      });
      answer.appendChild(ul)
      
    });
  });

  cw2.addEventListener("click", function () {
    //TODO
    answer.innerHTML=('Loading..');

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => {
      console.log(post)
      answer.innerHTML='';
      const postDiv = document.createElement('div')
      postDiv.innerHTML = `<strong>${post.title}</strong>${post.body}`;

      answer.appendChild(postDiv);
    });
  });

  cw3.addEventListener("click", function () {
    //TODO
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
      answer.innerHTML=`Dodano nowy post o nazwie = ${data.id}`;
      postDiv.innerHTML = `<strong>${post.title}</strong>${post.body}`;
    });
  })

})();
