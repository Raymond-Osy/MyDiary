# MyDiary
MyDiary is an online journal where users can pen down their thoughts and feelings.

[![Build Status](https://travis-ci.com/Raymond-Osy/MyDiary.svg?branch=develop)](https://travis-ci.com/Raymond-Osy/MyDiary)

# Features
- Users can sign Up or sign In
- Users can get all entries
- Users can get an entry by ID
- Users can add new entry
- Users can update an entry

# To Run :
Clone this repo : git clone https://github.com/Raymond-Osy/MyDiary.git

- Navigate to the directory and type the command: npm install && npm run start

- Navigate to the browser and access the following URLs:
- GET http://localhost:8000/api/v1/entries- to view all entries

- GET http://localhost:8000/api/v1/entries/1 to view the entry with ID of 1

- POST http://localhost:8000/api/v1/entries - to add a new entry

- PUT http://localhost:8000/api/v1/entries/1 - to modify an entry with ID of 1