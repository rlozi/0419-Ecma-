/*
디폴트 파라미터란?
인수를 넣지 않고 함수를 호출하였을때를 대비하여 개발자가 디폴트값을 미리 지정하는 코드
애크마6 이전에는 손수 코드를 작성하는 방법으로 극복했었으나 
에크마6에서는 개선되어서 디폴트 파라미터가 생겨서 간단하게 작성할수있도록 업데이트가 되었습니다. 
*/

// function info(name) {
//     console.log(name)
// }
// info(); undefined로 에러상황이 발생합니다. 

//1. 조건문으로 값을 처리하는 방법 

// function intro(name) {
//     if(name == undefined) name = "David";
//     //3항 연산자로 변환해보기 => (조건식) ? 참인경우 : 거짓인경우; 
//     //name ? name : name ="David";
    
//     return "My name is" + name;}
    /*
    intro()함수를 호출할때 인수를 넣으면 if문은 무시되고 바로 리턴을 만나서 인수가 출력된 결과를 반환합니다.
    하지만 인수가 없다면 if문을 통과해서 name에 David라는 디폴트값이 적용된 상태로 밑에 리턴문을 지나
    디폴트 값이 출력된 결과가 반환합니다. 
    */

// console.log(intro());
// console.log(intro("이은지"));

/*
단락회로 평가(단축평가)
&& || (원달라 표시+shift) (and, or)의 경우 논리연산자를 이용한 논리평가를 이용해서 단축적인 코드 작성을 하는 방법 
A && B =>  A와 B가 모두 참이어야 참이다라는 논리평가인데 이것을 조건문으로 이용할 수 있습니다.
즉 A가 참인지 거짓인지에 따라서 &&뒤에있는 B가 평가될지 안될지가 결정이 됩니다.
A가 거짓이면 바로 종료, A가 참이면 B가 실행됩니다. 

단점 : 단락회로평가를 if문 삼항연산자를 대체할 경우 
논리적으로나 실용적으로는 문제가 없습니다만, 협업에서 문제가 발생합니다.
따라서 가급적 삼항연산자를 이용하고 단락회로 평가는 지양하는 편입니다. (삼항연상자정도는 잘알고있으나 이 방법은 모르는 사람이 많아 소통에 문제가 생길수있다는 뜻)
*/

console.log("cat" && "dog");  // -> dog 출력
console.log("cat" || "dog"); // -> cat 출력
//cat이라는 문자열은 문제가 없는 자료형입니다. 따라서 true로 인식이 가능한 부분, 따라서 &&는 cat을 논리평가한 뒤에 바로 
//&&를 지나서 dog 를 실행합니다. 따라서 dog 가 콘솔로그에 남는 것입니다. 

// function intro(name){
//     !name && (name = 'David');
//     return "My name is" + name;
// }
// console.log(intro()); 
//Uncaught SyntaxError 에러가 뜸 =는 담는다는 뜻이기때문에 괄호를 꼭 해줘야 인식을함


/*
()안의 논리평가에서 거짓이 아닌 참을 추적합니다. name이 존재하면 참으로 인식하기 때문에 
존재하는 name을 반환해서 사용하고, name이 없으면 거짓으로 인식해서 참을 찾기 위해서 다음 ||을 넘어 진행이 되는데 
우리가 "david"라고 참을 정확하게 디폴트 값으로 적용하였기 때문에 name이 없으면 참으로 인식될 'david'를 적용합니다. 
*/
// function intro(name){
//     return 'my name is' + (name || "David");
// }console.log(intro());


// _________________________ 위에 내용은 에크마6 이전에 사용되던 문법들 

//에크마6 문법 -> 매개변수자리에다가 디폴트 값을 바로 지정합니다.

// function intro(name = "David"){
//     return "my name is" + name;
// } console.log(intro());

//매개변수가 복수개인 경우 복수개의 디폴트 파라미터도 가능합니다. 
//복수개인 경우 매개변수자리에 , 연결해서 작성가능합니다. 

/*
name = "David" , interests = "Game"
name, interests가 존재한다면 그것을 그대로 사용을 하고, 없으면 = 이후의 값을 디폴트값으로 사용하라는 뜻입니다. 
*/


// let intro = function(name = "David", interests = "Game") {
//     return "my name is" + name + " and I love " + interests + ".";
//     //템플릿 리터럴 
//     // return 'my name is ${name} and i love you ${interests}.';
// } 
// console.log(intro());

let defaults = {name : "Divid" , interests : "Game"};
let intro = function(opt = defaults){
    /*opt는(intro({name: "이은지", interests: "reading book"}))이곳에서
     {name: "이은지", interests: "reading book"} 이 객체를 의미합니다. 즉 매개변수로 써준값을 대신하는 것이죠.
     따라서 opt.name은 객체로 인수값을 적은 내용에서 키 값이 name인 값이 적용되는 것이고요
     opt.interest는 객체로 인수값을 적은 내용에서 키 값이 interest인 값이 적용되는 것 입니다. /
    return 'my name is ${opt.name} and i love you ${opt.interests}.';
}
console.log(intro());
console.log(intro({name: "이은지", interests: "reading book"}));