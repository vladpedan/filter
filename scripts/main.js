(function () {
  const collection = new Users(users),
    list = collection.getList(),
    headers = ['first_name', 'last_name', 'age', 'email', 'skill', 'city'],
    table = document.getElementById('table'),
    headTable = table.querySelector('thead'),
    bodyTable = table.querySelector('tbody'),
    fragment = document.createDocumentFragment(),
    filter = document.getElementById('filter'),
    result = document.querySelector('.result');
  
  headTable.innerHTML = createHeader();

  renderTable(list);

  headTable.addEventListener('click', e => {
    var target = e.target,
      trIndex;

    if (target.tagName === 'TH') {
      trIndex = Array.prototype.indexOf.call(headTable.querySelectorAll('th'), target);
    }
    var firstRow = document.querySelector('tr');

    
    if (firstRow.childNodes[trIndex].style.color === 'black'){
      renderTable(collection.sortBy(headers[trIndex]));

      for (var i = 0; i < headers.length; i++){
        firstRow.childNodes[i].style.color = 'black';
      }
      firstRow.childNodes[trIndex].style.color = 'white';
              } else {
          firstRow.childNodes[trIndex].style.color = 'black';
           renderTable(list);
        }
      
  });

  


  filter.addEventListener('input', filterCollection);

  headTable.addEventListener('click', e => {
    const target = e.target;

    if (target.tagName === 'TH') {
      console.log(Array.prototype.indexOf.call(headTable.querySelectorAll('th'), target));
    }
  })

  function filterCollection() {
    result.style.display = '';

    if (filter.value.length < 3) {
      renderTable(list);
      return false;
    }

    var foundItems = collection.findByValue('first_name', filter.value);

    if (foundItems.length) {
      renderTable(foundItems);
    } else {
      foundItems = collection.findByValue('last_name', filter.value);
        if (foundItems.length) {
         renderTable(foundItems);
        } else {
          foundItems = collection.findByValue('skill', filter.value);
          renderTable(foundItems);
          if (!foundItems.length) {
            result.style.display = 'block';}
        }
    }
  }

  function renderTable(items) {
    bodyTable.innerHTML = '';

    for (let i = 0; i < items.length; i++){
      fragment.appendChild(createRow( items[i] ));
    }

    bodyTable.appendChild(fragment);
  }

  function createRow(data) {
    // data = {first_name: ..., last_name: ...}
    const tr = document.createElement('tr');

    for (let i = 0, max = headers.length; i < max; i++) {
      const td = document.createElement('td');
      td.textContent = data[ headers[i] ];
      tr.appendChild(td);
    }

    return tr;
  }

  function createHeader() {
    return '<tr>' +
        headers
          .map(el => '<th>' + el.replace('_', ' ') + '</th>').join('') +
       '</tr>';
  }
})();


/*(function () {
  const collection = new Users(users),
    firstRow = document.querySelector('tr');

  firstRow.childNodes[0].onclick = function(){
    collection.sortBy("first_name");
  }
})();*/

