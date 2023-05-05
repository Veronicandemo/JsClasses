'use strict'
 // /* Constructors and Class Assignment
// //  You are working on a web application for a car rental company. They want to keep track
// //  of their car inventory and rental information. Your task is to create a JavaScript class or
// //  function constructor for representing cars in their inventory and another one for
// //  representing rental information.
// // Requirements:
// // 1) Create a Car class or function constructor that has the following properties:
// // a. make (string): The make of the car, e.g., "Toyota".
// // b. model (string): The model of the car, e.g., "Camry".
// // c. year (number): The year the car was manufactured, e.g., 2020.
// // d. isAvailable (boolean): Indicates if the car is currently available for rent.
// // The Car class or function constructor should also have a method called
// // toggleAvailability that changes the isAvailable property to its opposite value (true to
// // false, false to true) 
// // */

// //Create a class
class Car{
    constructor(make, model, year, isAvailable){
        this.make = make
        this.model = model
        this.year = year
        this.isAvailable = isAvailable
    }
    toggleAvailability(){
        if(this.isAvailable === true){
           return this.isAvailable = false
        }else return true
    }
}



// // 2) Create a Rental class or function constructor that has the following properties:
// // ● car (Car object): The car that has been rented.
// // ● renterName (string): The name of the person who rented the car.
// // ● rentalStartDate (Date object): The start date of the rental period.
// // ● rentalEndDate (Date object): The end date of the rental period.
// // The Rental class or function constructor should also have a method called
// // calculateRentalDuration that returns the rental duration in days.
class Rental extends Car {
    constructor(make, model, year, isAvailable,rentName, rentalStartDate, rentalEndDate){
        super(make,model,year,isAvailable)
        this.rentName = rentName
        this.rentalStartDate = rentalStartDate
        this.rentalEndDate = rentalEndDate
    }
    calculateRentalDuration() {
        const day = 24 * 60 * 60 * 1000 //day in milliseconds
        const startDate = new Date(this.rentalStartDate)
        const endDate = new Date(this.rentalEndDate)
        const duration = Math.round(Math.abs(endDate - startDate) / day)
        return duration
    }
}
// // Create an instance of the Car class or function constructor for a car in the
// // inventory. Then, create an instance of the Rental class or function constructor for
// // a rental involving the car you created. Finally, calculate the rental duration using
// // the calculateRentalDuration method.
//instance of Car class
const toyota = new Car('Toyota', 'Camry', 2020, true)
console.log(toyota)
const mazda = new Car('CX-5', 'Mazda', 1888, false)
console.log(toyota.toggleAvailability())
console.log(mazda)
console.log(mazda.toggleAvailability())

const  rental = new Rental('Toyota', 'Camry',1990, true,'veronica ndemo', new Date(2006, 3, 5) , new Date(2008, 4, 7))
//rental duration
console.log(rental.calculateRentalDuration())

// You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.
// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.

//Question class
class Question {
    constructor(text, options,correctAnswer){
        this.text = text   
        this.options = options
        this.correctAnswer = correctAnswer
     }
     checkAnswer(userAns){
        if(userAns === this.correctAnswer){
            return true
        } 
        else {
            return false
        }

     }
}



// Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the score 
// if the answer is correct.


class Quiz extends Question{
    constructor(text,options,correctAnswer){
        super(text,options,correctAnswer)
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    addQuestion(QtnObj){
        this.questions.push(QtnObj)
    }
    nextQuestion(){
        this.currentQuestionIndex++;

    }
    submitAnswer(userAns){
       const curQuestion = this.questions[this.currentQuestionIndex] 
       if (curQuestion.checkAnswer(userAns) === true) {
        this.score++;
       }
    }

}

const quiz = new Quiz();

const qtn1 = new Question("What is the location of AkiraChix?", //Question
['Hopper Lab', 'Karen', 'Ada lab'], //options
'Karen' //correctAns
);
quiz.addQuestion(qtn1);

quiz.submitAnswer('Karen'); 

//final score
console.log(`Your score is ${quiz.score}.`)