const dsbank = [{
        id: '1',
        languages: "C", "python" , "java" ,


        ProblemStatement: " Given an array of integers, print the maximum element in the array",

        Constraints:

            '1≤ N≤ 10 ^ 5',

        '10 ^ 9≤ arr[i]≤ 10 ^ 9',

        InputFormat: [

            "First line: Integer N",

            " Second line: N space - separated integers"

        ],
        OutputFormat: [

            "Print the maximum value"
        ],

        SampleInput: [

            '5',
            '1 9 3 7 2'
        ],


        SampleOutput: [

            '9'
        ],
    }
    Answer script: C programing  # include < stdio.h > #include < limits.h >

    int main() { 
        int n; 
        scanf("%d", & n);

         
        long long x, maxVal = LLONG_MIN; 
        for (int i = 0; i < n; i++) {  scanf("%lld", & x);  if (x > maxVal) maxVal = x;  }

         
        printf("%lld", maxVal); 
        return 0;
    }

    python:
    n = int(input())
    arr = list(map(int, input().split()))
    print(max(arr))

    java:
    import java.util.*;

    public class Main { 
        public static void main(String[] args) { 
            Scanner sc = new Scanner(System.in);

             
            int n = sc.nextInt(); 
            long maxVal = Long.MIN_VALUE;

             
            for (int i = 0; i < n; i++) {  long x = sc.nextLong();  if (x > maxVal) maxVal = x;  } 
            System.out.print(maxVal); 
        }
    }

    2) Reverse an Array

Problem Statement:
    Reverse the given array and print the result.

Constraints:

    1≤ N≤ 10 ^ 5

    -
    10 ^ 9≤ arr[i]≤ 10 ^ 9

Input Format:

    N

Array elements

Output Format:

    Print reversed array

Sample Input:

    4
10 20 30 40


Sample Output:

    40 30 20 10

ANSWER SCRIPT:

    C PROGRAMMING:

    #include < stdio.h >

    int main() { 
        int n; 
        scanf("%d", & n);

         
        long long arr[100000]; 
        for (int i = 0; i < n; i++) {  scanf("%lld", & arr[i]);  }

         
        for (int i = n - 1; i >= 0; i--) {  printf("%lld", arr[i]);  if (i != 0) printf(" ");  } 
        return 0;
    }

PYTHON:

    n = int(input())
arr = list(map(int, input().split()))
print( * arr[::-1])

JAVA:

    import java.util.*;

public class Main { 
    public static void main(String[] args) { 
        Scanner sc = new Scanner(System.in);

         
        int n = sc.nextInt(); 
        long[] arr = new long[n];

         
        for (int i = 0; i < n; i++) arr[i] = sc.nextLong();

         
        for (int i = n - 1; i >= 0; i--) {  System.out.print(arr[i]);  if (i != 0) System.out.print(" ");  } 
    }
}

3) Count Even Numbers

Problem Statement:
    Count how many numbers are even in the given array.

Constraints:

    1≤ N≤ 10 ^ 5

0≤ arr[i]≤ 10 ^ 9

Input Format:

    N

N elements

Output Format:

    Print the count of even numbers

Sample Input:

    6
1 2 3 4 5 6


Sample Output:

    3

ANSWER SCRIPT:

    C PROGRAMMING:

    #include < stdio.h >

    int main() { 
        int n; 
        scanf("%d", & n);

         
        long long x; 
        int count = 0; 
        for (int i = 0; i < n; i++) {  scanf("%lld", & x);  if (x % 2 == 0) count++;  }

         
        printf("%d", count); 
        return 0;
    }

PYTHON:

    n = int(input())
arr = list(map(int, input().split()))
print(sum(1
    for x in arr
    if x % 2 == 0))

JAVA:

    import java.util.*;

public class Main { 
    public static void main(String[] args) { 
        Scanner sc = new Scanner(System.in);

         
        int n = sc.nextInt(); 
        int count = 0;

         
        for (int i = 0; i < n; i++) {  long x = sc.nextLong();  if (x % 2 == 0) count++;  }

         
        System.out.print(count); 
    }
}

4) Sum of Digits(Using Loop)

Problem Statement:
    Given an integer N, find sum of its digits.

Constraints:

    0≤ N≤ 10 ^ 18

Input Format:

    Single integer N

Output Format:

    Print sum of digits

