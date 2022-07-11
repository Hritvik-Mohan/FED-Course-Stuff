# FED-Course

### What is an algorithm?

A set of steps or instructions for completing a task.

- A recipe is an algorithm
- Your morning routine when you wake up is an algorithm and
- The driving directions you follow to get to a destination is also an algorithm.

A set of steps a program takes to finish a task

When we talk of algorithms we’re referring to 2 points

> There is an established body of knowledge on how to solve a particular problem well and it’s important to know what the solutions are.
> 
1. Why is it important?
If you’re unaware that a solution exists you might try to come up with one yourself. Your solution is not as good as efficient.

> Algorithmic Thinking
> 

---

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/efcf11db-920a-4908-b6d4-bb87765149f3/Untitled.png)

Series of values

### Algorithm

1. Start at beginning
2. Compare the current value to target
3. Move sequentially
4. Reach the end of the list

---

> Algorithms should produce a result
> 

> Algorithms should be complete and not take an infinite amount of time.
> 

---

# What makes an algorithm an algorithm and not just something you do?

1. Clearly dThe clearlyproblem statement, input, and output.
2. The steps in the algorithm need to be in a very specific order.
3. The steps also need to be distinct.
4. The algorithm should produce a result.
5. The algorithm should complete in a finite amount of time.

Earlier we talked about:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5488edb-2af8-45fa-9b81-705a0d7f21e8/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e53d278e-d728-41cc-bf6d-356495ec602f/Untitled.png)

# Correctness

We have a clearly defined input satisfying any preconditions and a clearly defined output

> **An algorithm is deemed correct if every run of the algorithm against all possible values in the input data we always get the output we expect.**
> 

> **Part of correctness means that for any possible input the algorithm should always terminate or end**
> 

If these two are not true then our algorithm isn’t correct

---

— Traditionally algorithm correctness is proved by mathematical induction which is a form of reasoning used in mathematics to verify that a statement is correct

This approach involves writing what is called a **specification** and a **correctness proof**.

The proof though **induction** is an important part in designing algorithms

# Efficiency

Efficiency ultimately matters because they **help us solve problems faster** and deliver a better end-user experience in a variety of fields

*Example*

> *Algorithms are used in the sequencing of DNA and more efficient sequencing algorithms allow us to research and understand diseases better and faster.*
> 

There are two measures of efficiency when it comes to algorithms time and space.

— Sounds really cool and very sci-fi.

> **Efficiency measured by time is something you’ll hear called time complexity is a measure of how long it takes the algorithm to run**
> 

> How long it takes to complete a job, the less time you take the more efficient you are.
> 

> **The second measure of complexity is called space complexity and this is pretty computer-specific it deals with the amount of memory taken up on the computer.**
> 

Good algorithms need to be balanced between these two measures to be useful.

— You could have a blazingly fast algorithm but it might not matter if the algorithm consumes more memory than you have available. 

In the game of guessing the number, searching for a value.

How do we figure out how efficient each algorithm is and which algorithm was more suited to our purposes?

The number of tries is a good indicator of how long the algorithm runs for a given set of values

This measurement is called the running time of an algorithm.

We would use it to define time complexity.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a76292e8-f98a-4e83-9bea-24ca007db5d0/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/011ef06d-9876-41af-ad32-b3372c6c4fe3/Untitled.png)

 

Best case scenario

Average case scenario

Worst case scenario

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db5a662e-8254-4476-92c5-c056c0b04d4e/Untitled.png)

Strategy: Start from the middle of the given range to eliminate the rest.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc45978e-42e6-4169-85f9-9870dc2a44f0/Untitled.png)

---

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5d26276-1828-4dc6-bf2d-bede00e0eae5/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/10de5a0a-ce34-4af6-bc71-bb52ab334c5a/Untitled.png)

Too High

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8370045-b323-4464-b3c2-ade79f64cc38/Untitled.png)

Too High

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c9118df-31c8-4e48-a6a3-b89626633e01/Untitled.png)

Too High

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/258260c4-2163-4fc6-81b1-449ccbc4352f/Untitled.png)

Too High

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4795ed3d-1131-4da0-af7b-c08a2e0025bb/Untitled.png)

Too Low

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c0a883a-fd41-4bcd-a2bc-004c14806c52/Untitled.png)

Too High

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64746429-6803-45ec-90af-8a003567f334/Untitled.png)

Correct

Being rid of half the values with each turn is what makes this algorithm much more efficient.

There’s one subtlety binary search

> **For this search method to work, the values need to be sorted.**
> 

Let’s this range of values 100 was unsorted britney would start at the middle with something like 14 and ask if this value is too low or too high, I say it’s too high so she discards everything less than 14.

Now, this example starts to fall apart here because well britney knows what numbers are less than 14 and gerater than 1 she doesn’t need an actual range of values to solve this, a computer however does, however,at.

> **With linear search it doesn’t matter if the values are sorted**
> 
> 
> Since, a linear search algorithm search algorithm just progresses sequentially chekcing every element in the list if the target value exists in the list it will be found.
> 

Remember computers run against lists containing all sorts of data

Not just numbers

In the real case of binary search the algorithm wouldn’t return the target value because we already know that it’s a search algorithm so we’re providing something to search for instead what it returns is the position in the list that the target occupies without the list being sorted a binary search algorithm would discard all the values to the left of 14 which over here include the position where our target value is eventually we’d get a result back saying the target value doesn’t exist in the list which is inaccurate

Input: List of values

Output: Target value, more specifically the positon of the target value in the list.

Binary Search

First the input, a sorted list of values, the output, the position in the list of the target value we’re searching for or some sort of values indicate that the target does not exists in the list