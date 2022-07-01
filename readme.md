# CO2-emission-calculator

This is command line tool that returns the amount of CO2-equivalent that will be caused when traveling a given distance using a given transportation
method.

## CO2 Data
Transportation methods in CO2e per passenger per km:
* Small cars:
    - small-diesel-car : 142g
    - small-petrol-car : 154g
    - small-plugin-hybrid-car : 73g
    - small-electric-car : 50g

* Medium cars:
    - medium-diesel-car : 171g
    - medium-petrol-car : 192g
    - medium-plugin-hybrid-car : 110g
    - medium-electric-car : 58g

* Large cars:
    - large-diesel-car : 209g
    - large-petrol-car : 282g
    - large-plugin-hybrid-car : 126g
    - large-electric-car : 73g

* bus : 27g train : 6g


Source: [Defra Greenhouse Gas Conversion Factors 2019](https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2019)


<br>
<br>



# Run application
The application can be called with a numeric distance , a unit-of-distance (kilometer km or meter m ) and a transportation- method.

Please make sure you run the application with [Node](#node) V16 

Once you installed node v16 please install the packages using following command.


```
npm install
```
You can run the application like in the following example command:
```
npm run test2 co2-calculator -- --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
```

Unit tests are run by using following command
```
npm run test
```