Sample Input:

    12345


Sample Output:

    15

ANSWER SCRIPT:

    C PROGRAMMING: #include < stdio.h >

    int main() { 
        long long n; 
        scanf("%lld", & n);

         
        long long sum = 0; 
        while (n > 0) { 
            sum += (n % 10); 
            n /= 10; 
        }

         
        printf("%lld", sum); 
        return 0;
    }

PYTHON:

    n = int(input().strip())
s = 0
while n > 0:  s += n % 10  n //= 10
print(s)

JAVA:

    import java.util.*;

public class Main { 
    public static void main(String[] args) { 
        Scanner sc = new Scanner(System.in);

         
        long n = sc.nextLong(); 
        long sum = 0;

         
        while (n > 0) { 
            sum += (n % 10); 
            n /= 10; 
        }

         
        System.out.print(sum); 
    }
}

5) Check Palindrome String

Problem Statement:
    Given a string S, check whether it is palindrome or not.

Constraints:

    1≤ | S | ≤10 ^ 5

S contains lowercase English letters only

Input Format:

    String S

Output Format:

    Print YES
if palindrome
else NO

Sample Input:

    madam


Sample Output:

    YES

ANSWER SCRIPT:

    C PROGRAMMING: #include < stdio.h > #include < string.h >

    int main() {
        char s[100005];
        scanf("%s", s);

        int i = 0, j = strlen(s) - 1;
        while (i < j) {
            if (s[i] != s[j]) {
                printf("NO");
                return 0;
            }
            i++;
            j--;
        }
        printf("YES");
        return 0;
    }

PYTHON:
    s = input().strip()
print("YES"
    if s == s[::-1]
    else "NO")

JAVA:

    import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String s = sc.next();
        int i = 0, j = s.length() - 1;

        while (i < j) {
            if (s.charAt(i) != s.charAt(j)) {
                System.out.print("NO");
                return;
            }
            i++;
            j--;
        }
        System.out.print("YES");
    }
}

6) Two Sum(Index Pair)

Problem Statement:
    Given an array and target X,
    return any one pair of indices(0 - based) such that arr[i] + arr[j] = X.
If no pair exists print - 1.

Constraints:

    2≤ N≤ 10 ^ 5

    -
    10 ^ 9≤ arr[i]≤ 10 ^ 9

    -
    10 ^ 9≤ X≤ 10 ^ 9

Input Format:

    N

Array

X

Output Format:

    Two integers i j OR - 1

Sample Input:

    5
2 7 11 15 3
9


Sample Output:

    0 1

ANSWER SCRIPT:
    C PROGRAMMING:

    #include < stdio.h > #include < stdlib.h >

    typedef struct {
        long long key;
        int value;
    }
Node;

int main() {
    int n;
    scanf("%d", & n);

    long long * arr = (long long * ) malloc(sizeof(long long) * n);
    for (int i = 0; i < n; i++) scanf("%lld", & arr[i]);

    long long target;
    scanf("%lld", & target);

    // Brute force O(n^2) (simple & acceptable for learning)
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == target) {
                printf("%d %d", i, j);
                free(arr);
                return 0;
            }
        }
    }

    printf("-1");
    free(arr);
    return 0;
}

PYTHON:

    n = int(input())
arr = list(map(int, input().split()))
target = int(input())

mp = {}
for i, x in enumerate(arr):
    if target - x in mp:
    print(mp[target - x], i)
break
mp[x] = i
else :
    print(-1)

JAVA:

    import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        long[] arr = new long[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextLong();
        long target = sc.nextLong();

        HashMap < Long, Integer > map = new HashMap < > ();
        for (int i = 0; i < n; i++) {
            long need = target - arr[i];
            if (map.containsKey(need)) {
                System.out.print(map.get(need) + " " + i);
                return;
            }
            map.put(arr[i], i);
        }
        System.out.print("-1");
    }
}


7) Balanced Parentheses

Problem Statement:
    Given a string containing only()[] {}, check
if it is balanced.

Constraints:

    1≤ | S | ≤10 ^ 5

Input Format:

    String S

Output Format:

    Print YES or NO

Sample Input:

    {
        [()]
    }


Sample Output:

    YES

ANSWER SCRIPT:
    C PROGRAMMING:

    #include < stdio.h > #include < string.h >

    int isMatch(char open, char close) {
        return (open == '(' && close == ')') ||
            (open == '{' && close == '}') ||
            (open == '[' && close == ']');
    }

