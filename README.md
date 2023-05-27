# Lab 8 - Starter

Partners' names: Melody Gill (just me)

Answers to lab questions:
1. I would fit automated tests in (1) within a Github action that runs whenever code is pushed. This would allow me to see how each of my code changes affects the recipe site, in the actual environment where it is going to be hosted (Github Pages). Also, it would make testing my final deployment easy because the automated tests would run without me having to configure anything extra.
2. No because checking if a function is returning the correct output would be more suitable for a unit test.
3. No, because the "message" feature involves a lot of different parts of the application all working together. This isn't just one encapsulated feature, so it is not well suited for a unit test.
4. Yes, because the "max message length" feature is probably just one function that is separate from the rest of the application. It would be easy to test fully using unit tests.