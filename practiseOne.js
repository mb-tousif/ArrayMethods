// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
const numberOneWebDevelopmentLearningPlatform = 'programmingHero';
let generalPlatform = 'habi-jabi web-learning platform';
generalPlatform = 'web-learning platform';

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
const BBAmajor = 'Finance'
const friends = {
    pabna: ['Shohag', 'Reza'],
    chapai: ['Shamim', 'Prince'],
    rajshahi: ['Tazin', 'Rezvi'],
    nawga: ['Amit', 'Protik'],
}
const college = 'Rajshahi Govt. City College'
console.log(
  `I completed my BBA with major in ${BBAmajor} and my college was ${college}. My HSC friends are from different districts, from Pabna:- ${friends.pabna[0]}, from chapai:- ${friends.chapai[0]} and from Rajshahi:- ${friends.rajshahi[0]} `
); 
console.log(
  `I completed my BBA with major in ${BBAmajor} and my college was ${college}. My HSC friends are from different districts, from Pabna:- ${friends.pabna}, from chapai:- ${friends.chapai} and from Rajshahi:- ${friends.rajshahi} `
); 
// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।
  divisibleByFive = (x)=> x/5;
  console.log(divisibleByFive (20)); 

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
  twoNumber = (x,y) => (x+2)*(y+2);
  console.log(twoNumber(5,7));

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
  threeNumber = (x, y, z)=>(x*y*z)
  console.log(threeNumber(2, 3, 4));
// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
twoNumberMultilineFun = (x, y) =>{
  let sum1=(x + 2);
  let sum2=(y + 2);
  let twoParamiterMultification = sum1 * sum2;
  return twoParamiterMultification;
}
console.log(twoNumberMultilineFun(5, 7));

// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 
  
// ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 
VAR = `The var keyword is used in all JavaScript code from 1995 to 2015.
        As per Big brother I reject Var`;
LET = `Variables defined with let cannot be Redeclared.
         Variables defined with let must be Declared before use.
         Variables defined with let have Block Scope.`;
CONST = `Variables defined with const cannot be Redeclared.
          Variables defined with const cannot be Reassigned.
          Variables defined with const have Block Scope.`;
differenceBetweenVarLetAndConst = ``;

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
  const marks = [56, 67, 45, 89, 67, 50, 43 , 73];
  const fiveTimesMarks = marks.map(mark => mark * 5);
  console.log(fiveTimesMarks);
// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো। 
 const newMarks = [56, 67, 45, 89, 67, 50, 43, 73];
 const oddNumber = newMarks.filter((mark) => mark %2 == 1);
 console.log(oddNumber);
// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const mobiles = [
  { brand: "walton", price: 4000 },
  { brand: "palton", price: 3000 },
  { brand: "nokia", price: 4500 },
  { brand: "realme", price: 5000 },
  { brand: "iton", price: 4000 },
  { brand: "iphone", price: 5000 },
];
const price5000 = mobiles.find(mobile => mobile.price == 5000);
console.log(price5000);

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
const FIND = ".find() When you want to select a single element from an array.";
const FILTER = ".filter() when you want to select a subset of multiple elements from an array.";
const MAP = ".map() when you want to transform elements in an array.";
const REDUCE = ".reduce() when you want derive a single value from multiple elements in an array.";
const EVERY = ".every() when you want derive a single boolean value from multiple elements in an array.";
const FOREACH = ".forEach() is great you need to execute a function for each individual element in an array,";

const ARRAYmethods = `Why and when to use forEach, map, filter, reduce, and find in JavaScript.
  map:- ${MAP}
  find:- ${FIND}
  filter:- ${FILTER}
  reduce:- ${REDUCE}
  every:- ${EVERY}. Conditions: 1. You have an array. 2. You want to test each element in the array. 3. You want to know whether all of the elements pass that test. true / false .
  forEach:- ${FOREACH} & there is also a technical reason to use .forEach() in favor of for loops.
 `;
 console.log(ARRAYmethods);

// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
threeNumberWithDefaultParameter = (x , y , z = 7) => x * y * z;
console.log(threeNumberWithDefaultParameter(2, 4));
// [অপশনাল]

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
