/*
In this exercise you will be writing code to help a freelancer communicate with their clients about the prices of certain projects.
You will write a few utility functions to quickly calculate the costs for the clients.

1. Calculate the day rate given an hourly rate

A client contacts the freelancer to enquire about their rates.
The freelancer explains that they work 8 hours a day. However, the freelancer knows only their hourly rates for the project.
Help them estimate a day rate given an hourly rate.

dayRate(89);
// => 712

The day rate does not need to be rounded or changed to a "fixed" precision.
2. Calculate the number of workdays given a fixed budget

Another day, a project manager offers the freelancer to work on a project with a fixed budget.
Given the fixed budget and the freelancer's hourly rate, help them calculate the number of days they would work until the budget is exhausted.
The result must be rounded down to the nearest whole number.

daysInBudget(20000, 89);
// => 28

3. Calculate the discounted rate for large projects

Often, the freelancer's clients hire them for projects spanning over multiple months.
In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate.
Every month has 22 billable days. Help them estimate their cost for such projects, given an hourly rate, the number of days the project spans,
and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.

priceWithMonthlyDiscount(89, 230, 0.42);
// => 97972
*/

export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}         

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}  

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let numMonths = Math.floor(numDays / 22);
  let numDaysRemainder = numDays % 22;
  let monthlyRate = ratePerHour * 8 * 22;
  let discountRate = monthlyRate * discount;
  let remainingRate = ratePerHour * 8 * numDaysRemainder;
  let discountedMonthlyRate = monthlyRate - discountRate;
  let totalCost = discountedMonthlyRate * numMonths + remainingRate;
  return Math.ceil(totalCost);
}
