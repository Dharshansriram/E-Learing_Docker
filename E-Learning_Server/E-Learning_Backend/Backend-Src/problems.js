const problems = [

    {
        chapter: 1,
        problemCode: "A",
        title: "Print Two Integers in Reverse",
        difficulty: "Easy",
        description: "Read two integers and print them in reverse order.",
        starterCode: `#include <stdio.h>
int main(){
    int a,b;
    scanf("%d %d",&a,&b);
    printf("%d %d",b,a);
    return 0;
}`,
        testCases: [
            { input: "10 20", expectedOutput: "20 10" }
        ]
    },

    {
        chapter: 1,
        problemCode: "B",
        title: "Sum of Two Numbers",
        difficulty: "Easy",
        description: "Read two integers and print their sum.",
        starterCode: `#include <stdio.h>
int main(){
    int a,b;
    scanf("%d %d",&a,&b);
    printf("%d",a+b);
    return 0;
}`,
        testCases: [
            { input: "5 7", expectedOutput: "12" }
        ]
    },



    {
        chapter: 1,
        problemCode: "C",
        title: "Find Maximum",
        difficulty: "Easy",
        description: "Find maximum of two numbers.",
        starterCode: `#include <stdio.h>
int main(){
  int a,b;
  scanf("%d %d",&a,&b);
  if(a>b) printf("%d",a);
  else printf("%d",b);
  return 0;
}
  `,
        testCases: [
            { input: "10 5", expectedOutput: "10" }
        ]
    },

    {
        chapter: 1,
        problemCode: "D",
        title: "Even or Odd",
        difficulty: "Easy",
        description: "Check whether number is even or odd.",
        starterCode: `#include <stdio.h>
int main(){
  int n;
  scanf("%d",&n);
  if(n%2==0) printf("Even");
  else printf("Odd");
  return 0;
}
  `,
        testCases: [
            { input: "4", expectedOutput: "Even" }
        ]
    },

    {
        chapter: 1,
        problemCode: "E",
        title: "Factorial",
        difficulty: "Medium",
        description: "Find factorial of a number.",
        starterCode: `#include <stdio.h>
int main(){
  int n,i,f=1;
  scanf("%d",&n);
  for(i=1;i<=n;i++) f*=i;
  printf("%d",f);
  return 0;
}
  `,
        testCases: [
            { input: "5", expectedOutput: "120" }
        ]
    },



    {
        chapter: 2,
        problemCode: "A",
        title: "Prime Number",
        difficulty: "Medium",
        description: "Check if number is prime.",
        starterCode: `#include <stdio.h>
int main(){
  int n,i,flag=1;
  scanf("%d",&n);
  for(i=2;i<=n/2;i++){
    if(n%i==0){ flag=0; break; }
  }
  if(flag==1) printf("Prime");
  else printf("Not Prime");
  return 0;
}`,
        testCases: [
            { input: "7", expectedOutput: "Prime" }
        ]
    },

    {
        chapter: 2,
        problemCode: "B",
        title: "Reverse Number",
        difficulty: "Medium",
        description: "Reverse digits of number.",
        starterCode: `#include <stdio.h>
int main(){
  int n,r,rev=0;
  scanf("%d",&n);
  while(n>0){
    r=n%10;
    rev=rev*10+r;
    n/=10;
  }
  printf("%d",rev);
  return 0;
}`,
        testCases: [
            { input: "123", expectedOutput: "321" }
        ]
    },

    {
        chapter: 2,
        problemCode: "C",
        title: "Sum of Digits",
        difficulty: "Easy",
        description: "Find sum of digits.",
        starterCode: `#include <stdio.h>
int main(){
  int n,sum=0;
  scanf("%d",&n);
  while(n>0){
    sum+=n%10;
    n/=10;
  }
  printf("%d",sum);
  return 0;
}`,
        testCases: [
            { input: "123", expectedOutput: "6" }
        ]
    },

    {
        chapter: 2,
        problemCode: "D",
        title: "Palindrome Number",
        difficulty: "Medium",
        description: "Check if number is palindrome.",
        starterCode: `#include <stdio.h>
int main(){
  int n,r,rev=0,temp;
  scanf("%d",&n);
  temp=n;
  while(n>0){
    r=n%10;
    rev=rev*10+r;
    n/=10;
  }
  if(temp==rev) printf("Palindrome");
  else printf("Not Palindrome");
  return 0;
}`,
        testCases: [
            { input: "121", expectedOutput: "Palindrome" }
        ]
    },


    {
        chapter: 3,
        problemCode: "A",
        title: "Fibonacci Series",
        difficulty: "Medium",
        description: "Print Fibonacci up to n terms.",
        starterCode: `#include <stdio.h>
int main(){
  int n,i,a=0,b=1,c;
  scanf("%d",&n);
  printf("%d %d ",a,b);
  for(i=2;i<n;i++){
    c=a+b;
    printf("%d ",c);
    a=b;
    b=c;
  }
  return 0;
}`,
        testCases: [
            { input: "5", expectedOutput: "0 1 1 2 3 " }
        ]
    },

    {
        chapter: 3,
        problemCode: "B",
        title: "Swap Two Numbers",
        difficulty: "Easy",
        description: "Swap two numbers.",
        starterCode: `#include <stdio.h>
int main(){
  int a,b,temp;
  scanf("%d %d",&a,&b);
  temp=a; a=b; b=temp;
  printf("%d %d",a,b);
  return 0;
}`,
        testCases: [
            { input: "3 5", expectedOutput: "5 3" }
        ]
    },

    {
        chapter: 3,
        problemCode: "C",
        title: "Armstrong Number",
        difficulty: "Medium",
        description: "Check Armstrong number.",
        starterCode: `#include <stdio.h>
int main(){
  int n,r,sum=0,temp;
  scanf("%d",&n);
  temp=n;
  while(n>0){
    r=n%10;
    sum+=r*r*r;
    n/=10;
  }
  if(sum==temp) printf("Armstrong");
  else printf("Not Armstrong");
  return 0;
}`,
        testCases: [
            { input: "153", expectedOutput: "Armstrong" }
        ]
    },

];

module.exports = problems;