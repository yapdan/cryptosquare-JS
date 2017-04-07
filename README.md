# Crypto Square

#### JavaScript classic crypto square - 4.7.2017

#### By Dan Yap

## Description

Implement the classic method for composing secret messages called a square code.

Write a program that, given an English text, outputs the encoded version of that text.

First, the input is normalized: the spaces and punctuation are removed from the English text and the message is downcased.

Then, the normalized characters are broken into rows. These rows can be regarded as forming a rectangle when printed with intervening newlines.

For example, the sentence

> If man was meant to stay on the ground, god would have given us roots.

is normalized to:

> ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots

The plaintext should be organized in to a rectangle. The size of the rectangle (r x c) should be decided by the length of the message, such that c >= r and c - r <= 1, where c is the number of columns and r is the number of rows.

Our normalized text is 54 characters long, dictating a rectangle with c = 8 and r = 7:
> ifmanwas
> meanttos
> tayonthe
> groundgo
> dwouldha
> vegivenu
> sroots

The coded message is obtained by reading down the columns going left to right.

The message above is coded as:
> imtgdvsfearwermayoogoanouuiontnnlvtwttddesaohghnsseoau

Notice that were we to stack these, we could visually decode the cyphertext back in to the original message:
> imtgdvs
> fearwer
> mayoogo
> anouuio
> ntnnlvt
> wttddes
> aohghn
> sseoau

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery

## Source

J Dalbey's Programming Practice problems [view source](http://users.csc.calpoly.edu/%7Ejdalbey/103/Projects/ProgrammingPractice.html)