int main() {
    char s[100005];
    scanf("%s", s);

    int n = strlen(s);
    char stack[100005];
    int top = -1;

    for (int i = 0; i < n; i++) {
        char c = s[i];
        if (c == '(' || c == '{' || c == '[') {
            stack[++top] = c;
        } else {
            if (top == -1 || !isMatch(stack[top], c)) {
                printf("NO");
                return 0;
            }
            top--;
        }
    }

    printf(top == -1 ? "YES" : "NO");
    return 0;
}

PYTHON:
    s = input().strip()
stack = []
mp = { ')': '(', ']': '[', '}': '{' }

for ch in s:
    if ch in "([{":
    stack.append(ch)
else :
    if not stack or stack[-1] != mp[ch]:
    print("NO")
break
stack.pop()
else :
    print("YES"
        if not stack
        else "NO")

JAVA:

    import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();

        Stack < Character > st = new Stack < > ();
        for (char c: s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                st.push(c);
            } else {
                if (st.isEmpty()) {
                    System.out.print("NO");
                    return;
                }
                char top = st.pop();
                if ((top == '(' && c != ')') || (top == '{' && c != '}') || (top == '[' && c != ']')) {
                    System.out.print("NO");
                    return;
                }
            }
        }
        System.out.print(st.isEmpty() ? "YES" : "NO");
    }
}



8) First Unique Character

Problem Statement:
    Given a string S, find the index of the first non - repeating character.
If none exists print - 1.

Constraints:

    1≤ | S | ≤10 ^ 5

lowercase letters only

Input:

    String S

Output:

    Index of first unique character

Sample Input:

    leetcode


Sample Output:

    0

ANSWER SCRIPT:
    C PROGRAMMING:

    #include < stdio.h > #include < string.h >

    int main() {
        char s[100005];
        scanf("%s", s);

        int freq[26] = { 0 };
        int n = strlen(s);

        for (int i = 0; i < n; i++) {
            freq[s[i] - 'a']++;
        }

        for (int i = 0; i < n; i++) {
            if (freq[s[i] - 'a'] == 1) {
                printf("%d", i);
                return 0;
            }
        }

        printf("-1");
        return 0;
    }

PYTHON:

    s = input().strip()
freq = {}
for ch in s:
    freq[ch] = freq.get(ch, 0) + 1

for i, ch in enumerate(s):
    if freq[ch] == 1:
    print(i)
break
else :
    print(-1)

JAVA:

    import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();

        int[] freq = new int[26];
        for (char c: s.toCharArray()) {
            freq[c - 'a']++;
        }

        for (int i = 0; i < s.length(); i++) {
            if (freq[s.charAt(i) - 'a'] == 1) {
                System.out.print(i);
                return;
            }
        }
        System.out.print(-1);
    }
}



9) Rotate Array by K

Problem Statement:
    Rotate the array to the right by K positions.

Constraints:

    1≤ N≤ 10 ^ 5

0≤ K≤ 10 ^ 9

Input Format:

    N

Array

K

Output Format:

    Rotated array

Sample Input:

    5
1 2 3 4 5
2


Sample Output:

    4 5 1 2 3

ANSWER SCRIPT:
    C PROGRAMMING:

    #include < stdio.h >

    int main() {
        int n;
        scanf("%d", & n);

        long long arr[100000];
        for (int i = 0; i < n; i++) scanf("%lld", & arr[i]);

        long long k;
        scanf("%lld", & k);
        k = k % n;

        long long temp[100000];

        for (int i = 0; i < n; i++) {
            temp[(i + k) % n] = arr[i];
        }

        for (int i = 0; i < n; i++) {
            printf("%lld", temp[i]);
            if (i != n - 1) printf(" ");
        }
        return 0;
    }

PYTHON:

    n = int(input())
arr = list(map(int, input().split()))
k = int(input())
k %= n
res = arr[-k: ] + arr[: -k]
print( * res)

JAVA:

    import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        long[] arr = new long[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextLong();

        long k = sc.nextLong();
        k %= n;

        long[] temp = new long[n];
        for (int i = 0; i < n; i++) {
            temp[(int)((i + k) % n)] = arr[i];
        }

        for (int i = 0; i < n; i++) {
            System.out.print(temp[i]);
            if (i != n - 1) System.out.print(" ");
        }
    }
}


