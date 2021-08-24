# Tech Challege

Implementation of Package	Challenge. I have used KnapSack Alogrithm to find the optimal Indexes.

## Installation

Use a node js environment to run this project.
```
Node version v10.24.1 
npm install
npm run start
```

```
launch.json
```
is configured so, user can execute in "Run and debug" mode as well.
The ```package.json``` contains the main script to run the whole program: In Package.json change the name of file if you want to do the testing with a different File. 
```
"scripts": {
  "testMocha": "mocha 'tests/**/*.js' --recursive --reporter mochawesome --timeout 60000 --exit",
    "testMocha:awesome": "mocha --reporter mochawesome || true",
    "open:report": "open mochawesome-report/mochawesome.html"
}
```

## OutPut
The system will generate output report in the form of mochaawsome report and it also display output on the terminal for passed and failed test cases.
![](image_readmeFile/s.PNG)

## Questions or Suggestions
Feel free to send me the questions or suggestion at my email address.
lubnayaqoob@gmail.com