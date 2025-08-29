##Questions and Answers
............

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**
 . getElementById("idName")

কেবল একটি element খুঁজে বের করে (id সবসময় ইউনিক হয়)

রিটার্ন করে একটি element object

.getElementsByClassName("className")

একই class থাকা সব element এর একটি collection রিটার্ন করে

রিটার্ন হয় HTMLCollection (Array না, তবে loop করা যায়)

. querySelectorAll("selector")

CSS selector দিয়ে মিলে এমন সব element কে নিয়ে আসে

রিটার্ন হয় NodeList (forEach দিয়ে loop করা যায়)


   
2. How do you **create and insert a new element into the DOM**
   document.createElement("tagName") দিয়ে নতুন element বানানো

.innerHTML দিয়ে content যোগ করা

.appendChild() ব্যবহার করে DOM এ বসানো

   
3. What is **Event Bubbling** and how does it work?

   
5. What is **Event Delegation** in JavaScript? Why is it useful?
6. What is the difference between **preventDefault() and stopPropagation()** methods?

 

