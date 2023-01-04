1.1
Suppose you have a sorted list of 128 names, and you’re searching through it using binary search. What’s the maximum number of steps it would take?
log2(128) = 7.

1.2
Suppose you double the size of the list. What’s the maximum number of steps now?
log2(256) = 8.

Let’s assume it takes 1 millisecond to check one element.
With simple search, Bob has to check 100 elements,
so the search takes 100 ms to run. On the other hand,
he only has to check 7 elements with binary search (log2 100 is roughly 7),
so that search takes 7 ms to run. But realistically,
the list will have more like a billion elements.
If it does, how long will simple search take?
How long will binary search take? Make sure you have an answer
for each question before reading on.

simple search = n = 1 billion milliseconds = 11.5 days

binary search = log2(n) = log2(1,000,000,000) = 30 millisecond

---

Exercises
Give the run time for each of these scenarios in terms of Big O.

1.3

You have a name, and you want to find the person’s phone number in the phone book.
A: Since you have the name of the person you can use log2(n) = binary search = O(log(n)) to find the name of the person and their phone numner.

1.4

You have a phone number, and you want to find the person’s name in the phone book. (Hint: You’ll have to search through the whole book!)
A: Since you have a phone number but no name you and phone numbers are not ordered in the phone book you will have to search throught the entire book thus O(n)

1.5

You want to read the numbers of every person in the phone book.
A: O(n)

1.6
You want to read the numbers of just the As. (This is a tricky one! It involves concepts that are covered more in chapter 4. Read the answer—you may be surprised!)
O(n) with n being the number of A's in the phonebook.
