1. qus : Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll?

ans: getElementById is used when you want to select an element using its id.It always returns a single element.getElementsByClassName is used to select elements by their class name.It can return more than one element.It gives an HTMLCollection.querySelector selects an element using a CSS selector.It only returns the first element that matches.querySelectorAll also uses a CSS selector.It returns all matching elements.It gives a NodeList.




2.qus: How to create and insert a new element into the DOM ?

ans : First, create a new element with document.createElement().After that, add content using innerText or innerHTML.Then attach the element to the page using appendChild() or append().


3. qus : What is Event Bubbling?

ans: Event Bubbling means the event starts from the clicked element.Then it moves upward through its parent elements.It continues until it reaches the top of the DOM.


4. qus : What is Event Delegation? Why is it useful?

ans: Event Delegation is when you add an event listener to a parent element.The parent handles events for its child elements.It is helpful because it makes the code cleaner.It improves performance.It also works for elements added later.


5. qus : Difference between preventDefault() and stopPropagation() methods?


ans : preventDefault() stops the browser’s default behavior.For example, it can stop a link from opening.stopPropagation() prevents the event from going to parent elements.It stops the bubbling process.