# Marketplace Frontend
> A NFT Marketplace web app but without all the crypto process.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- This project offers an ecosystem for NFT artists.
- Give all people access to buy and sell NFTs without a complex UI.
- Purchase notifications for sellers


## Technologies Used
- Node - version 16.20.0
- Angular - version 16.0.0
- Typescript - version 5.0.2
- Ngrx - version 16.0.1
- Rxjs - version 7.8.0
- Ngx socket io - version 4.5.1


## Features
The project main features are:
- Category filters, time creation filters
- Dynamic layout 
- Unique ownership of items
- Purchase notification for sellers
- Fluent authentication (Using ngrx stores)
- Favorite items collection
- Live preview of NFT creation
- Lazy load of modules
- Interceptors, guards and loggout internal timer
- Http Services
- Custome directives
- Validators
- Override of styles on libraries for custome apparence (Angular Material)


## Setup
All packages require for this setup are inside `package.json`. Is important to know that the version of Node used is 16.20.0 (NVM install 16.20.0, may work as well).

- First run `npm install` to install required packages
- Setup one's local environment, inside the source directory of this project under /environments folder ("/src/environments"), create a `environment.ts`, this file will hold all the required variables to run this project:

| Variable Name  | Value |
| ------------- | ------------- |
| SERVER_URL | http://3.87.231.179:8000  |
| SOCKET_URL  | http://3.87.231.179:5000  |
| BACKEND_KEY | 31BDEFB6508F9178D366BB2F2E85E2154B50A549 |

This `SERVER_URL` and `SOCKET_URL` are the actual backend for this test demostration. Also, `BACKEND_KEY` are use to work with no-authenticated request, but to have at least one layer of security

- After that, run `npm run start-prox` to start the project.

## Room for Improvement

- Add responsive design
- Loading state of components with ngrx
- A route to see others user details
- Image upload with Firebase
- A new tab on profile detail that show items purchased
- Favorite list of items should show creator name (Or ownership)
- Filter items by price ranges (At a functional level)



## Contact
Created by [@sdrosa-dev]([https://www.flynerd.pl/](https://www.linkedin.com/in/sdrosa-dev/)).

