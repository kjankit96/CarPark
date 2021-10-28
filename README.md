NasAcademy Assignment

Start the Server
## sudo npm start

Backend Project, consists of 4 Endpoints.
##  "/createLotSpace"
##  "/parkCar"  
##  "/unparkCar"
##  "/getDetails"

.env file consists of MONDODB_URI & PARKING_LOT_SIZE.

middlewares
## rateLimiterUsingThirdParty

API Example Endpoint
## localhost:81/v1/createLotSpace

Endpoints Description
# /createLotSpace – This end point creates a lot space for the size of PARKING_LOT_SIZE and stores them into collection. 
## Body : Requires no Parameters.

# /parkCar – this end point requires a single parameter carNo to park the car on the first available empty lot. No two cars with same number can be parked.
## Body : Requires 1 Parameter.
## {
##   "carNo": "DL-4S-AY-1234"
## }

# /unparkCar – This end point requires single parameter “carNo” to take the car out of the lot. On successful completion, the lot will be free to park any new car.
## Body : Requires 1 Parameter.
## {
##   "carNo": "DL-4S-AY-1234"
## }

# /getDetails – This end point requires one parameter, either carNo or lotNo 
	Case 1: If carNo is entered : if the given carNo is present in our parking lot then, it would provide us with the details of the lotNo on which it is parked. Otherwise, throws an error stating “This car is not parked with us”.
## Body : Requires 1 Parameter.
## {
##   "carNo": "DL-4S-AY-1234"
## }

	Case 2: if lotNo is entered : if the lotNo is entered then it would display us if any car is parked on this slot at the instant otherwise outputs to null. If lotNo is incorrect/ Not found , it states an error ”Invalid Lot Number”.
## Body : Requires 1 Parameter.
## {
##   "lotNo": "39"
## }

MIDDLEWARE
# rateLimiterUsingThirdParty – this middleware limits five Requests for a three second time frame.
# Error Message - You have exceeded 5 Requests in 3 Seconds Limit!

SECRET FILE
# .env – Consists of PARKING_LOT_SIZE and MONGODB_URI 

MODELS
# parkingLot.model.js – Consists of schema that defines of how to save the lotNo and carNo 

UTILS
# LotError.js – Consists of a constructor to specify the status code and a user-friendly error message.

LOADERS
# db.js – This is a file which is basically useful for serverless architecture. It checks if a connection is already established or not.

# routes.js – Consists of all the end points that are created and specifies the method for the end point (GET,POST) along with the middleware.


# index.js – This file specifies the port on which the application is running.