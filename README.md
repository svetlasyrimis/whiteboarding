# Whiteboarding(js-functions) 



## Pseudocode 
 * Pseudocode is a detailed description of what a computer program or algorithm must do, expressed in a formally-styled natural language rather than in a programming language. Pseudocode is often used as a detailed step in the process of developing a program. It allows designers or lead programmers to express the design in great detail and provides programmers a detailed template for the next step of writing code in a specific programming language.

Source: [TechTarget](https://whatis.techtarget.com/definition/pseudocode)


##  Why is pseudocode important ? 

Pseudocode will help you develop your programming mindset, it will facilitate writing your code and breaking down either complex or simple problem. 

* The Steps
	* Identify the Problem.
	* Conceptualize.
	* Break it down.
	* Start small.

##  Whiteboarding
Whiteboarding is the attempt to solve a certain coding problem by writing it out on a whiteboard (either in pseudocode or actual code in a certain language). 
It aims to evaluate how well you can think on the spot to approach a new problem, and most importantly for you to explain your programming thought process as you're writing out your code. 


## Practice

1. Write a function called **uniqueInOrder** which takes as argument a sequence(array or string) and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

Example output:

```
uniqueInOrder('AAAABBBCCDAABBB') ==> ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         ==> ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       ==> [1,2,3]
```
____________
2. Define a function **lastCharacter** that accepts two strings as arguments.
The function should return true if both strings end with the same character. Otherwise,it should return false.

Example output:

```
lastCharacter('apples', 'pumpkins');  ==> true
lastCharacter('marker', 'pen'); => false
```

3. Write a function called **filterTriples** receives an array of numbers
as a parameter and should return an array without any number that is a multiple of 3 but keep the rest.

Example output:

```
filterTriples([3, 4, 5, 6, 9, 13]); ==> [ 4, 5, 13 ]
```

 
 
