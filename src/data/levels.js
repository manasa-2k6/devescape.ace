export const getLevelData = (themeId, levelNum) => {
  return levels[themeId]?.[levelNum - 1] || null;
};

export const levels = {
  "1": [
    {
      "level": 1,
      "title": "Level 1: Cyber Phase 1",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Cyber Heist] You are blocked by a secure firewall grid. Validate the access codes before they trace your signal!",
      "task": "Write a function `validate(n)` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      "examples": "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      "hint": "Use the modulo operator (%) to check if a number is even.",
      "testCases": [
        {
          "input": "4",
          "expected": "ACCESS"
        },
        {
          "input": "5",
          "expected": "DENIED"
        },
        {
          "input": "12",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(n):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Cyber Phase 2",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Cyber Heist] The data string is heavily scrambled into a mirror signature. Reverse it to expose the true payload.",
      "task": "Write a function `reverse_string(s)` that takes a string `s` and returns it reversed.",
      "examples": "Input: 'hacker' -> Output: 'rekcah'",
      "hint": "Strings can be sliced backward in Python, or loop backwards through characters.",
      "testCases": [
        {
          "input": "\"hacker\"",
          "expected": "rekcah"
        },
        {
          "input": "\"data\"",
          "expected": "atad"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(s):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverseString(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Cyber Phase 3",
      "difficulty": "Easy-Medium",
      "timeLimit": 900,
      "story": "[Cyber Heist] The core requires a cyclic 3-5 sub-protocol heartbeat. Setup the sequential ping/pong to keep the system active.",
      "task": "Given an integer `n`, output numbers from 1 to `n` joined by a space. Replace multiples of 3 with 'Ping', multiples of 5 with 'Pong', and multiples of both with 'PingPong'.",
      "examples": "Input: 5 -> Output: '1 2 Ping 4 Pong'",
      "hint": "Check for modulo 15 first.",
      "testCases": [
        {
          "input": "5",
          "expected": "1 2 Ping 4 Pong"
        },
        {
          "input": "15",
          "expected": "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"
        }
      ],
      "starterCode": {
        "python": "def protocol(n):\n    # Return a space separated string\n    pass",
        "java": "class Solution {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Cyber Phase 4",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Cyber Heist] An ancient symmetrical lock is in place. Verify that the bypass string looks identical visually from both ends.",
      "task": "Write a function `is_palindrome(s)` that checks if the string `s` reads the same forwards and backwards. Return 'TRUE' or 'FALSE'.",
      "examples": "Input: 'racecar' -> Output: 'TRUE'\nInput: 'hello' -> Output: 'FALSE'",
      "hint": "Compare the string to its reversed version.",
      "testCases": [
        {
          "input": "\"racecar\"",
          "expected": "TRUE"
        },
        {
          "input": "\"system\"",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(s):\n    # Return 'TRUE' or 'FALSE'\n    pass",
        "java": "class Solution {\n    public static String isPalindrome(String s) {\n        // Return 'TRUE' or 'FALSE'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid isPalindrome(char* s) {\n    // Print 'TRUE' or 'FALSE'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPalindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPalindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Cyber Phase 5",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Cyber Heist] A stream of fragmented energy packets are flooding in. Sum them up to bypass the surge protector.",
      "task": "Write a function `sum_array(arr)` where `arr` is a comma-separated string of integers. Return the total sum as an integer.",
      "examples": "Input: '1,2,3' -> Output: '6'",
      "hint": "Split the string by commas and parse each segment as an integer before summing.",
      "testCases": [
        {
          "input": "\"1,2,3\"",
          "expected": "6"
        },
        {
          "input": "\"10,-2,5\"",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arr_str):\n    # Return integer sum\n    pass",
        "java": "class Solution {\n    public static int sumArray(String arrStr) {\n        // Return integer sum\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid sumArray(char* arrStr) {\n    // Print the sum\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sumArray(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sumArray(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Cyber Phase 6",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Cyber Heist] The internal gear mechanism spins at a harmonic spiral rate. Predict the Nth gear velocity to synchronize!",
      "task": "Write a function `fibonacci(n)` that returns the n-th number in the Fibonacci sequence (where fib(1)=0, fib(2)=1).",
      "examples": "Input: 5 -> Output: '3'",
      "hint": "Use iteration or recursion to calculate the sum of the previous two numbers.",
      "testCases": [
        {
          "input": "5",
          "expected": "3"
        },
        {
          "input": "8",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def fibonacci(n):\n    # Return the n-th Fibonacci number\n    pass",
        "java": "class Solution {\n    public static int fibonacci(int n) {\n        // Return the n-th Fibonacci number\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid fibonacci(int n) {\n    // Print the result\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Cyber Phase 7",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Cyber Heist] The admin key is a singular indivisible factor. Determine if the captured block signature is purely prime to gain root.",
      "task": "Write a function `is_prime(n)` that checks if a positive integer `n` is a prime number. Return 'YES' or 'NO'.",
      "examples": "Input: 7 -> Output: 'YES'\nInput: 10 -> Output: 'NO'",
      "hint": "A prime number is only divisible by 1 and itself. Check divisors up to the square root of n.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        },
        {
          "input": "13",
          "expected": "YES"
        }
      ],
      "starterCode": {
        "python": "def is_prime(n):\n    # Return 'YES' or 'NO'\n    pass",
        "java": "class Solution {\n    public static String isPrime(int n) {\n        // Return 'YES' or 'NO'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid isPrime(int n) {\n    // Print 'YES' or 'NO'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPrime(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPrime(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Cyber Phase 8",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Cyber Heist] Encrypted sonic waves pulse through the network. Count the resonant frequencies (vowels) to isolate the noise.",
      "task": "Write a function `count_vowels(s)` that returns the total number of vowels (a, e, i, o, u) in a given string `s` (case-insensitive).",
      "examples": "Input: 'Algorithm' -> Output: '3'",
      "hint": "Convert the string to lowercase first, then count occurrences of a, e, i, o, u.",
      "testCases": [
        {
          "input": "\"Algorithm\"",
          "expected": "3"
        },
        {
          "input": "\"THE MATRIX\"",
          "expected": "3"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(s):\n    # Return integer count\n    pass",
        "java": "class Solution {\n    public static int countVowels(String s) {\n        // Return integer count\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid countVowels(char* s) {\n    // Print the count\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.countVowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    countVowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Cyber Phase 9",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Cyber Heist] The exponential growth of the payload is expanding. Calculate its full factorial matrix size to contain it.",
      "task": "Write a function `factorial(n)` that returns the factorial computation of `n` (n!).",
      "examples": "Input: 5 -> Output: '120'",
      "hint": "Multiply numbers from 1 to n. Or use recursion.",
      "testCases": [
        {
          "input": "5",
          "expected": "120"
        },
        {
          "input": "4",
          "expected": "24"
        }
      ],
      "starterCode": {
        "python": "def factorial(n):\n    # Return n!\n    pass",
        "java": "class Solution {\n    public static int factorial(int n) {\n        // Return n!\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid factorial(int n) {\n    // Print the factorial\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Cyber Phase 10",
      "difficulty": "Expert",
      "timeLimit": 600,
      "story": "[Cyber Heist] The system is overloading! Find the absolute peak maximum within the data influx string to shut down the faulty node.",
      "task": "Write a function `find_max(arr)` where `arr` is a comma-separated string of integers. Return the maximum integer found.",
      "examples": "Input: '3,1,9,4' -> Output: '9'",
      "hint": "Split the array, convert items to integers, and track the largest value.",
      "testCases": [
        {
          "input": "\"3,1,9,4\"",
          "expected": "9"
        },
        {
          "input": "\"-5,-2,-10\"",
          "expected": "-2"
        }
      ],
      "starterCode": {
        "python": "def find_max(arr_str):\n    # Return maximum integer\n    pass",
        "java": "class Solution {\n    public static int findMax(String arrStr) {\n        // Return maximum integer\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid findMax(char* arrStr) {\n    // Print max integer\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.findMax(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    findMax(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "2": [
    {
      "level": 1,
      "title": "Level 1: Mad Phase 1",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Mad Scientist's Lab] You are blocked by a secure firewall grid. Validate the access codes before they trace your signal!",
      "task": "Write a function `validate(n)` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      "examples": "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      "hint": "Use the modulo operator (%) to check if a number is even.",
      "testCases": [
        {
          "input": "4",
          "expected": "ACCESS"
        },
        {
          "input": "5",
          "expected": "DENIED"
        },
        {
          "input": "12",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(n):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Mad Phase 2",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Mad Scientist's Lab] The data string is heavily scrambled into a mirror signature. Reverse it to expose the true payload.",
      "task": "Write a function `reverse_string(s)` that takes a string `s` and returns it reversed.",
      "examples": "Input: 'hacker' -> Output: 'rekcah'",
      "hint": "Strings can be sliced backward in Python, or loop backwards through characters.",
      "testCases": [
        {
          "input": "\"hacker\"",
          "expected": "rekcah"
        },
        {
          "input": "\"data\"",
          "expected": "atad"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(s):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverseString(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Mad Phase 3",
      "difficulty": "Easy-Medium",
      "timeLimit": 900,
      "story": "[Mad Scientist's Lab] The core requires a cyclic 3-5 sub-protocol heartbeat. Setup the sequential ping/pong to keep the system active.",
      "task": "Given an integer `n`, output numbers from 1 to `n` joined by a space. Replace multiples of 3 with 'Ping', multiples of 5 with 'Pong', and multiples of both with 'PingPong'.",
      "examples": "Input: 5 -> Output: '1 2 Ping 4 Pong'",
      "hint": "Check for modulo 15 first.",
      "testCases": [
        {
          "input": "5",
          "expected": "1 2 Ping 4 Pong"
        },
        {
          "input": "15",
          "expected": "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"
        }
      ],
      "starterCode": {
        "python": "def protocol(n):\n    # Return a space separated string\n    pass",
        "java": "class Solution {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Mad Phase 4",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Mad Scientist's Lab] An ancient symmetrical lock is in place. Verify that the bypass string looks identical visually from both ends.",
      "task": "Write a function `is_palindrome(s)` that checks if the string `s` reads the same forwards and backwards. Return 'TRUE' or 'FALSE'.",
      "examples": "Input: 'racecar' -> Output: 'TRUE'\nInput: 'hello' -> Output: 'FALSE'",
      "hint": "Compare the string to its reversed version.",
      "testCases": [
        {
          "input": "\"racecar\"",
          "expected": "TRUE"
        },
        {
          "input": "\"system\"",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(s):\n    # Return 'TRUE' or 'FALSE'\n    pass",
        "java": "class Solution {\n    public static String isPalindrome(String s) {\n        // Return 'TRUE' or 'FALSE'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid isPalindrome(char* s) {\n    // Print 'TRUE' or 'FALSE'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPalindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPalindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Mad Phase 5",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Mad Scientist's Lab] A stream of fragmented energy packets are flooding in. Sum them up to bypass the surge protector.",
      "task": "Write a function `sum_array(arr)` where `arr` is a comma-separated string of integers. Return the total sum as an integer.",
      "examples": "Input: '1,2,3' -> Output: '6'",
      "hint": "Split the string by commas and parse each segment as an integer before summing.",
      "testCases": [
        {
          "input": "\"1,2,3\"",
          "expected": "6"
        },
        {
          "input": "\"10,-2,5\"",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arr_str):\n    # Return integer sum\n    pass",
        "java": "class Solution {\n    public static int sumArray(String arrStr) {\n        // Return integer sum\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid sumArray(char* arrStr) {\n    // Print the sum\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sumArray(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sumArray(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Mad Phase 6",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Mad Scientist's Lab] The internal gear mechanism spins at a harmonic spiral rate. Predict the Nth gear velocity to synchronize!",
      "task": "Write a function `fibonacci(n)` that returns the n-th number in the Fibonacci sequence (where fib(1)=0, fib(2)=1).",
      "examples": "Input: 5 -> Output: '3'",
      "hint": "Use iteration or recursion to calculate the sum of the previous two numbers.",
      "testCases": [
        {
          "input": "5",
          "expected": "3"
        },
        {
          "input": "8",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def fibonacci(n):\n    # Return the n-th Fibonacci number\n    pass",
        "java": "class Solution {\n    public static int fibonacci(int n) {\n        // Return the n-th Fibonacci number\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid fibonacci(int n) {\n    // Print the result\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Mad Phase 7",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Mad Scientist's Lab] The admin key is a singular indivisible factor. Determine if the captured block signature is purely prime to gain root.",
      "task": "Write a function `is_prime(n)` that checks if a positive integer `n` is a prime number. Return 'YES' or 'NO'.",
      "examples": "Input: 7 -> Output: 'YES'\nInput: 10 -> Output: 'NO'",
      "hint": "A prime number is only divisible by 1 and itself. Check divisors up to the square root of n.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        },
        {
          "input": "13",
          "expected": "YES"
        }
      ],
      "starterCode": {
        "python": "def is_prime(n):\n    # Return 'YES' or 'NO'\n    pass",
        "java": "class Solution {\n    public static String isPrime(int n) {\n        // Return 'YES' or 'NO'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid isPrime(int n) {\n    // Print 'YES' or 'NO'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPrime(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPrime(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Mad Phase 8",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Mad Scientist's Lab] Encrypted sonic waves pulse through the network. Count the resonant frequencies (vowels) to isolate the noise.",
      "task": "Write a function `count_vowels(s)` that returns the total number of vowels (a, e, i, o, u) in a given string `s` (case-insensitive).",
      "examples": "Input: 'Algorithm' -> Output: '3'",
      "hint": "Convert the string to lowercase first, then count occurrences of a, e, i, o, u.",
      "testCases": [
        {
          "input": "\"Algorithm\"",
          "expected": "3"
        },
        {
          "input": "\"THE MATRIX\"",
          "expected": "3"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(s):\n    # Return integer count\n    pass",
        "java": "class Solution {\n    public static int countVowels(String s) {\n        // Return integer count\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid countVowels(char* s) {\n    // Print the count\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.countVowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    countVowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Mad Phase 9",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Mad Scientist's Lab] The exponential growth of the payload is expanding. Calculate its full factorial matrix size to contain it.",
      "task": "Write a function `factorial(n)` that returns the factorial computation of `n` (n!).",
      "examples": "Input: 5 -> Output: '120'",
      "hint": "Multiply numbers from 1 to n. Or use recursion.",
      "testCases": [
        {
          "input": "5",
          "expected": "120"
        },
        {
          "input": "4",
          "expected": "24"
        }
      ],
      "starterCode": {
        "python": "def factorial(n):\n    # Return n!\n    pass",
        "java": "class Solution {\n    public static int factorial(int n) {\n        // Return n!\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid factorial(int n) {\n    // Print the factorial\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Mad Phase 10",
      "difficulty": "Expert",
      "timeLimit": 600,
      "story": "[Mad Scientist's Lab] The system is overloading! Find the absolute peak maximum within the data influx string to shut down the faulty node.",
      "task": "Write a function `find_max(arr)` where `arr` is a comma-separated string of integers. Return the maximum integer found.",
      "examples": "Input: '3,1,9,4' -> Output: '9'",
      "hint": "Split the array, convert items to integers, and track the largest value.",
      "testCases": [
        {
          "input": "\"3,1,9,4\"",
          "expected": "9"
        },
        {
          "input": "\"-5,-2,-10\"",
          "expected": "-2"
        }
      ],
      "starterCode": {
        "python": "def find_max(arr_str):\n    # Return maximum integer\n    pass",
        "java": "class Solution {\n    public static int findMax(String arrStr) {\n        // Return maximum integer\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid findMax(char* arrStr) {\n    // Print max integer\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.findMax(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    findMax(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "3": [
    {
      "level": 1,
      "title": "Level 1: Ancient Phase 1",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Ancient Algorithm Temple] You are blocked by a secure firewall grid. Validate the access codes before they trace your signal!",
      "task": "Write a function `validate(n)` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      "examples": "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      "hint": "Use the modulo operator (%) to check if a number is even.",
      "testCases": [
        {
          "input": "4",
          "expected": "ACCESS"
        },
        {
          "input": "5",
          "expected": "DENIED"
        },
        {
          "input": "12",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(n):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Ancient Phase 2",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Ancient Algorithm Temple] The data string is heavily scrambled into a mirror signature. Reverse it to expose the true payload.",
      "task": "Write a function `reverse_string(s)` that takes a string `s` and returns it reversed.",
      "examples": "Input: 'hacker' -> Output: 'rekcah'",
      "hint": "Strings can be sliced backward in Python, or loop backwards through characters.",
      "testCases": [
        {
          "input": "\"hacker\"",
          "expected": "rekcah"
        },
        {
          "input": "\"data\"",
          "expected": "atad"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(s):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverseString(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Ancient Phase 3",
      "difficulty": "Easy-Medium",
      "timeLimit": 900,
      "story": "[Ancient Algorithm Temple] The core requires a cyclic 3-5 sub-protocol heartbeat. Setup the sequential ping/pong to keep the system active.",
      "task": "Given an integer `n`, output numbers from 1 to `n` joined by a space. Replace multiples of 3 with 'Ping', multiples of 5 with 'Pong', and multiples of both with 'PingPong'.",
      "examples": "Input: 5 -> Output: '1 2 Ping 4 Pong'",
      "hint": "Check for modulo 15 first.",
      "testCases": [
        {
          "input": "5",
          "expected": "1 2 Ping 4 Pong"
        },
        {
          "input": "15",
          "expected": "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"
        }
      ],
      "starterCode": {
        "python": "def protocol(n):\n    # Return a space separated string\n    pass",
        "java": "class Solution {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Ancient Phase 4",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Ancient Algorithm Temple] An ancient symmetrical lock is in place. Verify that the bypass string looks identical visually from both ends.",
      "task": "Write a function `is_palindrome(s)` that checks if the string `s` reads the same forwards and backwards. Return 'TRUE' or 'FALSE'.",
      "examples": "Input: 'racecar' -> Output: 'TRUE'\nInput: 'hello' -> Output: 'FALSE'",
      "hint": "Compare the string to its reversed version.",
      "testCases": [
        {
          "input": "\"racecar\"",
          "expected": "TRUE"
        },
        {
          "input": "\"system\"",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(s):\n    # Return 'TRUE' or 'FALSE'\n    pass",
        "java": "class Solution {\n    public static String isPalindrome(String s) {\n        // Return 'TRUE' or 'FALSE'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid isPalindrome(char* s) {\n    // Print 'TRUE' or 'FALSE'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPalindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPalindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Ancient Phase 5",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Ancient Algorithm Temple] A stream of fragmented energy packets are flooding in. Sum them up to bypass the surge protector.",
      "task": "Write a function `sum_array(arr)` where `arr` is a comma-separated string of integers. Return the total sum as an integer.",
      "examples": "Input: '1,2,3' -> Output: '6'",
      "hint": "Split the string by commas and parse each segment as an integer before summing.",
      "testCases": [
        {
          "input": "\"1,2,3\"",
          "expected": "6"
        },
        {
          "input": "\"10,-2,5\"",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arr_str):\n    # Return integer sum\n    pass",
        "java": "class Solution {\n    public static int sumArray(String arrStr) {\n        // Return integer sum\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid sumArray(char* arrStr) {\n    // Print the sum\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sumArray(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sumArray(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Ancient Phase 6",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Ancient Algorithm Temple] The internal gear mechanism spins at a harmonic spiral rate. Predict the Nth gear velocity to synchronize!",
      "task": "Write a function `fibonacci(n)` that returns the n-th number in the Fibonacci sequence (where fib(1)=0, fib(2)=1).",
      "examples": "Input: 5 -> Output: '3'",
      "hint": "Use iteration or recursion to calculate the sum of the previous two numbers.",
      "testCases": [
        {
          "input": "5",
          "expected": "3"
        },
        {
          "input": "8",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def fibonacci(n):\n    # Return the n-th Fibonacci number\n    pass",
        "java": "class Solution {\n    public static int fibonacci(int n) {\n        // Return the n-th Fibonacci number\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid fibonacci(int n) {\n    // Print the result\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Ancient Phase 7",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Ancient Algorithm Temple] The admin key is a singular indivisible factor. Determine if the captured block signature is purely prime to gain root.",
      "task": "Write a function `is_prime(n)` that checks if a positive integer `n` is a prime number. Return 'YES' or 'NO'.",
      "examples": "Input: 7 -> Output: 'YES'\nInput: 10 -> Output: 'NO'",
      "hint": "A prime number is only divisible by 1 and itself. Check divisors up to the square root of n.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        },
        {
          "input": "13",
          "expected": "YES"
        }
      ],
      "starterCode": {
        "python": "def is_prime(n):\n    # Return 'YES' or 'NO'\n    pass",
        "java": "class Solution {\n    public static String isPrime(int n) {\n        // Return 'YES' or 'NO'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid isPrime(int n) {\n    // Print 'YES' or 'NO'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPrime(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPrime(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Ancient Phase 8",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Ancient Algorithm Temple] Encrypted sonic waves pulse through the network. Count the resonant frequencies (vowels) to isolate the noise.",
      "task": "Write a function `count_vowels(s)` that returns the total number of vowels (a, e, i, o, u) in a given string `s` (case-insensitive).",
      "examples": "Input: 'Algorithm' -> Output: '3'",
      "hint": "Convert the string to lowercase first, then count occurrences of a, e, i, o, u.",
      "testCases": [
        {
          "input": "\"Algorithm\"",
          "expected": "3"
        },
        {
          "input": "\"THE MATRIX\"",
          "expected": "3"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(s):\n    # Return integer count\n    pass",
        "java": "class Solution {\n    public static int countVowels(String s) {\n        // Return integer count\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid countVowels(char* s) {\n    // Print the count\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.countVowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    countVowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Ancient Phase 9",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Ancient Algorithm Temple] The exponential growth of the payload is expanding. Calculate its full factorial matrix size to contain it.",
      "task": "Write a function `factorial(n)` that returns the factorial computation of `n` (n!).",
      "examples": "Input: 5 -> Output: '120'",
      "hint": "Multiply numbers from 1 to n. Or use recursion.",
      "testCases": [
        {
          "input": "5",
          "expected": "120"
        },
        {
          "input": "4",
          "expected": "24"
        }
      ],
      "starterCode": {
        "python": "def factorial(n):\n    # Return n!\n    pass",
        "java": "class Solution {\n    public static int factorial(int n) {\n        // Return n!\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid factorial(int n) {\n    // Print the factorial\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Ancient Phase 10",
      "difficulty": "Expert",
      "timeLimit": 600,
      "story": "[Ancient Algorithm Temple] The system is overloading! Find the absolute peak maximum within the data influx string to shut down the faulty node.",
      "task": "Write a function `find_max(arr)` where `arr` is a comma-separated string of integers. Return the maximum integer found.",
      "examples": "Input: '3,1,9,4' -> Output: '9'",
      "hint": "Split the array, convert items to integers, and track the largest value.",
      "testCases": [
        {
          "input": "\"3,1,9,4\"",
          "expected": "9"
        },
        {
          "input": "\"-5,-2,-10\"",
          "expected": "-2"
        }
      ],
      "starterCode": {
        "python": "def find_max(arr_str):\n    # Return maximum integer\n    pass",
        "java": "class Solution {\n    public static int findMax(String arrStr) {\n        // Return maximum integer\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid findMax(char* arrStr) {\n    // Print max integer\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.findMax(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    findMax(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "4": [
    {
      "level": 1,
      "title": "Level 1: Space Phase 1",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Space Station Meltdown] You are blocked by a secure firewall grid. Validate the access codes before they trace your signal!",
      "task": "Write a function `validate(n)` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      "examples": "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      "hint": "Use the modulo operator (%) to check if a number is even.",
      "testCases": [
        {
          "input": "4",
          "expected": "ACCESS"
        },
        {
          "input": "5",
          "expected": "DENIED"
        },
        {
          "input": "12",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(n):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Space Phase 2",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Space Station Meltdown] The data string is heavily scrambled into a mirror signature. Reverse it to expose the true payload.",
      "task": "Write a function `reverse_string(s)` that takes a string `s` and returns it reversed.",
      "examples": "Input: 'hacker' -> Output: 'rekcah'",
      "hint": "Strings can be sliced backward in Python, or loop backwards through characters.",
      "testCases": [
        {
          "input": "\"hacker\"",
          "expected": "rekcah"
        },
        {
          "input": "\"data\"",
          "expected": "atad"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(s):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverseString(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Space Phase 3",
      "difficulty": "Easy-Medium",
      "timeLimit": 900,
      "story": "[Space Station Meltdown] The core requires a cyclic 3-5 sub-protocol heartbeat. Setup the sequential ping/pong to keep the system active.",
      "task": "Given an integer `n`, output numbers from 1 to `n` joined by a space. Replace multiples of 3 with 'Ping', multiples of 5 with 'Pong', and multiples of both with 'PingPong'.",
      "examples": "Input: 5 -> Output: '1 2 Ping 4 Pong'",
      "hint": "Check for modulo 15 first.",
      "testCases": [
        {
          "input": "5",
          "expected": "1 2 Ping 4 Pong"
        },
        {
          "input": "15",
          "expected": "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"
        }
      ],
      "starterCode": {
        "python": "def protocol(n):\n    # Return a space separated string\n    pass",
        "java": "class Solution {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Space Phase 4",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Space Station Meltdown] An ancient symmetrical lock is in place. Verify that the bypass string looks identical visually from both ends.",
      "task": "Write a function `is_palindrome(s)` that checks if the string `s` reads the same forwards and backwards. Return 'TRUE' or 'FALSE'.",
      "examples": "Input: 'racecar' -> Output: 'TRUE'\nInput: 'hello' -> Output: 'FALSE'",
      "hint": "Compare the string to its reversed version.",
      "testCases": [
        {
          "input": "\"racecar\"",
          "expected": "TRUE"
        },
        {
          "input": "\"system\"",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(s):\n    # Return 'TRUE' or 'FALSE'\n    pass",
        "java": "class Solution {\n    public static String isPalindrome(String s) {\n        // Return 'TRUE' or 'FALSE'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid isPalindrome(char* s) {\n    // Print 'TRUE' or 'FALSE'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPalindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPalindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Space Phase 5",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Space Station Meltdown] A stream of fragmented energy packets are flooding in. Sum them up to bypass the surge protector.",
      "task": "Write a function `sum_array(arr)` where `arr` is a comma-separated string of integers. Return the total sum as an integer.",
      "examples": "Input: '1,2,3' -> Output: '6'",
      "hint": "Split the string by commas and parse each segment as an integer before summing.",
      "testCases": [
        {
          "input": "\"1,2,3\"",
          "expected": "6"
        },
        {
          "input": "\"10,-2,5\"",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arr_str):\n    # Return integer sum\n    pass",
        "java": "class Solution {\n    public static int sumArray(String arrStr) {\n        // Return integer sum\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid sumArray(char* arrStr) {\n    // Print the sum\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sumArray(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sumArray(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Space Phase 6",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Space Station Meltdown] The internal gear mechanism spins at a harmonic spiral rate. Predict the Nth gear velocity to synchronize!",
      "task": "Write a function `fibonacci(n)` that returns the n-th number in the Fibonacci sequence (where fib(1)=0, fib(2)=1).",
      "examples": "Input: 5 -> Output: '3'",
      "hint": "Use iteration or recursion to calculate the sum of the previous two numbers.",
      "testCases": [
        {
          "input": "5",
          "expected": "3"
        },
        {
          "input": "8",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def fibonacci(n):\n    # Return the n-th Fibonacci number\n    pass",
        "java": "class Solution {\n    public static int fibonacci(int n) {\n        // Return the n-th Fibonacci number\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid fibonacci(int n) {\n    // Print the result\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Space Phase 7",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Space Station Meltdown] The admin key is a singular indivisible factor. Determine if the captured block signature is purely prime to gain root.",
      "task": "Write a function `is_prime(n)` that checks if a positive integer `n` is a prime number. Return 'YES' or 'NO'.",
      "examples": "Input: 7 -> Output: 'YES'\nInput: 10 -> Output: 'NO'",
      "hint": "A prime number is only divisible by 1 and itself. Check divisors up to the square root of n.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        },
        {
          "input": "13",
          "expected": "YES"
        }
      ],
      "starterCode": {
        "python": "def is_prime(n):\n    # Return 'YES' or 'NO'\n    pass",
        "java": "class Solution {\n    public static String isPrime(int n) {\n        // Return 'YES' or 'NO'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid isPrime(int n) {\n    // Print 'YES' or 'NO'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPrime(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPrime(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Space Phase 8",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Space Station Meltdown] Encrypted sonic waves pulse through the network. Count the resonant frequencies (vowels) to isolate the noise.",
      "task": "Write a function `count_vowels(s)` that returns the total number of vowels (a, e, i, o, u) in a given string `s` (case-insensitive).",
      "examples": "Input: 'Algorithm' -> Output: '3'",
      "hint": "Convert the string to lowercase first, then count occurrences of a, e, i, o, u.",
      "testCases": [
        {
          "input": "\"Algorithm\"",
          "expected": "3"
        },
        {
          "input": "\"THE MATRIX\"",
          "expected": "3"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(s):\n    # Return integer count\n    pass",
        "java": "class Solution {\n    public static int countVowels(String s) {\n        // Return integer count\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid countVowels(char* s) {\n    // Print the count\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.countVowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    countVowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Space Phase 9",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Space Station Meltdown] The exponential growth of the payload is expanding. Calculate its full factorial matrix size to contain it.",
      "task": "Write a function `factorial(n)` that returns the factorial computation of `n` (n!).",
      "examples": "Input: 5 -> Output: '120'",
      "hint": "Multiply numbers from 1 to n. Or use recursion.",
      "testCases": [
        {
          "input": "5",
          "expected": "120"
        },
        {
          "input": "4",
          "expected": "24"
        }
      ],
      "starterCode": {
        "python": "def factorial(n):\n    # Return n!\n    pass",
        "java": "class Solution {\n    public static int factorial(int n) {\n        // Return n!\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid factorial(int n) {\n    // Print the factorial\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Space Phase 10",
      "difficulty": "Expert",
      "timeLimit": 600,
      "story": "[Space Station Meltdown] The system is overloading! Find the absolute peak maximum within the data influx string to shut down the faulty node.",
      "task": "Write a function `find_max(arr)` where `arr` is a comma-separated string of integers. Return the maximum integer found.",
      "examples": "Input: '3,1,9,4' -> Output: '9'",
      "hint": "Split the array, convert items to integers, and track the largest value.",
      "testCases": [
        {
          "input": "\"3,1,9,4\"",
          "expected": "9"
        },
        {
          "input": "\"-5,-2,-10\"",
          "expected": "-2"
        }
      ],
      "starterCode": {
        "python": "def find_max(arr_str):\n    # Return maximum integer\n    pass",
        "java": "class Solution {\n    public static int findMax(String arrStr) {\n        // Return maximum integer\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid findMax(char* arrStr) {\n    // Print max integer\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.findMax(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    findMax(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "5": [
    {
      "level": 1,
      "title": "Level 1: Zombie Phase 1",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Zombie Apocalypse] You are blocked by a secure firewall grid. Validate the access codes before they trace your signal!",
      "task": "Write a function `validate(n)` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      "examples": "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      "hint": "Use the modulo operator (%) to check if a number is even.",
      "testCases": [
        {
          "input": "4",
          "expected": "ACCESS"
        },
        {
          "input": "5",
          "expected": "DENIED"
        },
        {
          "input": "12",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(n):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Zombie Phase 2",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Zombie Apocalypse] The data string is heavily scrambled into a mirror signature. Reverse it to expose the true payload.",
      "task": "Write a function `reverse_string(s)` that takes a string `s` and returns it reversed.",
      "examples": "Input: 'hacker' -> Output: 'rekcah'",
      "hint": "Strings can be sliced backward in Python, or loop backwards through characters.",
      "testCases": [
        {
          "input": "\"hacker\"",
          "expected": "rekcah"
        },
        {
          "input": "\"data\"",
          "expected": "atad"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(s):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverseString(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Zombie Phase 3",
      "difficulty": "Easy-Medium",
      "timeLimit": 900,
      "story": "[Zombie Apocalypse] The core requires a cyclic 3-5 sub-protocol heartbeat. Setup the sequential ping/pong to keep the system active.",
      "task": "Given an integer `n`, output numbers from 1 to `n` joined by a space. Replace multiples of 3 with 'Ping', multiples of 5 with 'Pong', and multiples of both with 'PingPong'.",
      "examples": "Input: 5 -> Output: '1 2 Ping 4 Pong'",
      "hint": "Check for modulo 15 first.",
      "testCases": [
        {
          "input": "5",
          "expected": "1 2 Ping 4 Pong"
        },
        {
          "input": "15",
          "expected": "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"
        }
      ],
      "starterCode": {
        "python": "def protocol(n):\n    # Return a space separated string\n    pass",
        "java": "class Solution {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Zombie Phase 4",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Zombie Apocalypse] An ancient symmetrical lock is in place. Verify that the bypass string looks identical visually from both ends.",
      "task": "Write a function `is_palindrome(s)` that checks if the string `s` reads the same forwards and backwards. Return 'TRUE' or 'FALSE'.",
      "examples": "Input: 'racecar' -> Output: 'TRUE'\nInput: 'hello' -> Output: 'FALSE'",
      "hint": "Compare the string to its reversed version.",
      "testCases": [
        {
          "input": "\"racecar\"",
          "expected": "TRUE"
        },
        {
          "input": "\"system\"",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(s):\n    # Return 'TRUE' or 'FALSE'\n    pass",
        "java": "class Solution {\n    public static String isPalindrome(String s) {\n        // Return 'TRUE' or 'FALSE'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid isPalindrome(char* s) {\n    // Print 'TRUE' or 'FALSE'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPalindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPalindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Zombie Phase 5",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Zombie Apocalypse] A stream of fragmented energy packets are flooding in. Sum them up to bypass the surge protector.",
      "task": "Write a function `sum_array(arr)` where `arr` is a comma-separated string of integers. Return the total sum as an integer.",
      "examples": "Input: '1,2,3' -> Output: '6'",
      "hint": "Split the string by commas and parse each segment as an integer before summing.",
      "testCases": [
        {
          "input": "\"1,2,3\"",
          "expected": "6"
        },
        {
          "input": "\"10,-2,5\"",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arr_str):\n    # Return integer sum\n    pass",
        "java": "class Solution {\n    public static int sumArray(String arrStr) {\n        // Return integer sum\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid sumArray(char* arrStr) {\n    // Print the sum\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sumArray(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sumArray(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Zombie Phase 6",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Zombie Apocalypse] The internal gear mechanism spins at a harmonic spiral rate. Predict the Nth gear velocity to synchronize!",
      "task": "Write a function `fibonacci(n)` that returns the n-th number in the Fibonacci sequence (where fib(1)=0, fib(2)=1).",
      "examples": "Input: 5 -> Output: '3'",
      "hint": "Use iteration or recursion to calculate the sum of the previous two numbers.",
      "testCases": [
        {
          "input": "5",
          "expected": "3"
        },
        {
          "input": "8",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def fibonacci(n):\n    # Return the n-th Fibonacci number\n    pass",
        "java": "class Solution {\n    public static int fibonacci(int n) {\n        // Return the n-th Fibonacci number\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid fibonacci(int n) {\n    // Print the result\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Zombie Phase 7",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Zombie Apocalypse] The admin key is a singular indivisible factor. Determine if the captured block signature is purely prime to gain root.",
      "task": "Write a function `is_prime(n)` that checks if a positive integer `n` is a prime number. Return 'YES' or 'NO'.",
      "examples": "Input: 7 -> Output: 'YES'\nInput: 10 -> Output: 'NO'",
      "hint": "A prime number is only divisible by 1 and itself. Check divisors up to the square root of n.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        },
        {
          "input": "13",
          "expected": "YES"
        }
      ],
      "starterCode": {
        "python": "def is_prime(n):\n    # Return 'YES' or 'NO'\n    pass",
        "java": "class Solution {\n    public static String isPrime(int n) {\n        // Return 'YES' or 'NO'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid isPrime(int n) {\n    // Print 'YES' or 'NO'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPrime(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPrime(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Zombie Phase 8",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Zombie Apocalypse] Encrypted sonic waves pulse through the network. Count the resonant frequencies (vowels) to isolate the noise.",
      "task": "Write a function `count_vowels(s)` that returns the total number of vowels (a, e, i, o, u) in a given string `s` (case-insensitive).",
      "examples": "Input: 'Algorithm' -> Output: '3'",
      "hint": "Convert the string to lowercase first, then count occurrences of a, e, i, o, u.",
      "testCases": [
        {
          "input": "\"Algorithm\"",
          "expected": "3"
        },
        {
          "input": "\"THE MATRIX\"",
          "expected": "3"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(s):\n    # Return integer count\n    pass",
        "java": "class Solution {\n    public static int countVowels(String s) {\n        // Return integer count\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid countVowels(char* s) {\n    // Print the count\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.countVowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    countVowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Zombie Phase 9",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Zombie Apocalypse] The exponential growth of the payload is expanding. Calculate its full factorial matrix size to contain it.",
      "task": "Write a function `factorial(n)` that returns the factorial computation of `n` (n!).",
      "examples": "Input: 5 -> Output: '120'",
      "hint": "Multiply numbers from 1 to n. Or use recursion.",
      "testCases": [
        {
          "input": "5",
          "expected": "120"
        },
        {
          "input": "4",
          "expected": "24"
        }
      ],
      "starterCode": {
        "python": "def factorial(n):\n    # Return n!\n    pass",
        "java": "class Solution {\n    public static int factorial(int n) {\n        // Return n!\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid factorial(int n) {\n    // Print the factorial\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Zombie Phase 10",
      "difficulty": "Expert",
      "timeLimit": 600,
      "story": "[Zombie Apocalypse] The system is overloading! Find the absolute peak maximum within the data influx string to shut down the faulty node.",
      "task": "Write a function `find_max(arr)` where `arr` is a comma-separated string of integers. Return the maximum integer found.",
      "examples": "Input: '3,1,9,4' -> Output: '9'",
      "hint": "Split the array, convert items to integers, and track the largest value.",
      "testCases": [
        {
          "input": "\"3,1,9,4\"",
          "expected": "9"
        },
        {
          "input": "\"-5,-2,-10\"",
          "expected": "-2"
        }
      ],
      "starterCode": {
        "python": "def find_max(arr_str):\n    # Return maximum integer\n    pass",
        "java": "class Solution {\n    public static int findMax(String arrStr) {\n        // Return maximum integer\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid findMax(char* arrStr) {\n    // Print max integer\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.findMax(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    findMax(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "6": [
    {
      "level": 1,
      "title": "Level 1: Stranger Phase 1",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Stranger Things] You are blocked by a secure firewall grid. Validate the access codes before they trace your signal!",
      "task": "Write a function `validate(n)` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      "examples": "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      "hint": "Use the modulo operator (%) to check if a number is even.",
      "testCases": [
        {
          "input": "4",
          "expected": "ACCESS"
        },
        {
          "input": "5",
          "expected": "DENIED"
        },
        {
          "input": "12",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(n):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Stranger Phase 2",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Stranger Things] The data string is heavily scrambled into a mirror signature. Reverse it to expose the true payload.",
      "task": "Write a function `reverse_string(s)` that takes a string `s` and returns it reversed.",
      "examples": "Input: 'hacker' -> Output: 'rekcah'",
      "hint": "Strings can be sliced backward in Python, or loop backwards through characters.",
      "testCases": [
        {
          "input": "\"hacker\"",
          "expected": "rekcah"
        },
        {
          "input": "\"data\"",
          "expected": "atad"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(s):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverseString(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Stranger Phase 3",
      "difficulty": "Easy-Medium",
      "timeLimit": 900,
      "story": "[Stranger Things] The core requires a cyclic 3-5 sub-protocol heartbeat. Setup the sequential ping/pong to keep the system active.",
      "task": "Given an integer `n`, output numbers from 1 to `n` joined by a space. Replace multiples of 3 with 'Ping', multiples of 5 with 'Pong', and multiples of both with 'PingPong'.",
      "examples": "Input: 5 -> Output: '1 2 Ping 4 Pong'",
      "hint": "Check for modulo 15 first.",
      "testCases": [
        {
          "input": "5",
          "expected": "1 2 Ping 4 Pong"
        },
        {
          "input": "15",
          "expected": "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"
        }
      ],
      "starterCode": {
        "python": "def protocol(n):\n    # Return a space separated string\n    pass",
        "java": "class Solution {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Stranger Phase 4",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Stranger Things] An ancient symmetrical lock is in place. Verify that the bypass string looks identical visually from both ends.",
      "task": "Write a function `is_palindrome(s)` that checks if the string `s` reads the same forwards and backwards. Return 'TRUE' or 'FALSE'.",
      "examples": "Input: 'racecar' -> Output: 'TRUE'\nInput: 'hello' -> Output: 'FALSE'",
      "hint": "Compare the string to its reversed version.",
      "testCases": [
        {
          "input": "\"racecar\"",
          "expected": "TRUE"
        },
        {
          "input": "\"system\"",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(s):\n    # Return 'TRUE' or 'FALSE'\n    pass",
        "java": "class Solution {\n    public static String isPalindrome(String s) {\n        // Return 'TRUE' or 'FALSE'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid isPalindrome(char* s) {\n    // Print 'TRUE' or 'FALSE'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPalindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPalindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Stranger Phase 5",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Stranger Things] A stream of fragmented energy packets are flooding in. Sum them up to bypass the surge protector.",
      "task": "Write a function `sum_array(arr)` where `arr` is a comma-separated string of integers. Return the total sum as an integer.",
      "examples": "Input: '1,2,3' -> Output: '6'",
      "hint": "Split the string by commas and parse each segment as an integer before summing.",
      "testCases": [
        {
          "input": "\"1,2,3\"",
          "expected": "6"
        },
        {
          "input": "\"10,-2,5\"",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arr_str):\n    # Return integer sum\n    pass",
        "java": "class Solution {\n    public static int sumArray(String arrStr) {\n        // Return integer sum\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid sumArray(char* arrStr) {\n    // Print the sum\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sumArray(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sumArray(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Stranger Phase 6",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Stranger Things] The internal gear mechanism spins at a harmonic spiral rate. Predict the Nth gear velocity to synchronize!",
      "task": "Write a function `fibonacci(n)` that returns the n-th number in the Fibonacci sequence (where fib(1)=0, fib(2)=1).",
      "examples": "Input: 5 -> Output: '3'",
      "hint": "Use iteration or recursion to calculate the sum of the previous two numbers.",
      "testCases": [
        {
          "input": "5",
          "expected": "3"
        },
        {
          "input": "8",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def fibonacci(n):\n    # Return the n-th Fibonacci number\n    pass",
        "java": "class Solution {\n    public static int fibonacci(int n) {\n        // Return the n-th Fibonacci number\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid fibonacci(int n) {\n    // Print the result\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Stranger Phase 7",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Stranger Things] The admin key is a singular indivisible factor. Determine if the captured block signature is purely prime to gain root.",
      "task": "Write a function `is_prime(n)` that checks if a positive integer `n` is a prime number. Return 'YES' or 'NO'.",
      "examples": "Input: 7 -> Output: 'YES'\nInput: 10 -> Output: 'NO'",
      "hint": "A prime number is only divisible by 1 and itself. Check divisors up to the square root of n.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        },
        {
          "input": "13",
          "expected": "YES"
        }
      ],
      "starterCode": {
        "python": "def is_prime(n):\n    # Return 'YES' or 'NO'\n    pass",
        "java": "class Solution {\n    public static String isPrime(int n) {\n        // Return 'YES' or 'NO'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid isPrime(int n) {\n    // Print 'YES' or 'NO'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPrime(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPrime(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Stranger Phase 8",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Stranger Things] Encrypted sonic waves pulse through the network. Count the resonant frequencies (vowels) to isolate the noise.",
      "task": "Write a function `count_vowels(s)` that returns the total number of vowels (a, e, i, o, u) in a given string `s` (case-insensitive).",
      "examples": "Input: 'Algorithm' -> Output: '3'",
      "hint": "Convert the string to lowercase first, then count occurrences of a, e, i, o, u.",
      "testCases": [
        {
          "input": "\"Algorithm\"",
          "expected": "3"
        },
        {
          "input": "\"THE MATRIX\"",
          "expected": "3"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(s):\n    # Return integer count\n    pass",
        "java": "class Solution {\n    public static int countVowels(String s) {\n        // Return integer count\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid countVowels(char* s) {\n    // Print the count\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.countVowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    countVowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Stranger Phase 9",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Stranger Things] The exponential growth of the payload is expanding. Calculate its full factorial matrix size to contain it.",
      "task": "Write a function `factorial(n)` that returns the factorial computation of `n` (n!).",
      "examples": "Input: 5 -> Output: '120'",
      "hint": "Multiply numbers from 1 to n. Or use recursion.",
      "testCases": [
        {
          "input": "5",
          "expected": "120"
        },
        {
          "input": "4",
          "expected": "24"
        }
      ],
      "starterCode": {
        "python": "def factorial(n):\n    # Return n!\n    pass",
        "java": "class Solution {\n    public static int factorial(int n) {\n        // Return n!\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid factorial(int n) {\n    // Print the factorial\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Stranger Phase 10",
      "difficulty": "Expert",
      "timeLimit": 600,
      "story": "[Stranger Things] The system is overloading! Find the absolute peak maximum within the data influx string to shut down the faulty node.",
      "task": "Write a function `find_max(arr)` where `arr` is a comma-separated string of integers. Return the maximum integer found.",
      "examples": "Input: '3,1,9,4' -> Output: '9'",
      "hint": "Split the array, convert items to integers, and track the largest value.",
      "testCases": [
        {
          "input": "\"3,1,9,4\"",
          "expected": "9"
        },
        {
          "input": "\"-5,-2,-10\"",
          "expected": "-2"
        }
      ],
      "starterCode": {
        "python": "def find_max(arr_str):\n    # Return maximum integer\n    pass",
        "java": "class Solution {\n    public static int findMax(String arrStr) {\n        // Return maximum integer\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid findMax(char* arrStr) {\n    // Print max integer\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.findMax(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    findMax(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "7": [
    {
      "level": 1,
      "title": "Level 1: Money Phase 1",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Money Heist] You are blocked by a secure firewall grid. Validate the access codes before they trace your signal!",
      "task": "Write a function `validate(n)` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      "examples": "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      "hint": "Use the modulo operator (%) to check if a number is even.",
      "testCases": [
        {
          "input": "4",
          "expected": "ACCESS"
        },
        {
          "input": "5",
          "expected": "DENIED"
        },
        {
          "input": "12",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(n):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Money Phase 2",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Money Heist] The data string is heavily scrambled into a mirror signature. Reverse it to expose the true payload.",
      "task": "Write a function `reverse_string(s)` that takes a string `s` and returns it reversed.",
      "examples": "Input: 'hacker' -> Output: 'rekcah'",
      "hint": "Strings can be sliced backward in Python, or loop backwards through characters.",
      "testCases": [
        {
          "input": "\"hacker\"",
          "expected": "rekcah"
        },
        {
          "input": "\"data\"",
          "expected": "atad"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(s):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverseString(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Money Phase 3",
      "difficulty": "Easy-Medium",
      "timeLimit": 900,
      "story": "[Money Heist] The core requires a cyclic 3-5 sub-protocol heartbeat. Setup the sequential ping/pong to keep the system active.",
      "task": "Given an integer `n`, output numbers from 1 to `n` joined by a space. Replace multiples of 3 with 'Ping', multiples of 5 with 'Pong', and multiples of both with 'PingPong'.",
      "examples": "Input: 5 -> Output: '1 2 Ping 4 Pong'",
      "hint": "Check for modulo 15 first.",
      "testCases": [
        {
          "input": "5",
          "expected": "1 2 Ping 4 Pong"
        },
        {
          "input": "15",
          "expected": "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"
        }
      ],
      "starterCode": {
        "python": "def protocol(n):\n    # Return a space separated string\n    pass",
        "java": "class Solution {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Money Phase 4",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Money Heist] An ancient symmetrical lock is in place. Verify that the bypass string looks identical visually from both ends.",
      "task": "Write a function `is_palindrome(s)` that checks if the string `s` reads the same forwards and backwards. Return 'TRUE' or 'FALSE'.",
      "examples": "Input: 'racecar' -> Output: 'TRUE'\nInput: 'hello' -> Output: 'FALSE'",
      "hint": "Compare the string to its reversed version.",
      "testCases": [
        {
          "input": "\"racecar\"",
          "expected": "TRUE"
        },
        {
          "input": "\"system\"",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(s):\n    # Return 'TRUE' or 'FALSE'\n    pass",
        "java": "class Solution {\n    public static String isPalindrome(String s) {\n        // Return 'TRUE' or 'FALSE'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid isPalindrome(char* s) {\n    // Print 'TRUE' or 'FALSE'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPalindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPalindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Money Phase 5",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Money Heist] A stream of fragmented energy packets are flooding in. Sum them up to bypass the surge protector.",
      "task": "Write a function `sum_array(arr)` where `arr` is a comma-separated string of integers. Return the total sum as an integer.",
      "examples": "Input: '1,2,3' -> Output: '6'",
      "hint": "Split the string by commas and parse each segment as an integer before summing.",
      "testCases": [
        {
          "input": "\"1,2,3\"",
          "expected": "6"
        },
        {
          "input": "\"10,-2,5\"",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arr_str):\n    # Return integer sum\n    pass",
        "java": "class Solution {\n    public static int sumArray(String arrStr) {\n        // Return integer sum\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid sumArray(char* arrStr) {\n    // Print the sum\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sumArray(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sumArray(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Money Phase 6",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Money Heist] The internal gear mechanism spins at a harmonic spiral rate. Predict the Nth gear velocity to synchronize!",
      "task": "Write a function `fibonacci(n)` that returns the n-th number in the Fibonacci sequence (where fib(1)=0, fib(2)=1).",
      "examples": "Input: 5 -> Output: '3'",
      "hint": "Use iteration or recursion to calculate the sum of the previous two numbers.",
      "testCases": [
        {
          "input": "5",
          "expected": "3"
        },
        {
          "input": "8",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def fibonacci(n):\n    # Return the n-th Fibonacci number\n    pass",
        "java": "class Solution {\n    public static int fibonacci(int n) {\n        // Return the n-th Fibonacci number\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid fibonacci(int n) {\n    // Print the result\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Money Phase 7",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Money Heist] The admin key is a singular indivisible factor. Determine if the captured block signature is purely prime to gain root.",
      "task": "Write a function `is_prime(n)` that checks if a positive integer `n` is a prime number. Return 'YES' or 'NO'.",
      "examples": "Input: 7 -> Output: 'YES'\nInput: 10 -> Output: 'NO'",
      "hint": "A prime number is only divisible by 1 and itself. Check divisors up to the square root of n.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        },
        {
          "input": "13",
          "expected": "YES"
        }
      ],
      "starterCode": {
        "python": "def is_prime(n):\n    # Return 'YES' or 'NO'\n    pass",
        "java": "class Solution {\n    public static String isPrime(int n) {\n        // Return 'YES' or 'NO'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid isPrime(int n) {\n    // Print 'YES' or 'NO'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPrime(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPrime(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Money Phase 8",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Money Heist] Encrypted sonic waves pulse through the network. Count the resonant frequencies (vowels) to isolate the noise.",
      "task": "Write a function `count_vowels(s)` that returns the total number of vowels (a, e, i, o, u) in a given string `s` (case-insensitive).",
      "examples": "Input: 'Algorithm' -> Output: '3'",
      "hint": "Convert the string to lowercase first, then count occurrences of a, e, i, o, u.",
      "testCases": [
        {
          "input": "\"Algorithm\"",
          "expected": "3"
        },
        {
          "input": "\"THE MATRIX\"",
          "expected": "3"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(s):\n    # Return integer count\n    pass",
        "java": "class Solution {\n    public static int countVowels(String s) {\n        // Return integer count\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid countVowels(char* s) {\n    // Print the count\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.countVowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    countVowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Money Phase 9",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Money Heist] The exponential growth of the payload is expanding. Calculate its full factorial matrix size to contain it.",
      "task": "Write a function `factorial(n)` that returns the factorial computation of `n` (n!).",
      "examples": "Input: 5 -> Output: '120'",
      "hint": "Multiply numbers from 1 to n. Or use recursion.",
      "testCases": [
        {
          "input": "5",
          "expected": "120"
        },
        {
          "input": "4",
          "expected": "24"
        }
      ],
      "starterCode": {
        "python": "def factorial(n):\n    # Return n!\n    pass",
        "java": "class Solution {\n    public static int factorial(int n) {\n        // Return n!\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid factorial(int n) {\n    // Print the factorial\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Money Phase 10",
      "difficulty": "Expert",
      "timeLimit": 600,
      "story": "[Money Heist] The system is overloading! Find the absolute peak maximum within the data influx string to shut down the faulty node.",
      "task": "Write a function `find_max(arr)` where `arr` is a comma-separated string of integers. Return the maximum integer found.",
      "examples": "Input: '3,1,9,4' -> Output: '9'",
      "hint": "Split the array, convert items to integers, and track the largest value.",
      "testCases": [
        {
          "input": "\"3,1,9,4\"",
          "expected": "9"
        },
        {
          "input": "\"-5,-2,-10\"",
          "expected": "-2"
        }
      ],
      "starterCode": {
        "python": "def find_max(arr_str):\n    # Return maximum integer\n    pass",
        "java": "class Solution {\n    public static int findMax(String arrStr) {\n        // Return maximum integer\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid findMax(char* arrStr) {\n    // Print max integer\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.findMax(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    findMax(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "8": [
    {
      "level": 1,
      "title": "Level 1: Wizarding Phase 1",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Wizarding Academy] You are blocked by a secure firewall grid. Validate the access codes before they trace your signal!",
      "task": "Write a function `validate(n)` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      "examples": "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      "hint": "Use the modulo operator (%) to check if a number is even.",
      "testCases": [
        {
          "input": "4",
          "expected": "ACCESS"
        },
        {
          "input": "5",
          "expected": "DENIED"
        },
        {
          "input": "12",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(n):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Wizarding Phase 2",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Wizarding Academy] The data string is heavily scrambled into a mirror signature. Reverse it to expose the true payload.",
      "task": "Write a function `reverse_string(s)` that takes a string `s` and returns it reversed.",
      "examples": "Input: 'hacker' -> Output: 'rekcah'",
      "hint": "Strings can be sliced backward in Python, or loop backwards through characters.",
      "testCases": [
        {
          "input": "\"hacker\"",
          "expected": "rekcah"
        },
        {
          "input": "\"data\"",
          "expected": "atad"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(s):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverseString(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Wizarding Phase 3",
      "difficulty": "Easy-Medium",
      "timeLimit": 900,
      "story": "[Wizarding Academy] The core requires a cyclic 3-5 sub-protocol heartbeat. Setup the sequential ping/pong to keep the system active.",
      "task": "Given an integer `n`, output numbers from 1 to `n` joined by a space. Replace multiples of 3 with 'Ping', multiples of 5 with 'Pong', and multiples of both with 'PingPong'.",
      "examples": "Input: 5 -> Output: '1 2 Ping 4 Pong'",
      "hint": "Check for modulo 15 first.",
      "testCases": [
        {
          "input": "5",
          "expected": "1 2 Ping 4 Pong"
        },
        {
          "input": "15",
          "expected": "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"
        }
      ],
      "starterCode": {
        "python": "def protocol(n):\n    # Return a space separated string\n    pass",
        "java": "class Solution {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Wizarding Phase 4",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Wizarding Academy] An ancient symmetrical lock is in place. Verify that the bypass string looks identical visually from both ends.",
      "task": "Write a function `is_palindrome(s)` that checks if the string `s` reads the same forwards and backwards. Return 'TRUE' or 'FALSE'.",
      "examples": "Input: 'racecar' -> Output: 'TRUE'\nInput: 'hello' -> Output: 'FALSE'",
      "hint": "Compare the string to its reversed version.",
      "testCases": [
        {
          "input": "\"racecar\"",
          "expected": "TRUE"
        },
        {
          "input": "\"system\"",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(s):\n    # Return 'TRUE' or 'FALSE'\n    pass",
        "java": "class Solution {\n    public static String isPalindrome(String s) {\n        // Return 'TRUE' or 'FALSE'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid isPalindrome(char* s) {\n    // Print 'TRUE' or 'FALSE'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPalindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPalindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Wizarding Phase 5",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Wizarding Academy] A stream of fragmented energy packets are flooding in. Sum them up to bypass the surge protector.",
      "task": "Write a function `sum_array(arr)` where `arr` is a comma-separated string of integers. Return the total sum as an integer.",
      "examples": "Input: '1,2,3' -> Output: '6'",
      "hint": "Split the string by commas and parse each segment as an integer before summing.",
      "testCases": [
        {
          "input": "\"1,2,3\"",
          "expected": "6"
        },
        {
          "input": "\"10,-2,5\"",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arr_str):\n    # Return integer sum\n    pass",
        "java": "class Solution {\n    public static int sumArray(String arrStr) {\n        // Return integer sum\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid sumArray(char* arrStr) {\n    // Print the sum\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sumArray(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sumArray(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Wizarding Phase 6",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Wizarding Academy] The internal gear mechanism spins at a harmonic spiral rate. Predict the Nth gear velocity to synchronize!",
      "task": "Write a function `fibonacci(n)` that returns the n-th number in the Fibonacci sequence (where fib(1)=0, fib(2)=1).",
      "examples": "Input: 5 -> Output: '3'",
      "hint": "Use iteration or recursion to calculate the sum of the previous two numbers.",
      "testCases": [
        {
          "input": "5",
          "expected": "3"
        },
        {
          "input": "8",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def fibonacci(n):\n    # Return the n-th Fibonacci number\n    pass",
        "java": "class Solution {\n    public static int fibonacci(int n) {\n        // Return the n-th Fibonacci number\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid fibonacci(int n) {\n    // Print the result\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Wizarding Phase 7",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Wizarding Academy] The admin key is a singular indivisible factor. Determine if the captured block signature is purely prime to gain root.",
      "task": "Write a function `is_prime(n)` that checks if a positive integer `n` is a prime number. Return 'YES' or 'NO'.",
      "examples": "Input: 7 -> Output: 'YES'\nInput: 10 -> Output: 'NO'",
      "hint": "A prime number is only divisible by 1 and itself. Check divisors up to the square root of n.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        },
        {
          "input": "13",
          "expected": "YES"
        }
      ],
      "starterCode": {
        "python": "def is_prime(n):\n    # Return 'YES' or 'NO'\n    pass",
        "java": "class Solution {\n    public static String isPrime(int n) {\n        // Return 'YES' or 'NO'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid isPrime(int n) {\n    // Print 'YES' or 'NO'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPrime(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPrime(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Wizarding Phase 8",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Wizarding Academy] Encrypted sonic waves pulse through the network. Count the resonant frequencies (vowels) to isolate the noise.",
      "task": "Write a function `count_vowels(s)` that returns the total number of vowels (a, e, i, o, u) in a given string `s` (case-insensitive).",
      "examples": "Input: 'Algorithm' -> Output: '3'",
      "hint": "Convert the string to lowercase first, then count occurrences of a, e, i, o, u.",
      "testCases": [
        {
          "input": "\"Algorithm\"",
          "expected": "3"
        },
        {
          "input": "\"THE MATRIX\"",
          "expected": "3"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(s):\n    # Return integer count\n    pass",
        "java": "class Solution {\n    public static int countVowels(String s) {\n        // Return integer count\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid countVowels(char* s) {\n    // Print the count\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.countVowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    countVowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Wizarding Phase 9",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Wizarding Academy] The exponential growth of the payload is expanding. Calculate its full factorial matrix size to contain it.",
      "task": "Write a function `factorial(n)` that returns the factorial computation of `n` (n!).",
      "examples": "Input: 5 -> Output: '120'",
      "hint": "Multiply numbers from 1 to n. Or use recursion.",
      "testCases": [
        {
          "input": "5",
          "expected": "120"
        },
        {
          "input": "4",
          "expected": "24"
        }
      ],
      "starterCode": {
        "python": "def factorial(n):\n    # Return n!\n    pass",
        "java": "class Solution {\n    public static int factorial(int n) {\n        // Return n!\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid factorial(int n) {\n    // Print the factorial\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Wizarding Phase 10",
      "difficulty": "Expert",
      "timeLimit": 600,
      "story": "[Wizarding Academy] The system is overloading! Find the absolute peak maximum within the data influx string to shut down the faulty node.",
      "task": "Write a function `find_max(arr)` where `arr` is a comma-separated string of integers. Return the maximum integer found.",
      "examples": "Input: '3,1,9,4' -> Output: '9'",
      "hint": "Split the array, convert items to integers, and track the largest value.",
      "testCases": [
        {
          "input": "\"3,1,9,4\"",
          "expected": "9"
        },
        {
          "input": "\"-5,-2,-10\"",
          "expected": "-2"
        }
      ],
      "starterCode": {
        "python": "def find_max(arr_str):\n    # Return maximum integer\n    pass",
        "java": "class Solution {\n    public static int findMax(String arrStr) {\n        // Return maximum integer\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid findMax(char* arrStr) {\n    // Print max integer\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.findMax(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    findMax(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "9": [
    {
      "level": 1,
      "title": "Level 1: The Phase 1",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[The Matrix] You are blocked by a secure firewall grid. Validate the access codes before they trace your signal!",
      "task": "Write a function `validate(n)` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      "examples": "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      "hint": "Use the modulo operator (%) to check if a number is even.",
      "testCases": [
        {
          "input": "4",
          "expected": "ACCESS"
        },
        {
          "input": "5",
          "expected": "DENIED"
        },
        {
          "input": "12",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(n):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: The Phase 2",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[The Matrix] The data string is heavily scrambled into a mirror signature. Reverse it to expose the true payload.",
      "task": "Write a function `reverse_string(s)` that takes a string `s` and returns it reversed.",
      "examples": "Input: 'hacker' -> Output: 'rekcah'",
      "hint": "Strings can be sliced backward in Python, or loop backwards through characters.",
      "testCases": [
        {
          "input": "\"hacker\"",
          "expected": "rekcah"
        },
        {
          "input": "\"data\"",
          "expected": "atad"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(s):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverseString(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: The Phase 3",
      "difficulty": "Easy-Medium",
      "timeLimit": 900,
      "story": "[The Matrix] The core requires a cyclic 3-5 sub-protocol heartbeat. Setup the sequential ping/pong to keep the system active.",
      "task": "Given an integer `n`, output numbers from 1 to `n` joined by a space. Replace multiples of 3 with 'Ping', multiples of 5 with 'Pong', and multiples of both with 'PingPong'.",
      "examples": "Input: 5 -> Output: '1 2 Ping 4 Pong'",
      "hint": "Check for modulo 15 first.",
      "testCases": [
        {
          "input": "5",
          "expected": "1 2 Ping 4 Pong"
        },
        {
          "input": "15",
          "expected": "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"
        }
      ],
      "starterCode": {
        "python": "def protocol(n):\n    # Return a space separated string\n    pass",
        "java": "class Solution {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: The Phase 4",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[The Matrix] An ancient symmetrical lock is in place. Verify that the bypass string looks identical visually from both ends.",
      "task": "Write a function `is_palindrome(s)` that checks if the string `s` reads the same forwards and backwards. Return 'TRUE' or 'FALSE'.",
      "examples": "Input: 'racecar' -> Output: 'TRUE'\nInput: 'hello' -> Output: 'FALSE'",
      "hint": "Compare the string to its reversed version.",
      "testCases": [
        {
          "input": "\"racecar\"",
          "expected": "TRUE"
        },
        {
          "input": "\"system\"",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(s):\n    # Return 'TRUE' or 'FALSE'\n    pass",
        "java": "class Solution {\n    public static String isPalindrome(String s) {\n        // Return 'TRUE' or 'FALSE'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid isPalindrome(char* s) {\n    // Print 'TRUE' or 'FALSE'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPalindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPalindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: The Phase 5",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[The Matrix] A stream of fragmented energy packets are flooding in. Sum them up to bypass the surge protector.",
      "task": "Write a function `sum_array(arr)` where `arr` is a comma-separated string of integers. Return the total sum as an integer.",
      "examples": "Input: '1,2,3' -> Output: '6'",
      "hint": "Split the string by commas and parse each segment as an integer before summing.",
      "testCases": [
        {
          "input": "\"1,2,3\"",
          "expected": "6"
        },
        {
          "input": "\"10,-2,5\"",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arr_str):\n    # Return integer sum\n    pass",
        "java": "class Solution {\n    public static int sumArray(String arrStr) {\n        // Return integer sum\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid sumArray(char* arrStr) {\n    // Print the sum\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sumArray(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sumArray(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: The Phase 6",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[The Matrix] The internal gear mechanism spins at a harmonic spiral rate. Predict the Nth gear velocity to synchronize!",
      "task": "Write a function `fibonacci(n)` that returns the n-th number in the Fibonacci sequence (where fib(1)=0, fib(2)=1).",
      "examples": "Input: 5 -> Output: '3'",
      "hint": "Use iteration or recursion to calculate the sum of the previous two numbers.",
      "testCases": [
        {
          "input": "5",
          "expected": "3"
        },
        {
          "input": "8",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def fibonacci(n):\n    # Return the n-th Fibonacci number\n    pass",
        "java": "class Solution {\n    public static int fibonacci(int n) {\n        // Return the n-th Fibonacci number\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid fibonacci(int n) {\n    // Print the result\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: The Phase 7",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[The Matrix] The admin key is a singular indivisible factor. Determine if the captured block signature is purely prime to gain root.",
      "task": "Write a function `is_prime(n)` that checks if a positive integer `n` is a prime number. Return 'YES' or 'NO'.",
      "examples": "Input: 7 -> Output: 'YES'\nInput: 10 -> Output: 'NO'",
      "hint": "A prime number is only divisible by 1 and itself. Check divisors up to the square root of n.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        },
        {
          "input": "13",
          "expected": "YES"
        }
      ],
      "starterCode": {
        "python": "def is_prime(n):\n    # Return 'YES' or 'NO'\n    pass",
        "java": "class Solution {\n    public static String isPrime(int n) {\n        // Return 'YES' or 'NO'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid isPrime(int n) {\n    // Print 'YES' or 'NO'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPrime(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPrime(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: The Phase 8",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[The Matrix] Encrypted sonic waves pulse through the network. Count the resonant frequencies (vowels) to isolate the noise.",
      "task": "Write a function `count_vowels(s)` that returns the total number of vowels (a, e, i, o, u) in a given string `s` (case-insensitive).",
      "examples": "Input: 'Algorithm' -> Output: '3'",
      "hint": "Convert the string to lowercase first, then count occurrences of a, e, i, o, u.",
      "testCases": [
        {
          "input": "\"Algorithm\"",
          "expected": "3"
        },
        {
          "input": "\"THE MATRIX\"",
          "expected": "3"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(s):\n    # Return integer count\n    pass",
        "java": "class Solution {\n    public static int countVowels(String s) {\n        // Return integer count\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid countVowels(char* s) {\n    // Print the count\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.countVowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    countVowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: The Phase 9",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[The Matrix] The exponential growth of the payload is expanding. Calculate its full factorial matrix size to contain it.",
      "task": "Write a function `factorial(n)` that returns the factorial computation of `n` (n!).",
      "examples": "Input: 5 -> Output: '120'",
      "hint": "Multiply numbers from 1 to n. Or use recursion.",
      "testCases": [
        {
          "input": "5",
          "expected": "120"
        },
        {
          "input": "4",
          "expected": "24"
        }
      ],
      "starterCode": {
        "python": "def factorial(n):\n    # Return n!\n    pass",
        "java": "class Solution {\n    public static int factorial(int n) {\n        // Return n!\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid factorial(int n) {\n    // Print the factorial\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: The Phase 10",
      "difficulty": "Expert",
      "timeLimit": 600,
      "story": "[The Matrix] The system is overloading! Find the absolute peak maximum within the data influx string to shut down the faulty node.",
      "task": "Write a function `find_max(arr)` where `arr` is a comma-separated string of integers. Return the maximum integer found.",
      "examples": "Input: '3,1,9,4' -> Output: '9'",
      "hint": "Split the array, convert items to integers, and track the largest value.",
      "testCases": [
        {
          "input": "\"3,1,9,4\"",
          "expected": "9"
        },
        {
          "input": "\"-5,-2,-10\"",
          "expected": "-2"
        }
      ],
      "starterCode": {
        "python": "def find_max(arr_str):\n    # Return maximum integer\n    pass",
        "java": "class Solution {\n    public static int findMax(String arrStr) {\n        // Return maximum integer\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid findMax(char* arrStr) {\n    // Print max integer\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.findMax(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    findMax(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "10": [
    {
      "level": 1,
      "title": "Level 1: Jurassic Phase 1",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Jurassic Escape] You are blocked by a secure firewall grid. Validate the access codes before they trace your signal!",
      "task": "Write a function `validate(n)` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      "examples": "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      "hint": "Use the modulo operator (%) to check if a number is even.",
      "testCases": [
        {
          "input": "4",
          "expected": "ACCESS"
        },
        {
          "input": "5",
          "expected": "DENIED"
        },
        {
          "input": "12",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(n):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Jurassic Phase 2",
      "difficulty": "Easy",
      "timeLimit": 1200,
      "story": "[Jurassic Escape] The data string is heavily scrambled into a mirror signature. Reverse it to expose the true payload.",
      "task": "Write a function `reverse_string(s)` that takes a string `s` and returns it reversed.",
      "examples": "Input: 'hacker' -> Output: 'rekcah'",
      "hint": "Strings can be sliced backward in Python, or loop backwards through characters.",
      "testCases": [
        {
          "input": "\"hacker\"",
          "expected": "rekcah"
        },
        {
          "input": "\"data\"",
          "expected": "atad"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(s):\n    # Write your code here\n    pass",
        "java": "class Solution {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverseString(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Jurassic Phase 3",
      "difficulty": "Easy-Medium",
      "timeLimit": 900,
      "story": "[Jurassic Escape] The core requires a cyclic 3-5 sub-protocol heartbeat. Setup the sequential ping/pong to keep the system active.",
      "task": "Given an integer `n`, output numbers from 1 to `n` joined by a space. Replace multiples of 3 with 'Ping', multiples of 5 with 'Pong', and multiples of both with 'PingPong'.",
      "examples": "Input: 5 -> Output: '1 2 Ping 4 Pong'",
      "hint": "Check for modulo 15 first.",
      "testCases": [
        {
          "input": "5",
          "expected": "1 2 Ping 4 Pong"
        },
        {
          "input": "15",
          "expected": "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"
        }
      ],
      "starterCode": {
        "python": "def protocol(n):\n    # Return a space separated string\n    pass",
        "java": "class Solution {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Jurassic Phase 4",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Jurassic Escape] An ancient symmetrical lock is in place. Verify that the bypass string looks identical visually from both ends.",
      "task": "Write a function `is_palindrome(s)` that checks if the string `s` reads the same forwards and backwards. Return 'TRUE' or 'FALSE'.",
      "examples": "Input: 'racecar' -> Output: 'TRUE'\nInput: 'hello' -> Output: 'FALSE'",
      "hint": "Compare the string to its reversed version.",
      "testCases": [
        {
          "input": "\"racecar\"",
          "expected": "TRUE"
        },
        {
          "input": "\"system\"",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(s):\n    # Return 'TRUE' or 'FALSE'\n    pass",
        "java": "class Solution {\n    public static String isPalindrome(String s) {\n        // Return 'TRUE' or 'FALSE'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid isPalindrome(char* s) {\n    // Print 'TRUE' or 'FALSE'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPalindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPalindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Jurassic Phase 5",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Jurassic Escape] A stream of fragmented energy packets are flooding in. Sum them up to bypass the surge protector.",
      "task": "Write a function `sum_array(arr)` where `arr` is a comma-separated string of integers. Return the total sum as an integer.",
      "examples": "Input: '1,2,3' -> Output: '6'",
      "hint": "Split the string by commas and parse each segment as an integer before summing.",
      "testCases": [
        {
          "input": "\"1,2,3\"",
          "expected": "6"
        },
        {
          "input": "\"10,-2,5\"",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arr_str):\n    # Return integer sum\n    pass",
        "java": "class Solution {\n    public static int sumArray(String arrStr) {\n        // Return integer sum\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid sumArray(char* arrStr) {\n    // Print the sum\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sumArray(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sumArray(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Jurassic Phase 6",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Jurassic Escape] The internal gear mechanism spins at a harmonic spiral rate. Predict the Nth gear velocity to synchronize!",
      "task": "Write a function `fibonacci(n)` that returns the n-th number in the Fibonacci sequence (where fib(1)=0, fib(2)=1).",
      "examples": "Input: 5 -> Output: '3'",
      "hint": "Use iteration or recursion to calculate the sum of the previous two numbers.",
      "testCases": [
        {
          "input": "5",
          "expected": "3"
        },
        {
          "input": "8",
          "expected": "13"
        }
      ],
      "starterCode": {
        "python": "def fibonacci(n):\n    # Return the n-th Fibonacci number\n    pass",
        "java": "class Solution {\n    public static int fibonacci(int n) {\n        // Return the n-th Fibonacci number\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid fibonacci(int n) {\n    // Print the result\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Jurassic Phase 7",
      "difficulty": "Medium-Hard",
      "timeLimit": 900,
      "story": "[Jurassic Escape] The admin key is a singular indivisible factor. Determine if the captured block signature is purely prime to gain root.",
      "task": "Write a function `is_prime(n)` that checks if a positive integer `n` is a prime number. Return 'YES' or 'NO'.",
      "examples": "Input: 7 -> Output: 'YES'\nInput: 10 -> Output: 'NO'",
      "hint": "A prime number is only divisible by 1 and itself. Check divisors up to the square root of n.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        },
        {
          "input": "13",
          "expected": "YES"
        }
      ],
      "starterCode": {
        "python": "def is_prime(n):\n    # Return 'YES' or 'NO'\n    pass",
        "java": "class Solution {\n    public static String isPrime(int n) {\n        // Return 'YES' or 'NO'\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid isPrime(int n) {\n    // Print 'YES' or 'NO'\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.isPrime(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    isPrime(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Jurassic Phase 8",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Jurassic Escape] Encrypted sonic waves pulse through the network. Count the resonant frequencies (vowels) to isolate the noise.",
      "task": "Write a function `count_vowels(s)` that returns the total number of vowels (a, e, i, o, u) in a given string `s` (case-insensitive).",
      "examples": "Input: 'Algorithm' -> Output: '3'",
      "hint": "Convert the string to lowercase first, then count occurrences of a, e, i, o, u.",
      "testCases": [
        {
          "input": "\"Algorithm\"",
          "expected": "3"
        },
        {
          "input": "\"THE MATRIX\"",
          "expected": "3"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(s):\n    # Return integer count\n    pass",
        "java": "class Solution {\n    public static int countVowels(String s) {\n        // Return integer count\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n\nvoid countVowels(char* s) {\n    // Print the count\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.countVowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    countVowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Jurassic Phase 9",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Jurassic Escape] The exponential growth of the payload is expanding. Calculate its full factorial matrix size to contain it.",
      "task": "Write a function `factorial(n)` that returns the factorial computation of `n` (n!).",
      "examples": "Input: 5 -> Output: '120'",
      "hint": "Multiply numbers from 1 to n. Or use recursion.",
      "testCases": [
        {
          "input": "5",
          "expected": "120"
        },
        {
          "input": "4",
          "expected": "24"
        }
      ],
      "starterCode": {
        "python": "def factorial(n):\n    # Return n!\n    pass",
        "java": "class Solution {\n    public static int factorial(int n) {\n        // Return n!\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid factorial(int n) {\n    // Print the factorial\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(int(sys.argv[1])))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(Integer.parseInt(args[0])));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(atoi(argv[1]));\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Jurassic Phase 10",
      "difficulty": "Expert",
      "timeLimit": 600,
      "story": "[Jurassic Escape] The system is overloading! Find the absolute peak maximum within the data influx string to shut down the faulty node.",
      "task": "Write a function `find_max(arr)` where `arr` is a comma-separated string of integers. Return the maximum integer found.",
      "examples": "Input: '3,1,9,4' -> Output: '9'",
      "hint": "Split the array, convert items to integers, and track the largest value.",
      "testCases": [
        {
          "input": "\"3,1,9,4\"",
          "expected": "9"
        },
        {
          "input": "\"-5,-2,-10\"",
          "expected": "-2"
        }
      ],
      "starterCode": {
        "python": "def find_max(arr_str):\n    # Return maximum integer\n    pass",
        "java": "class Solution {\n    public static int findMax(String arrStr) {\n        // Return maximum integer\n        return 0;\n    }\n}",
        "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid findMax(char* arrStr) {\n    // Print max integer\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.findMax(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    findMax(argv[1]);\n    return 0;\n}"
      }
    }
  ]
};