10) Merge Two Sorted Arrays

Problem Statement:
    Given two sorted arrays A and B, merge them into a single sorted array.

Constraints:

    1≤ N, M≤ 10 ^ 5

    -
    10 ^ 9≤ values≤ 10 ^ 9

Input:

    N

N elements

M

M elements

Output:

    merged sorted array

Sample Input:

    3
1 3 5
4
2 4 6 7


Sample Output:

    1 2 3 4 5 6 7

ANSWER SCRIPT:
    C PROGRAMMING:

    #include < stdio.h >

    int main() {
        int n, m;
        scanf("%d", & n);
        long long a[100000];
        for (int i = 0; i < n; i++) scanf("%lld", & a[i]);

        scanf("%d", & m);
        long long b[100000];
        for (int i = 0; i < m; i++) scanf("%lld", & b[i]);

        int i = 0, j = 0;
        while (i < n && j < m) {
            if (a[i] <= b[j]) {
                printf("%lld ", a[i++]);
            } else {
                printf("%lld ", b[j++]);
            }
        }
        while (i < n) printf("%lld ", a[i++]);
        while (j < m) printf("%lld ", b[j++]);

        return 0;
    }

PYTHON:

    n = int(input())
a = list(map(int, input().split()))
m = int(input())
b = list(map(int, input().split()))

i = j = 0
res = []

while i < n and j < m:
    if a[i] <= b[j]:
    res.append(a[i]);
i += 1
else :
    res.append(b[j]);
j += 1

res.extend(a[i: ])
res.extend(b[j: ])
print( * res)

JAVA:

    import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        long[] a = new long[n];
        for (int i = 0; i < n; i++) a[i] = sc.nextLong();

        int m = sc.nextInt();
        long[] b = new long[m];
        for (int i = 0; i < m; i++) b[i] = sc.nextLong();

        int i = 0, j = 0;
        StringBuilder sb = new StringBuilder();

        while (i < n && j < m) {
            if (a[i] <= b[j]) sb.append(a[i++]).append(" ");
            else sb.append(b[j++]).append(" ");
        }
        while (i < n) sb.append(a[i++]).append(" ");
        while (j < m) sb.append(b[j++]).append(" ");

        System.out.print(sb.toString().trim());
    }
}


11) Longest Subarray with Sum = K

Problem Statement:
    Given an array of integers and integer K, find the length of the longest subarray having sum exactly K.

Constraints:

    1≤ N≤ 2× 10 ^ 5

    -
    10 ^ 9≤ arr[i]≤ 10 ^ 9

Input:

    N

array

K

Output:

    Length of longest subarray

Sample Input:

    7
1 2 3 - 2 5 - 3 1
3


Sample Output:

    4

ANSWER SCRIPT:
    C PROGRAMMING:

    #include < stdio.h > #include < stdlib.h >

    int main() {
        int n;
        scanf("%d", & n);

        long long * arr = (long long * ) malloc(sizeof(long long) * n);
        for (int i = 0; i < n; i++) scanf("%lld", & arr[i]);

        long long k;
        scanf("%lld", & k);

        // O(n^2) for learning purpose
        int best = 0;
        for (int i = 0; i < n; i++) {
            long long sum = 0;
            for (int j = i; j < n; j++) {
                sum += arr[j];
                if (sum == k) {
                    int len = j - i + 1;
                    if (len > best) best = len;
                }
            }
        }

        printf("%d", best);
        free(arr);
        return 0;
    }

PYTHON:

    n = int(input())
arr = list(map(int, input().split()))
k = int(input())

prefix = 0
mp = { 0: -1 }
best = 0

for i, x in enumerate(arr):
    prefix += x
if prefix - k in mp:
    best = max(best, i - mp[prefix - k])
if prefix not in mp:
    mp[prefix] = i

print(best)

JAVA:

    import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        long[] arr = new long[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextLong();
        long k = sc.nextLong();

        HashMap < Long, Integer > map = new HashMap < > ();
        map.put(0 L, -1);

        long prefix = 0;
        int best = 0;

        for (int i = 0; i < n; i++) {
            prefix += arr[i];
            if (map.containsKey(prefix - k)) {
                best = Math.max(best, i - map.get(prefix - k));
            }
            map.putIfAbsent(prefix, i);
        }
        System.out.print(best);
    }
}


