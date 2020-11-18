# MyTestRepo

This is a test repo for automation exercises 

## Installing / Getting started

### Prerequisites
IMPORTANT: Please make sure you have installed:
  - Node >10.16.3 (https://nodejs.org/download/release/v10.16.3/)
  - npm >5.5.1 (https://github.com/npm/npm/releases/tag/v5.5.1)


Once you have those ones running correctly, please clone the repo:

```shell
git clone git@github.com:abermudezm/MyTestRepo.git
```

Open the project from MyTestRepo/test folder, then install the dependencies 
```shell
npm install
```

Finally you can run the test cases
```shell
cd acceptance/
npm run test:acc
```
NOTE: If you got issues related to the chrome version, please ensure you are using node 10.16.3, then execute this command:
```shell
chromedriver --port=4444 --url-base=/wd/hub --verbose
```
Then run the test cases in a new terminal
