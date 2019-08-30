# Pseudocode and whiteboarding 

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*

- Describe the purpose of whiteboarding and pseudocode.
- List steps for problem solving.
- Create pseudocode to describe a basic problem.
- Implement whiteboarding and pseudocode techniques.
 



## Pseudocode 
 * Pseudocode is a description of what a computer program or algorithm must to do, expressed in a formally-styled natural language rather than in a programming language. Pseudocode attempts to describe the solution to a problem in a way that is easier and more concise than code. It is a stepping-stone toward writing the code. It forces you to think critically about the problem, and allows you to attempt multiple solutions. It is often used as a detailed step in the process of developing a program. It allows designers or lead programmers to express the design in great detail and provides programmers a detailed template for the next step of writing code in a specific programming language.



##  Why is pseudocode important ? 

Pseudocode will help you develop your programming mindset, it will facilitate writing your code and breaking down either complex or simple problem. 


## Approaching a coding problem
<!--Consider making this a guided practice and walking through a real example for each step. It might help students understand how to apply these questions to a pseudocode exercise.  -->

Pseudocode isn't just about writing down the steps that you already know. It's a tool to help you work through the problem. Before we can write pseudocode to solve the problem, we need to know the problem. 

* The Steps
	* Identify the Problem.
	* Conceptualize.
	* Break it down.
	* Start small.

#### Problem 1 - How to Make a PB&J Sandwich

*From [Get Creative Today](http://getcreativetoday.com/lessons/pseudo-code-flowcharts/)*

***Example 2.1:***

Make PB&J Sandwich:


***Q. What do we think?***

> A. This is a good place to start. It is a good set of instructions and intuitive for us to follow. However, we still don't know what physical steps are required.

Take a second to imagine if you had never made a sandwich before. Think about the instructions you would need for that first sandwich. A computer has no real memory; every time it starts a task, it has no recollection of performing it before. We must tell it every single step, every single time. We need to break these steps down into smaller steps that the computer can understand.

***Example 2.2:***

```
PROGRAM MakePB&JSandwich:
  Grab a paper plate;
  Open bread container;
  Grab bread package;
  Untwist bread package;
  Open bread bag and remove two slices;
  Place slices on paper plate;
  Grab a plastic knife;
  Open peanut butter jar;
  Use knife to scoop out peanut butter;
  Apply peanut butter to one slice of bread;
  Spread peanut butter on slice;
  Place knife on plate;
  Close peanut butter jar;
  Open jelly bottle;
  Squeeze jelly onto second bread slice;
  Close jelly bottle;
  Place down jelly;
  Pick up knife;
  Spread jelly on slice;
  Bring two slices of bread together;
  Cut slices in half down the middle;
  Throw knife in the trash;
  Pick up one half of sandwich;
  Enjoy;
END.  
```

****Q. What do we think?****

> A. The sequence in this example is very thorough! However, we are still assuming certain conditions, such as that our utensils or ingredients already exist. What if we are out of plates? In that case, will we grab a napkin to place our sandwich on? What if we are out of jelly? Will we throw the sandwich away or eat it with just peanut butter?

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
--
2. Define a function **lastCharacter** that accepts two strings as arguments.
The function should return true if both strings end with the same character. Otherwise,it should return false.

Example output:

```
lastCharacter('apples', 'pumpkins');  ==> true
lastCharacter('marker', 'pen'); => false
```
--
3. Write a function called **filterTriples** receives an array of numbers
as a parameter and should return an array without any number that is a multiple of 3 but keep the rest.

Example output:

```
filterTriples([3, 4, 5, 6, 9, 13]); ==> [ 4, 5, 13 ]
```

 
 