12) Next Greater Element(Stack)

Problem Statement:
    For each element in array, find the next greater element on its right.
If not exist print - 1.

Constraints:

    1≤ N≤ 2× 10 ^ 5

Input:

    N

array

Output:

    next greater
for each element

Sample Input:

    4
4 5 2 25


Sample Output:

    5 25 25 - 1

ANSWER SCRIPT:
    C PROGRAMMING:

    #include < stdio.h >

    int main() {
        int n;
        scanf("%d", & n);

        long long arr[200000];
        for (int i = 0; i < n; i++) scanf("%lld", & arr[i]);

        long long ans[200000];
        int stack[200000];
        int top = -1;

        for (int i = n - 1; i >= 0; i--) {
            while (top != -1 && arr[stack[top]] <= arr[i]) top--;

            if (top == -1) ans[i] = -1;
            else ans[i] = arr[stack[top]];

            stack[++top] = i;
        }

        for (int i = 0; i < n; i++) {
            printf("%lld", ans[i]);
            if (i != n - 1) printf(" ");
        }
        return 0;
    }

PYTHON:
    n = int(input())
arr = list(map(int, input().split()))

stack = []
ans = [-1] * n

for i in range(n - 1, -1, -1):
    while stack and stack[-1] <= arr[i]:
    stack.pop()
ans[i] = stack[-1]
if stack
else -1
stack.append(arr[i])

print( * ans)

JAVA:

    import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        long[] arr = new long[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextLong();

        long[] ans = new long[n];
        Stack < Long > st = new Stack < > ();

        for (int i = n - 1; i >= 0; i--) {
            while (!st.isEmpty() && st.peek() <= arr[i]) st.pop();
            ans[i] = st.isEmpty() ? -1 : st.peek();
            st.push(arr[i]);
        }

        for (int i = 0; i < n; i++) {
            System.out.print(ans[i]);
            if (i != n - 1) System.out.print(" ");
        }
    }
}


13) Detect Cycle in Linked List

Problem Statement:
    Given a linked list, determine
if it contains a cycle.

Constraints:

    0≤ N≤ 10 ^ 5

Input Format: (Platform format)

N nodes values

pos(index where tail connects, -1 means no cycle)

Output Format:

    Print YES
if cycle exists
else NO

Sample Input:

    5
3 2 0 - 4 5
1


Sample Output:

    YES

ANSWER SCRIPT:
    C PROGRAMMING:

    #include < stdio.h >

    int main() {
        int n;
        scanf("%d", & n);

        long long arr[100000];
        for (int i = 0; i < n; i++) scanf("%lld", & arr[i]);

        int pos;
        scanf("%d", & pos);

        if (pos == -1) printf("NO");
        else printf("YES");

        return 0;
    }

PYTHON:

    n = int(input())
arr = list(map(int, input().split()))
pos = int(input())

print("NO"
    if pos == -1
    else "YES")

JAVA:

    import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        for (int i = 0; i < n; i++) sc.nextLong();

        int pos = sc.nextInt();
        System.out.print(pos == -1 ? "NO" : "YES");
    }
}



14) Lowest Common Ancestor in BST

Problem Statement:
    Given a BST and two nodes p and q, find their Lowest Common Ancestor.

Constraints:

    1≤ N≤ 10 ^ 5

Input Format:

    N

N values insert in BST

p q

Output:

    LCA value

Sample Input:

    7
6 2 8 0 4 7 9
2 8


Sample Output:

    6

ANSWER SCRIPT:
    C PROGRAMMING:

    #include < stdio.h >

    int main() {
        int n;
        scanf("%d", & n);

        int arr[100000];
        for (int i = 0; i < n; i++) scanf("%d", & arr[i]);

        int p, q;
        scanf("%d %d", & p, & q);

        // In BST LCA logic using values (no tree build required)
        int root = arr[0];
        int low = (p < q) ? p : q;
        int high = (p > q) ? p : q;

        // Find LCA based on BST property
        // We will "simulate traversal" by using root and assuming valid BST insertion set
        // For platform accuracy, best approach: Build BST and find LCA
        // But for simple solution: Use property from inserted root
        // We'll build BST properly:

        typedef struct Node {
            int val;
            struct Node * left;
            struct Node * right;
        }
        Node;

        Node * newNode(int v) {
            Node * node = (Node * ) malloc(sizeof(Node));
            node - > val = v;
            node - > left = node - > right = NULL;
            return node;
        }

        Node * insert(Node * root, int v) {
            if (root == NULL) return newNode(v);
            if (v < root - > val) root - > left = insert(root - > left, v);
            else root - > right = insert(root - > right, v);
            return root;
        }

        Node * bst = NULL;
        for (int i = 0; i < n; i++) bst = insert(bst, arr[i]);

        Node * cur = bst;
        while (cur != NULL) {
            if (high < cur - > val) cur = cur - > left;
            else if (low > cur - > val) cur = cur - > right;
            else {
                printf("%d", cur - > val);
                return 0;
            }
        }
        return 0;
    }

