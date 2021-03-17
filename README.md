# Weatherapp

------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Prerequisites
- run `npm i` in both back- and frontend folders to install correct node_modules. 

### Get started

First clone this project from GitHub with the command `git clone https://github.com/lukkaj/weather-app`

The second phase is to change the current API key to your API key or use an existing one. 
Changing the API key is easy. First, go to the backend folder with the command `cd backend`, and then you can use `ls -a` command to see all files. Apikey can be changed to `.env` file by command `nano .env`,
write your API key or paste it with `ctrl + shift + v` and then save changes with `ctrl + s` 
and exit the editor `ctrl + x`
Alternatively, you can create a new .env file with the command `echo APPID = your API key`.

------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Running the app

#### Without docker
Using the app without docker can be done, but is more tedious and requires more manual work.
Running have to be done to both back- and frontend folders simultaneously by being in the folder and typing `npm i && npm start`. After this open browser and type `http://localhost:8000` to see 
current weather and forecasted weather.

#### With docker
The application can be used with docker by running both backend and frontend while being in those
folders. Docker can be run in the backend folder: `docker build -t weatherapp_backend . && docker 
run --rm -i -p 9000:9000 –name weatherapp_backend -t weatherapp_backend` and when in frontend folder:
`docker build -t weatherapp_frontend . && docker run --rm -i -p 8000:8000 --name weatherapp_frontend -t weatherapp_frontend`.
Shutting down docker container can be done with commands `docker stop <container id> ` and container id 
can be obtained with the command `docker ps`

#### With docker compose
The easiest way of running the application is with docker-compose. This can be done by the command 
`docker-compose up`  in the weather-app or the main folder. Background running can be done with the command `docker-compose up -d`.
Docker-compose handles both backend and front end.
Shutting down docker-compose can be done with the command: `docker-compose down`

## Other tasks

#### Hot reloading
Hot reloading is enabled and for example, can be witnessed when service is running by changing the frontend’s index.jsx file row `35` `icon` to empty ``. 
By doing this and saving changes in the editor the `localhost:8000` becomes blank.

#### Forecasted weather
Back- and frontend codes are changed so that the user can see weather forecast from the `localgost:8000` site and the forecast is three hours in the future.

#### Eslint fixes
Some parts of the code were against the eslint's rules and those are fixed.

### Almost done

#### Cloud deployment
Cloud deployment is almost done and the app should be running on AWS public IPv4 3.21.122.34 address. Having problems with the system's ports made this task difficult to accomplish.

### To be done
#### Ansible testing
#### Geolocation to forecasting

------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Origina readme
------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Weatherapp

There was a beautiful idea of building an app that would show the upcoming weather. The developers wrote a nice backend and a frontend following the latest principles and - to be honest - bells and whistles. However, the developers did not remember to add any information about the infrastructure or even setup instructions in the source code.

Luckily we now have [docker compose](https://docs.docker.com/compose/) saving us from installing the tools on our computer, and making sure the app looks (and is) the same in development and in production. All we need is someone to add the few missing files!

## Prerequisites

* An [openweathermap](http://openweathermap.org/) API key.

## Returning your solution

### Via github

* Make a copy of this repository in your own github account (do not fork unless you really want to be public).
* Create a personal repository in github.
* Make changes, commit them, and push them in your own repository.
* Send us the url where to find the code.

### Via tar-package

* Clone this repository.
* Make changes and **commit them**.
* Create a **.tgz** -package including the **.git**-directory, but excluding the **node_modules**-directories.
* Send us the archive.

## Exercises

Here are some things in different categories that you can do to make the app better. Before starting you need to get yourself an API key to make queries in the [openweathermap](http://openweathermap.org/). You can run the app locally using `npm i && npm start`.

### Docker

*Docker containers are central to any modern development initiative. By knowing how to set up your application into containers and make them interact with each other, you have learned a highly useful skill.*

* Add **Dockerfile**'s in the *frontend* and the *backend* directories to run them virtually on any environment having [docker](https://www.docker.com/) installed. It should work by saying e.g. `docker build -t weatherapp_backend . && docker run --rm -i -p 9000:9000 --name weatherapp_backend -t weatherapp_backend`. If it doesn't, remember to check your api key first.

* Add a **docker-compose.yml** -file connecting the frontend and the backend, enabling running the app in a connected set of containers.

* The developers are still keen to run the app and its pipeline on their own computers. Share the development files for the container by using volumes, and make sure the containers are started with a command enabling hot reload.

### Node and React development

*Node and React applications are highly popular technologies. Understanding them will give you an advantage in front- and back-end development projects.*

* The application now only reports the current weather. It should probably report the forecast e.g. a few hours from now. (tip: [openweathermap api](https://openweathermap.org/forecast5))

* There are [eslint](http://eslint.org/) errors. Sloppy coding it seems. Please help.

* The app currently reports the weather only for location defined in the *backend*. Shouldn't it check the browser location and use that as the reference for making a forecast? (tip: [geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation))

### Testing

*Test automation is key in developing good quality applications. Finding bugs in early stages of development is valuable in any software development project. With Robot Framework you can create integration tests that also serve as feature descriptions, making them exceptionally useful.*

* Create automated tests for the application. (tip: [mocha](https://mochajs.org/))

* Create [Robot Framework](http://robotframework.org/) integration tests. Hint: Start by creating a third container that gives expected weather data and direct the backend queries there by redefining the **MAP_ENDPOINT**.

### Cloud

*The biggest trend of recent times is developing, deploying and hosting your applications in cloud. Knowing cloud -related technologies is essential for modern IT specialists.*

* Set up the weather service in a free cloud hosting service, e.g. [AWS](https://aws.amazon.com/free/) or [Google Cloud](https://cloud.google.com/free/).

### Ansible

*Automating deployment processes saves a lot of valuable time and reduces chances of costly errors. Infrastructure as Code removes manual steps and allows people to concentrate on core activities.*

* Write [ansible](http://docs.ansible.com/ansible/intro.html) playbooks for installing [docker](https://www.docker.com/) and the app itself.

### Documentation

*Good documentation benefits everyone.*

* Remember to update the README

* Use descriptive names and add comments in the code when necessary

### ProTips

* When you are coding the application imagine that you are a freelancer developer developing an application for an important customer.

* The app must be ready to deploy and work flawlessly.

* The app must be easy to deploy to your local machine with and without Docker. 

* Detailed instructions to run the app should be included in your forked version because a customer would expect detailed instructions also.

* Structure the code and project folder structure in a modular and logical fashion for extra points.

* Try to avoid any bugs or weirdness in the operating logic.

