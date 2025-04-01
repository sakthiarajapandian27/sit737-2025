Step by step procedure
1. Install node.js 
cmd: npm init -y 
2. Install express Winston(integrates the Winston logging) 
cmd: npm install express Winston 
3. Create server.js file (use the code provided in Teams) 
4. Understand the code, and create similar arithmetic operations for subtract, 
multiply, and divide. 
5. Run the microservice 
cmd: node server.js 
6. As the port set is 3040; 
test all the arithmetic operations and are logging properly; 
http://localhost:3040/add?num1=10&num2=10 
http://localhost:3040/subtract?num1=10&num2=10 
http://localhost:3040/multiply?num1=10&num2=2 
http://localhost:3040/divide?num1=10&num2=2 
7. Check and test the error handling operations: 
http://localhost:3040/divide?num1=10&num2=0 
8. Check logs 
cmd: tail -f logs/combined.log(if facing error, try in gitbash) 
Or you can even check the logs in the combined.log file. 
Similarly, check logs for error.log. 
9. Once well tested, all operations and error handling are done, Deploy the code to 
Git Hub.