PYTHON:

    n = int(input())
values = list(map(int, input().split()))
p, q = map(int, input().split())

class Node:
    def __init__(self, v):
    self.v = v
self.l = None
self.r = None

def insert(root, v):
    if not root:
    return Node(v)
if v < root.v:
    root.l = insert(root.l, v)
else :
    root.r = insert(root.r, v)
return root

root = None
for v in values:
    root = insert(root, v)

low, high = min(p, q), max(p, q)
cur = root
while cur:
    if high < cur.v:
    cur = cur.l
elif low > cur.v:
    cur = cur.r
else :
    print(cur.v)
break

JAVA:

    import java.util.*;

public class Main {
    static class Node {
        int v;
        Node left, right;
        Node(int v) { this.v = v; }
    }

    static Node insert(Node root, int v) {
        if (root == null) return new Node(v);
        if (v < root.v) root.left = insert(root.left, v);
        else root.right = insert(root.right, v);
        return root;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Node root = null;

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            root = insert(root, arr[i]);
        }

        int p = sc.nextInt();
        int q = sc.nextInt();

        int low = Math.min(p, q), high = Math.max(p, q);

        Node cur = root;
        while (cur != null) {
            if (high < cur.v) cur = cur.left;
            else if (low > cur.v) cur = cur.right;
            else {
                System.out.print(cur.v);
                return;
            }
        }
    }
}


15) Sliding Window Maximum

Problem Statement:
    Given an array and window size K, find maximum in each sliding window.

Constraints:

    1≤ N≤ 2× 10 ^ 5

1≤ K≤ N

Input Format:

    N

array

K

Output Format:

    N - K + 1 values

Sample Input:

    8
1 3 - 1 - 3 5 3 6 7
3


Sample Output:

    3 3 5 5 6 7


ANSWER SCRIPT:
    C PROGRAMMING:

    #include < stdio.h >

    int main() {
        int n;
        scanf("%d", & n);

        long long arr[200000];
        for (int i = 0; i < n; i++) scanf("%lld", & arr[i]);

        int k;
        scanf("%d", & k);

        int dq[200000];
        int front = 0, back = -1;

        for (int i = 0; i < n; i++) {
            // remove out of window
            if (front <= back && dq[front] <= i - k) front++;

            // remove smaller elements
            while (front <= back && arr[dq[back]] <= arr[i]) back--;

            dq[++back] = i;

            if (i >= k - 1) {
                printf("%lld", arr[dq[front]]);
                if (i != n - 1) printf(" ");
            }
        }
        return 0;
    }

PYTHON:

    from collections
import deque

n = int(input())
arr = list(map(int, input().split()))
k = int(input())

dq = deque()
res = []

for i in range(n):
    while dq and dq[0] <= i - k:
    dq.popleft()
while dq and arr[dq[-1]] <= arr[i]:
    dq.pop()
dq.append(i)

if i >= k - 1:
    res.append(arr[dq[0]])

print( * res)

JAVA:

    import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        long[] arr = new long[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextLong();
        int k = sc.nextInt();

        Deque < Integer > dq = new ArrayDeque < > ();
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < n; i++) {
            while (!dq.isEmpty() && dq.peekFirst() <= i - k) dq.pollFirst();
            while (!dq.isEmpty() && arr[dq.peekLast()] <= arr[i]) dq.pollLast();
            dq.addLast(i);

            if (i >= k - 1) {
                sb.append(arr[dq.peekFirst()]);
                if (i != n - 1) sb.append(" ");
            }
        }

        System.out.print(sb.toString().trim());
    }
}
];



 