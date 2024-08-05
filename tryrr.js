let box = document.getElementById('box')


fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => getData(json))

      function getData(params) {
        for (const iterator of params) {
            console.log(iterator);
            
            let h3 = document.createElement('h3')
            let img = document.createElement('img')
            let p = document.createElement('p')
            let div = document.createElement('div')

            h3.innerHTML = 'nomi:' + iterator.category
            p.innerHTML = 'narxi:' + iterator.price + '$'
            img.src = iterator.image

            div.classList.add('card')
            div.appendChild(img)
            div.appendChild(h3)
            div.appendChild(p)

            box.appendChild(div)


        }
      }