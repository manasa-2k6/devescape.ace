export const getLevelData = (themeId, levelNum) => {
  return levels[themeId]?.[levelNum - 1] || null;
};

export const levels = {
  "1": [
    {
      "level": 1,
      "title": "Level 1: Cyber Even/Odd (ACCESS/DENIED)",
      "difficulty": "Easy",
      "timeLimit": 1140,
      "story": "[Cyber Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `validate` - Even/Odd (ACCESS/DENIED).",
      "examples": "Example: 4->ACCESS",
      "hint": "Read the test cases carefully.",
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
          "input": "0",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(arg):\n    # Even/Odd (ACCESS/DENIED)\n    pass",
        "java": "class Solution {\n    public static String validate(String arg) {\n        // Even/Odd (ACCESS/DENIED)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid validate(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Cyber Reverse string",
      "difficulty": "Easy",
      "timeLimit": 1080,
      "story": "[Cyber Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `reverse_string` - Reverse string.",
      "examples": "Example: abc->cba",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "abc",
          "expected": "cba"
        },
        {
          "input": "hacker",
          "expected": "rekcah"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(arg):\n    # Reverse string\n    pass",
        "java": "class Solution {\n    public static String reverse_string(String arg) {\n        // Reverse string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid reverse_string(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverse_string(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverse_string(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Cyber FizzBuzz",
      "difficulty": "Easy",
      "timeLimit": 1020,
      "story": "[Cyber Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `protocol` - FizzBuzz.",
      "examples": "Example: 5->1 2 Ping 4 Pong",
      "hint": "Read the test cases carefully.",
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
        "python": "def protocol(arg):\n    # FizzBuzz\n    pass",
        "java": "class Solution {\n    public static String protocol(String arg) {\n        // FizzBuzz\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid protocol(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Cyber Palindrome (TRUE/FALSE)",
      "difficulty": "Medium",
      "timeLimit": 960,
      "story": "[Cyber Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_palindrome` - Palindrome (TRUE/FALSE).",
      "examples": "Example: aba->TRUE",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "aba",
          "expected": "TRUE"
        },
        {
          "input": "abc",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(arg):\n    # Palindrome (TRUE/FALSE)\n    pass",
        "java": "class Solution {\n    public static String is_palindrome(String arg) {\n        // Palindrome (TRUE/FALSE)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_palindrome(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_palindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_palindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Cyber Sum comma int array",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Cyber Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `sum_array` - Sum comma int array.",
      "examples": "Example: 1,2->3",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,2",
          "expected": "3"
        },
        {
          "input": "5,-1,4",
          "expected": "8"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arg):\n    # Sum comma int array\n    pass",
        "java": "class Solution {\n    public static String sum_array(String arg) {\n        // Sum comma int array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid sum_array(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sum_array(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sum_array(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Cyber Count vowels",
      "difficulty": "Medium",
      "timeLimit": 840,
      "story": "[Cyber Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `count_vowels` - Count vowels.",
      "examples": "Example: apple->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "apple",
          "expected": "2"
        },
        {
          "input": "sky",
          "expected": "0"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(arg):\n    # Count vowels\n    pass",
        "java": "class Solution {\n    public static String count_vowels(String arg) {\n        // Count vowels\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid count_vowels(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.count_vowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    count_vowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Cyber Max in comma array",
      "difficulty": "Medium",
      "timeLimit": 780,
      "story": "[Cyber Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `find_max` - Max in comma array.",
      "examples": "Example: 1,9,4->9",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,9,4",
          "expected": "9"
        },
        {
          "input": "-1,-5",
          "expected": "-1"
        }
      ],
      "starterCode": {
        "python": "def find_max(arg):\n    # Max in comma array\n    pass",
        "java": "class Solution {\n    public static String find_max(String arg) {\n        // Max in comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid find_max(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.find_max(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    find_max(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Cyber Remove all spaces",
      "difficulty": "Hard",
      "timeLimit": 720,
      "story": "[Cyber Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `remove_spaces` - Remove all spaces.",
      "examples": "Example: a b c->abc",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "a b c",
          "expected": "abc"
        },
        {
          "input": " hello ",
          "expected": "hello"
        }
      ],
      "starterCode": {
        "python": "def remove_spaces(arg):\n    # Remove all spaces\n    pass",
        "java": "class Solution {\n    public static String remove_spaces(String arg) {\n        // Remove all spaces\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid remove_spaces(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(remove_spaces(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.remove_spaces(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    remove_spaces(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Cyber Convert to uppercase",
      "difficulty": "Hard",
      "timeLimit": 660,
      "story": "[Cyber Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `to_uppercase` - Convert to uppercase.",
      "examples": "Example: hi->HI",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hi",
          "expected": "HI"
        },
        {
          "input": "abC",
          "expected": "ABC"
        }
      ],
      "starterCode": {
        "python": "def to_uppercase(arg):\n    # Convert to uppercase\n    pass",
        "java": "class Solution {\n    public static String to_uppercase(String arg) {\n        // Convert to uppercase\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid to_uppercase(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(to_uppercase(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.to_uppercase(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    to_uppercase(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Cyber Length of string",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Cyber Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `string_length` - Length of string.",
      "examples": "Example: hi->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hi",
          "expected": "2"
        },
        {
          "input": "hello",
          "expected": "5"
        }
      ],
      "starterCode": {
        "python": "def string_length(arg):\n    # Length of string\n    pass",
        "java": "class Solution {\n    public static String string_length(String arg) {\n        // Length of string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid string_length(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(string_length(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.string_length(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    string_length(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "2": [
    {
      "level": 1,
      "title": "Level 1: Mad Return first char",
      "difficulty": "Easy",
      "timeLimit": 1140,
      "story": "[Mad Scientist's Lab] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `first_char` - Return first char.",
      "examples": "Example: cat->c",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "cat",
          "expected": "c"
        },
        {
          "input": "dog",
          "expected": "d"
        }
      ],
      "starterCode": {
        "python": "def first_char(arg):\n    # Return first char\n    pass",
        "java": "class Solution {\n    public static String first_char(String arg) {\n        // Return first char\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid first_char(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(first_char(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.first_char(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    first_char(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Mad Return last char",
      "difficulty": "Easy",
      "timeLimit": 1080,
      "story": "[Mad Scientist's Lab] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `last_char` - Return last char.",
      "examples": "Example: cat->t",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "cat",
          "expected": "t"
        },
        {
          "input": "dog",
          "expected": "g"
        }
      ],
      "starterCode": {
        "python": "def last_char(arg):\n    # Return last char\n    pass",
        "java": "class Solution {\n    public static String last_char(String arg) {\n        // Return last char\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid last_char(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(last_char(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.last_char(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    last_char(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Mad Nth Fibonacci",
      "difficulty": "Easy",
      "timeLimit": 1020,
      "story": "[Mad Scientist's Lab] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `fibonacci` - Nth Fibonacci.",
      "examples": "Example: 5->3",
      "hint": "Read the test cases carefully.",
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
        "python": "def fibonacci(arg):\n    # Nth Fibonacci\n    pass",
        "java": "class Solution {\n    public static String fibonacci(String arg) {\n        // Nth Fibonacci\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid fibonacci(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Mad Prime (YES/NO)",
      "difficulty": "Medium",
      "timeLimit": 960,
      "story": "[Mad Scientist's Lab] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_prime` - Prime (YES/NO).",
      "examples": "Example: 7->YES",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        }
      ],
      "starterCode": {
        "python": "def is_prime(arg):\n    # Prime (YES/NO)\n    pass",
        "java": "class Solution {\n    public static String is_prime(String arg) {\n        // Prime (YES/NO)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_prime(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_prime(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_prime(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Mad Factorial",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Mad Scientist's Lab] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `factorial` - Factorial.",
      "examples": "Example: 5->120",
      "hint": "Read the test cases carefully.",
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
        "python": "def factorial(arg):\n    # Factorial\n    pass",
        "java": "class Solution {\n    public static String factorial(String arg) {\n        // Factorial\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid factorial(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Mad Count consonants",
      "difficulty": "Medium",
      "timeLimit": 840,
      "story": "[Mad Scientist's Lab] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `count_consonants` - Count consonants.",
      "examples": "Example: cat->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "cat",
          "expected": "2"
        },
        {
          "input": "e",
          "expected": "0"
        }
      ],
      "starterCode": {
        "python": "def count_consonants(arg):\n    # Count consonants\n    pass",
        "java": "class Solution {\n    public static String count_consonants(String arg) {\n        // Count consonants\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid count_consonants(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_consonants(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.count_consonants(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    count_consonants(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Mad Min in comma array",
      "difficulty": "Medium",
      "timeLimit": 780,
      "story": "[Mad Scientist's Lab] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `find_min` - Min in comma array.",
      "examples": "Example: 1,9,4->1",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,9,4",
          "expected": "1"
        },
        {
          "input": "-1,-5",
          "expected": "-5"
        }
      ],
      "starterCode": {
        "python": "def find_min(arg):\n    # Min in comma array\n    pass",
        "java": "class Solution {\n    public static String find_min(String arg) {\n        // Min in comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid find_min(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_min(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.find_min(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    find_min(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Mad Reverse words separated by space",
      "difficulty": "Hard",
      "timeLimit": 720,
      "story": "[Mad Scientist's Lab] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `reverse_words` - Reverse words separated by space.",
      "examples": "Example: hello world->world hello",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hello world",
          "expected": "world hello"
        },
        {
          "input": "a b",
          "expected": "b a"
        }
      ],
      "starterCode": {
        "python": "def reverse_words(arg):\n    # Reverse words separated by space\n    pass",
        "java": "class Solution {\n    public static String reverse_words(String arg) {\n        // Reverse words separated by space\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid reverse_words(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_words(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverse_words(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverse_words(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Mad Square the number",
      "difficulty": "Hard",
      "timeLimit": 660,
      "story": "[Mad Scientist's Lab] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `square_number` - Square the number.",
      "examples": "Example: 5->25",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "5",
          "expected": "25"
        },
        {
          "input": "-3",
          "expected": "9"
        }
      ],
      "starterCode": {
        "python": "def square_number(arg):\n    # Square the number\n    pass",
        "java": "class Solution {\n    public static String square_number(String arg) {\n        // Square the number\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid square_number(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(square_number(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.square_number(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    square_number(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Mad Cube the number",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Mad Scientist's Lab] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `cube_number` - Cube the number.",
      "examples": "Example: 3->27",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "3",
          "expected": "27"
        },
        {
          "input": "-2",
          "expected": "-8"
        }
      ],
      "starterCode": {
        "python": "def cube_number(arg):\n    # Cube the number\n    pass",
        "java": "class Solution {\n    public static String cube_number(String arg) {\n        // Cube the number\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid cube_number(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(cube_number(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.cube_number(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    cube_number(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "3": [
    {
      "level": 1,
      "title": "Level 1: Ancient Sum of digits",
      "difficulty": "Easy",
      "timeLimit": 1140,
      "story": "[Ancient Algorithm Temple] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `sum_digits` - Sum of digits.",
      "examples": "Example: 123->6",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "123",
          "expected": "6"
        },
        {
          "input": "901",
          "expected": "10"
        }
      ],
      "starterCode": {
        "python": "def sum_digits(arg):\n    # Sum of digits\n    pass",
        "java": "class Solution {\n    public static String sum_digits(String arg) {\n        // Sum of digits\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid sum_digits(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_digits(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sum_digits(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sum_digits(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Ancient Anagrams separated by comma (TRUE/FALSE)",
      "difficulty": "Easy",
      "timeLimit": 1080,
      "story": "[Ancient Algorithm Temple] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_anagram` - Anagrams separated by comma (TRUE/FALSE).",
      "examples": "Example: listen,silent->TRUE",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "listen,silent",
          "expected": "TRUE"
        },
        {
          "input": "cat,dog",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_anagram(arg):\n    # Anagrams separated by comma (TRUE/FALSE)\n    pass",
        "java": "class Solution {\n    public static String is_anagram(String arg) {\n        // Anagrams separated by comma (TRUE/FALSE)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_anagram(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_anagram(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_anagram(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_anagram(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Ancient Missing num in 1..N comma array",
      "difficulty": "Easy",
      "timeLimit": 1020,
      "story": "[Ancient Algorithm Temple] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `missing_number` - Missing num in 1..N comma array.",
      "examples": "Example: 1,2,4->3",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,2,4",
          "expected": "3"
        },
        {
          "input": "1,3,4,5",
          "expected": "2"
        }
      ],
      "starterCode": {
        "python": "def missing_number(arg):\n    # Missing num in 1..N comma array\n    pass",
        "java": "class Solution {\n    public static String missing_number(String arg) {\n        // Missing num in 1..N comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid missing_number(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(missing_number(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.missing_number(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    missing_number(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Ancient Longest word in space-separated string",
      "difficulty": "Medium",
      "timeLimit": 960,
      "story": "[Ancient Algorithm Temple] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `longest_word` - Longest word in space-separated string.",
      "examples": "Example: a bb ccc->ccc",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "a bb ccc",
          "expected": "ccc"
        },
        {
          "input": "hello hi",
          "expected": "hello"
        }
      ],
      "starterCode": {
        "python": "def longest_word(arg):\n    # Longest word in space-separated string\n    pass",
        "java": "class Solution {\n    public static String longest_word(String arg) {\n        // Longest word in space-separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid longest_word(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(longest_word(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.longest_word(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    longest_word(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Ancient Remove duplicate chars",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Ancient Algorithm Temple] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `remove_duplicates` - Remove duplicate chars.",
      "examples": "Example: apple->aple",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "apple",
          "expected": "aple"
        },
        {
          "input": "aabbcc",
          "expected": "abc"
        }
      ],
      "starterCode": {
        "python": "def remove_duplicates(arg):\n    # Remove duplicate chars\n    pass",
        "java": "class Solution {\n    public static String remove_duplicates(String arg) {\n        // Remove duplicate chars\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid remove_duplicates(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(remove_duplicates(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.remove_duplicates(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    remove_duplicates(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Ancient Count specific char (string,char)",
      "difficulty": "Medium",
      "timeLimit": 840,
      "story": "[Ancient Algorithm Temple] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `count_char` - Count specific char (string,char).",
      "examples": "Example: aba,a->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "aba,a",
          "expected": "2"
        },
        {
          "input": "cat,z",
          "expected": "0"
        }
      ],
      "starterCode": {
        "python": "def count_char(arg):\n    # Count specific char (string,char)\n    pass",
        "java": "class Solution {\n    public static String count_char(String arg) {\n        // Count specific char (string,char)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid count_char(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_char(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.count_char(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    count_char(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Ancient Is power of 2 (TRUE/FALSE)",
      "difficulty": "Medium",
      "timeLimit": 780,
      "story": "[Ancient Algorithm Temple] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_power_of_two` - Is power of 2 (TRUE/FALSE).",
      "examples": "Example: 8->TRUE",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "8",
          "expected": "TRUE"
        },
        {
          "input": "10",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_power_of_two(arg):\n    # Is power of 2 (TRUE/FALSE)\n    pass",
        "java": "class Solution {\n    public static String is_power_of_two(String arg) {\n        // Is power of 2 (TRUE/FALSE)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_power_of_two(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_power_of_two(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_power_of_two(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_power_of_two(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Ancient Repeat string N times (string,n)",
      "difficulty": "Hard",
      "timeLimit": 720,
      "story": "[Ancient Algorithm Temple] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `repeat_string` - Repeat string N times (string,n).",
      "examples": "Example: a,3->aaa",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "a,3",
          "expected": "aaa"
        },
        {
          "input": "hi,2",
          "expected": "hihi"
        }
      ],
      "starterCode": {
        "python": "def repeat_string(arg):\n    # Repeat string N times (string,n)\n    pass",
        "java": "class Solution {\n    public static String repeat_string(String arg) {\n        // Repeat string N times (string,n)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid repeat_string(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(repeat_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.repeat_string(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    repeat_string(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Ancient Count words separated by space",
      "difficulty": "Hard",
      "timeLimit": 660,
      "story": "[Ancient Algorithm Temple] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `word_count` - Count words separated by space.",
      "examples": "Example: hello world->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hello world",
          "expected": "2"
        },
        {
          "input": "one",
          "expected": "1"
        }
      ],
      "starterCode": {
        "python": "def word_count(arg):\n    # Count words separated by space\n    pass",
        "java": "class Solution {\n    public static String word_count(String arg) {\n        // Count words separated by space\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid word_count(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(word_count(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.word_count(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    word_count(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Ancient Sort comma array",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Ancient Algorithm Temple] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `sort_array` - Sort comma array.",
      "examples": "Example: 3,1,2->1,2,3",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "3,1,2",
          "expected": "1,2,3"
        },
        {
          "input": "9,4",
          "expected": "4,9"
        }
      ],
      "starterCode": {
        "python": "def sort_array(arg):\n    # Sort comma array\n    pass",
        "java": "class Solution {\n    public static String sort_array(String arg) {\n        // Sort comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid sort_array(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sort_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sort_array(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sort_array(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "4": [
    {
      "level": 1,
      "title": "Level 1: Space Even/Odd (ACCESS/DENIED)",
      "difficulty": "Easy",
      "timeLimit": 1140,
      "story": "[Space Station Meltdown] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `validate` - Even/Odd (ACCESS/DENIED).",
      "examples": "Example: 4->ACCESS",
      "hint": "Read the test cases carefully.",
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
          "input": "0",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(arg):\n    # Even/Odd (ACCESS/DENIED)\n    pass",
        "java": "class Solution {\n    public static String validate(String arg) {\n        // Even/Odd (ACCESS/DENIED)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid validate(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Space Reverse string",
      "difficulty": "Easy",
      "timeLimit": 1080,
      "story": "[Space Station Meltdown] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `reverse_string` - Reverse string.",
      "examples": "Example: abc->cba",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "abc",
          "expected": "cba"
        },
        {
          "input": "hacker",
          "expected": "rekcah"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(arg):\n    # Reverse string\n    pass",
        "java": "class Solution {\n    public static String reverse_string(String arg) {\n        // Reverse string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid reverse_string(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverse_string(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverse_string(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Space FizzBuzz",
      "difficulty": "Easy",
      "timeLimit": 1020,
      "story": "[Space Station Meltdown] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `protocol` - FizzBuzz.",
      "examples": "Example: 5->1 2 Ping 4 Pong",
      "hint": "Read the test cases carefully.",
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
        "python": "def protocol(arg):\n    # FizzBuzz\n    pass",
        "java": "class Solution {\n    public static String protocol(String arg) {\n        // FizzBuzz\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid protocol(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Space Palindrome (TRUE/FALSE)",
      "difficulty": "Medium",
      "timeLimit": 960,
      "story": "[Space Station Meltdown] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_palindrome` - Palindrome (TRUE/FALSE).",
      "examples": "Example: aba->TRUE",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "aba",
          "expected": "TRUE"
        },
        {
          "input": "abc",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(arg):\n    # Palindrome (TRUE/FALSE)\n    pass",
        "java": "class Solution {\n    public static String is_palindrome(String arg) {\n        // Palindrome (TRUE/FALSE)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_palindrome(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_palindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_palindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Space Sum comma int array",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Space Station Meltdown] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `sum_array` - Sum comma int array.",
      "examples": "Example: 1,2->3",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,2",
          "expected": "3"
        },
        {
          "input": "5,-1,4",
          "expected": "8"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arg):\n    # Sum comma int array\n    pass",
        "java": "class Solution {\n    public static String sum_array(String arg) {\n        // Sum comma int array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid sum_array(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sum_array(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sum_array(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Space Count vowels",
      "difficulty": "Medium",
      "timeLimit": 840,
      "story": "[Space Station Meltdown] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `count_vowels` - Count vowels.",
      "examples": "Example: apple->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "apple",
          "expected": "2"
        },
        {
          "input": "sky",
          "expected": "0"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(arg):\n    # Count vowels\n    pass",
        "java": "class Solution {\n    public static String count_vowels(String arg) {\n        // Count vowels\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid count_vowels(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.count_vowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    count_vowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Space Max in comma array",
      "difficulty": "Medium",
      "timeLimit": 780,
      "story": "[Space Station Meltdown] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `find_max` - Max in comma array.",
      "examples": "Example: 1,9,4->9",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,9,4",
          "expected": "9"
        },
        {
          "input": "-1,-5",
          "expected": "-1"
        }
      ],
      "starterCode": {
        "python": "def find_max(arg):\n    # Max in comma array\n    pass",
        "java": "class Solution {\n    public static String find_max(String arg) {\n        // Max in comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid find_max(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.find_max(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    find_max(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Space Remove all spaces",
      "difficulty": "Hard",
      "timeLimit": 720,
      "story": "[Space Station Meltdown] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `remove_spaces` - Remove all spaces.",
      "examples": "Example: a b c->abc",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "a b c",
          "expected": "abc"
        },
        {
          "input": " hello ",
          "expected": "hello"
        }
      ],
      "starterCode": {
        "python": "def remove_spaces(arg):\n    # Remove all spaces\n    pass",
        "java": "class Solution {\n    public static String remove_spaces(String arg) {\n        // Remove all spaces\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid remove_spaces(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(remove_spaces(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.remove_spaces(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    remove_spaces(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Space Convert to uppercase",
      "difficulty": "Hard",
      "timeLimit": 660,
      "story": "[Space Station Meltdown] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `to_uppercase` - Convert to uppercase.",
      "examples": "Example: hi->HI",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hi",
          "expected": "HI"
        },
        {
          "input": "abC",
          "expected": "ABC"
        }
      ],
      "starterCode": {
        "python": "def to_uppercase(arg):\n    # Convert to uppercase\n    pass",
        "java": "class Solution {\n    public static String to_uppercase(String arg) {\n        // Convert to uppercase\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid to_uppercase(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(to_uppercase(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.to_uppercase(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    to_uppercase(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Space Length of string",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Space Station Meltdown] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `string_length` - Length of string.",
      "examples": "Example: hi->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hi",
          "expected": "2"
        },
        {
          "input": "hello",
          "expected": "5"
        }
      ],
      "starterCode": {
        "python": "def string_length(arg):\n    # Length of string\n    pass",
        "java": "class Solution {\n    public static String string_length(String arg) {\n        // Length of string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid string_length(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(string_length(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.string_length(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    string_length(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "5": [
    {
      "level": 1,
      "title": "Level 1: Zombie Return first char",
      "difficulty": "Easy",
      "timeLimit": 1140,
      "story": "[Zombie Apocalypse] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `first_char` - Return first char.",
      "examples": "Example: cat->c",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "cat",
          "expected": "c"
        },
        {
          "input": "dog",
          "expected": "d"
        }
      ],
      "starterCode": {
        "python": "def first_char(arg):\n    # Return first char\n    pass",
        "java": "class Solution {\n    public static String first_char(String arg) {\n        // Return first char\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid first_char(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(first_char(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.first_char(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    first_char(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Zombie Return last char",
      "difficulty": "Easy",
      "timeLimit": 1080,
      "story": "[Zombie Apocalypse] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `last_char` - Return last char.",
      "examples": "Example: cat->t",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "cat",
          "expected": "t"
        },
        {
          "input": "dog",
          "expected": "g"
        }
      ],
      "starterCode": {
        "python": "def last_char(arg):\n    # Return last char\n    pass",
        "java": "class Solution {\n    public static String last_char(String arg) {\n        // Return last char\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid last_char(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(last_char(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.last_char(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    last_char(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Zombie Nth Fibonacci",
      "difficulty": "Easy",
      "timeLimit": 1020,
      "story": "[Zombie Apocalypse] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `fibonacci` - Nth Fibonacci.",
      "examples": "Example: 5->3",
      "hint": "Read the test cases carefully.",
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
        "python": "def fibonacci(arg):\n    # Nth Fibonacci\n    pass",
        "java": "class Solution {\n    public static String fibonacci(String arg) {\n        // Nth Fibonacci\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid fibonacci(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Zombie Prime (YES/NO)",
      "difficulty": "Medium",
      "timeLimit": 960,
      "story": "[Zombie Apocalypse] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_prime` - Prime (YES/NO).",
      "examples": "Example: 7->YES",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        }
      ],
      "starterCode": {
        "python": "def is_prime(arg):\n    # Prime (YES/NO)\n    pass",
        "java": "class Solution {\n    public static String is_prime(String arg) {\n        // Prime (YES/NO)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_prime(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_prime(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_prime(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Zombie Factorial",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Zombie Apocalypse] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `factorial` - Factorial.",
      "examples": "Example: 5->120",
      "hint": "Read the test cases carefully.",
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
        "python": "def factorial(arg):\n    # Factorial\n    pass",
        "java": "class Solution {\n    public static String factorial(String arg) {\n        // Factorial\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid factorial(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Zombie Count consonants",
      "difficulty": "Medium",
      "timeLimit": 840,
      "story": "[Zombie Apocalypse] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `count_consonants` - Count consonants.",
      "examples": "Example: cat->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "cat",
          "expected": "2"
        },
        {
          "input": "e",
          "expected": "0"
        }
      ],
      "starterCode": {
        "python": "def count_consonants(arg):\n    # Count consonants\n    pass",
        "java": "class Solution {\n    public static String count_consonants(String arg) {\n        // Count consonants\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid count_consonants(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_consonants(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.count_consonants(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    count_consonants(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Zombie Min in comma array",
      "difficulty": "Medium",
      "timeLimit": 780,
      "story": "[Zombie Apocalypse] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `find_min` - Min in comma array.",
      "examples": "Example: 1,9,4->1",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,9,4",
          "expected": "1"
        },
        {
          "input": "-1,-5",
          "expected": "-5"
        }
      ],
      "starterCode": {
        "python": "def find_min(arg):\n    # Min in comma array\n    pass",
        "java": "class Solution {\n    public static String find_min(String arg) {\n        // Min in comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid find_min(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_min(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.find_min(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    find_min(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Zombie Reverse words separated by space",
      "difficulty": "Hard",
      "timeLimit": 720,
      "story": "[Zombie Apocalypse] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `reverse_words` - Reverse words separated by space.",
      "examples": "Example: hello world->world hello",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hello world",
          "expected": "world hello"
        },
        {
          "input": "a b",
          "expected": "b a"
        }
      ],
      "starterCode": {
        "python": "def reverse_words(arg):\n    # Reverse words separated by space\n    pass",
        "java": "class Solution {\n    public static String reverse_words(String arg) {\n        // Reverse words separated by space\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid reverse_words(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_words(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverse_words(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverse_words(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Zombie Square the number",
      "difficulty": "Hard",
      "timeLimit": 660,
      "story": "[Zombie Apocalypse] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `square_number` - Square the number.",
      "examples": "Example: 5->25",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "5",
          "expected": "25"
        },
        {
          "input": "-3",
          "expected": "9"
        }
      ],
      "starterCode": {
        "python": "def square_number(arg):\n    # Square the number\n    pass",
        "java": "class Solution {\n    public static String square_number(String arg) {\n        // Square the number\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid square_number(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(square_number(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.square_number(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    square_number(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Zombie Cube the number",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Zombie Apocalypse] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `cube_number` - Cube the number.",
      "examples": "Example: 3->27",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "3",
          "expected": "27"
        },
        {
          "input": "-2",
          "expected": "-8"
        }
      ],
      "starterCode": {
        "python": "def cube_number(arg):\n    # Cube the number\n    pass",
        "java": "class Solution {\n    public static String cube_number(String arg) {\n        // Cube the number\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid cube_number(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(cube_number(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.cube_number(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    cube_number(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "6": [
    {
      "level": 1,
      "title": "Level 1: Stranger Sum of digits",
      "difficulty": "Easy",
      "timeLimit": 1140,
      "story": "[Stranger Things] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `sum_digits` - Sum of digits.",
      "examples": "Example: 123->6",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "123",
          "expected": "6"
        },
        {
          "input": "901",
          "expected": "10"
        }
      ],
      "starterCode": {
        "python": "def sum_digits(arg):\n    # Sum of digits\n    pass",
        "java": "class Solution {\n    public static String sum_digits(String arg) {\n        // Sum of digits\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid sum_digits(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_digits(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sum_digits(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sum_digits(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Stranger Anagrams separated by comma (TRUE/FALSE)",
      "difficulty": "Easy",
      "timeLimit": 1080,
      "story": "[Stranger Things] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_anagram` - Anagrams separated by comma (TRUE/FALSE).",
      "examples": "Example: listen,silent->TRUE",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "listen,silent",
          "expected": "TRUE"
        },
        {
          "input": "cat,dog",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_anagram(arg):\n    # Anagrams separated by comma (TRUE/FALSE)\n    pass",
        "java": "class Solution {\n    public static String is_anagram(String arg) {\n        // Anagrams separated by comma (TRUE/FALSE)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_anagram(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_anagram(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_anagram(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_anagram(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Stranger Missing num in 1..N comma array",
      "difficulty": "Easy",
      "timeLimit": 1020,
      "story": "[Stranger Things] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `missing_number` - Missing num in 1..N comma array.",
      "examples": "Example: 1,2,4->3",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,2,4",
          "expected": "3"
        },
        {
          "input": "1,3,4,5",
          "expected": "2"
        }
      ],
      "starterCode": {
        "python": "def missing_number(arg):\n    # Missing num in 1..N comma array\n    pass",
        "java": "class Solution {\n    public static String missing_number(String arg) {\n        // Missing num in 1..N comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid missing_number(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(missing_number(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.missing_number(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    missing_number(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Stranger Longest word in space-separated string",
      "difficulty": "Medium",
      "timeLimit": 960,
      "story": "[Stranger Things] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `longest_word` - Longest word in space-separated string.",
      "examples": "Example: a bb ccc->ccc",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "a bb ccc",
          "expected": "ccc"
        },
        {
          "input": "hello hi",
          "expected": "hello"
        }
      ],
      "starterCode": {
        "python": "def longest_word(arg):\n    # Longest word in space-separated string\n    pass",
        "java": "class Solution {\n    public static String longest_word(String arg) {\n        // Longest word in space-separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid longest_word(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(longest_word(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.longest_word(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    longest_word(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Stranger Remove duplicate chars",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Stranger Things] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `remove_duplicates` - Remove duplicate chars.",
      "examples": "Example: apple->aple",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "apple",
          "expected": "aple"
        },
        {
          "input": "aabbcc",
          "expected": "abc"
        }
      ],
      "starterCode": {
        "python": "def remove_duplicates(arg):\n    # Remove duplicate chars\n    pass",
        "java": "class Solution {\n    public static String remove_duplicates(String arg) {\n        // Remove duplicate chars\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid remove_duplicates(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(remove_duplicates(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.remove_duplicates(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    remove_duplicates(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Stranger Count specific char (string,char)",
      "difficulty": "Medium",
      "timeLimit": 840,
      "story": "[Stranger Things] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `count_char` - Count specific char (string,char).",
      "examples": "Example: aba,a->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "aba,a",
          "expected": "2"
        },
        {
          "input": "cat,z",
          "expected": "0"
        }
      ],
      "starterCode": {
        "python": "def count_char(arg):\n    # Count specific char (string,char)\n    pass",
        "java": "class Solution {\n    public static String count_char(String arg) {\n        // Count specific char (string,char)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid count_char(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_char(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.count_char(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    count_char(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Stranger Is power of 2 (TRUE/FALSE)",
      "difficulty": "Medium",
      "timeLimit": 780,
      "story": "[Stranger Things] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_power_of_two` - Is power of 2 (TRUE/FALSE).",
      "examples": "Example: 8->TRUE",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "8",
          "expected": "TRUE"
        },
        {
          "input": "10",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_power_of_two(arg):\n    # Is power of 2 (TRUE/FALSE)\n    pass",
        "java": "class Solution {\n    public static String is_power_of_two(String arg) {\n        // Is power of 2 (TRUE/FALSE)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_power_of_two(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_power_of_two(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_power_of_two(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_power_of_two(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Stranger Repeat string N times (string,n)",
      "difficulty": "Hard",
      "timeLimit": 720,
      "story": "[Stranger Things] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `repeat_string` - Repeat string N times (string,n).",
      "examples": "Example: a,3->aaa",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "a,3",
          "expected": "aaa"
        },
        {
          "input": "hi,2",
          "expected": "hihi"
        }
      ],
      "starterCode": {
        "python": "def repeat_string(arg):\n    # Repeat string N times (string,n)\n    pass",
        "java": "class Solution {\n    public static String repeat_string(String arg) {\n        // Repeat string N times (string,n)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid repeat_string(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(repeat_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.repeat_string(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    repeat_string(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Stranger Count words separated by space",
      "difficulty": "Hard",
      "timeLimit": 660,
      "story": "[Stranger Things] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `word_count` - Count words separated by space.",
      "examples": "Example: hello world->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hello world",
          "expected": "2"
        },
        {
          "input": "one",
          "expected": "1"
        }
      ],
      "starterCode": {
        "python": "def word_count(arg):\n    # Count words separated by space\n    pass",
        "java": "class Solution {\n    public static String word_count(String arg) {\n        // Count words separated by space\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid word_count(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(word_count(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.word_count(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    word_count(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Stranger Sort comma array",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Stranger Things] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `sort_array` - Sort comma array.",
      "examples": "Example: 3,1,2->1,2,3",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "3,1,2",
          "expected": "1,2,3"
        },
        {
          "input": "9,4",
          "expected": "4,9"
        }
      ],
      "starterCode": {
        "python": "def sort_array(arg):\n    # Sort comma array\n    pass",
        "java": "class Solution {\n    public static String sort_array(String arg) {\n        // Sort comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid sort_array(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sort_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sort_array(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sort_array(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "7": [
    {
      "level": 1,
      "title": "Level 1: Money Even/Odd (ACCESS/DENIED)",
      "difficulty": "Easy",
      "timeLimit": 1140,
      "story": "[Money Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `validate` - Even/Odd (ACCESS/DENIED).",
      "examples": "Example: 4->ACCESS",
      "hint": "Read the test cases carefully.",
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
          "input": "0",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(arg):\n    # Even/Odd (ACCESS/DENIED)\n    pass",
        "java": "class Solution {\n    public static String validate(String arg) {\n        // Even/Odd (ACCESS/DENIED)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid validate(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Money Reverse string",
      "difficulty": "Easy",
      "timeLimit": 1080,
      "story": "[Money Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `reverse_string` - Reverse string.",
      "examples": "Example: abc->cba",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "abc",
          "expected": "cba"
        },
        {
          "input": "hacker",
          "expected": "rekcah"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(arg):\n    # Reverse string\n    pass",
        "java": "class Solution {\n    public static String reverse_string(String arg) {\n        // Reverse string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid reverse_string(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverse_string(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverse_string(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Money FizzBuzz",
      "difficulty": "Easy",
      "timeLimit": 1020,
      "story": "[Money Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `protocol` - FizzBuzz.",
      "examples": "Example: 5->1 2 Ping 4 Pong",
      "hint": "Read the test cases carefully.",
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
        "python": "def protocol(arg):\n    # FizzBuzz\n    pass",
        "java": "class Solution {\n    public static String protocol(String arg) {\n        // FizzBuzz\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid protocol(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Money Palindrome (TRUE/FALSE)",
      "difficulty": "Medium",
      "timeLimit": 960,
      "story": "[Money Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_palindrome` - Palindrome (TRUE/FALSE).",
      "examples": "Example: aba->TRUE",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "aba",
          "expected": "TRUE"
        },
        {
          "input": "abc",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(arg):\n    # Palindrome (TRUE/FALSE)\n    pass",
        "java": "class Solution {\n    public static String is_palindrome(String arg) {\n        // Palindrome (TRUE/FALSE)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_palindrome(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_palindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_palindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Money Sum comma int array",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Money Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `sum_array` - Sum comma int array.",
      "examples": "Example: 1,2->3",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,2",
          "expected": "3"
        },
        {
          "input": "5,-1,4",
          "expected": "8"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arg):\n    # Sum comma int array\n    pass",
        "java": "class Solution {\n    public static String sum_array(String arg) {\n        // Sum comma int array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid sum_array(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sum_array(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sum_array(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Money Count vowels",
      "difficulty": "Medium",
      "timeLimit": 840,
      "story": "[Money Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `count_vowels` - Count vowels.",
      "examples": "Example: apple->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "apple",
          "expected": "2"
        },
        {
          "input": "sky",
          "expected": "0"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(arg):\n    # Count vowels\n    pass",
        "java": "class Solution {\n    public static String count_vowels(String arg) {\n        // Count vowels\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid count_vowels(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.count_vowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    count_vowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Money Max in comma array",
      "difficulty": "Medium",
      "timeLimit": 780,
      "story": "[Money Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `find_max` - Max in comma array.",
      "examples": "Example: 1,9,4->9",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,9,4",
          "expected": "9"
        },
        {
          "input": "-1,-5",
          "expected": "-1"
        }
      ],
      "starterCode": {
        "python": "def find_max(arg):\n    # Max in comma array\n    pass",
        "java": "class Solution {\n    public static String find_max(String arg) {\n        // Max in comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid find_max(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.find_max(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    find_max(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Money Remove all spaces",
      "difficulty": "Hard",
      "timeLimit": 720,
      "story": "[Money Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `remove_spaces` - Remove all spaces.",
      "examples": "Example: a b c->abc",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "a b c",
          "expected": "abc"
        },
        {
          "input": " hello ",
          "expected": "hello"
        }
      ],
      "starterCode": {
        "python": "def remove_spaces(arg):\n    # Remove all spaces\n    pass",
        "java": "class Solution {\n    public static String remove_spaces(String arg) {\n        // Remove all spaces\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid remove_spaces(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(remove_spaces(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.remove_spaces(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    remove_spaces(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Money Convert to uppercase",
      "difficulty": "Hard",
      "timeLimit": 660,
      "story": "[Money Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `to_uppercase` - Convert to uppercase.",
      "examples": "Example: hi->HI",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hi",
          "expected": "HI"
        },
        {
          "input": "abC",
          "expected": "ABC"
        }
      ],
      "starterCode": {
        "python": "def to_uppercase(arg):\n    # Convert to uppercase\n    pass",
        "java": "class Solution {\n    public static String to_uppercase(String arg) {\n        // Convert to uppercase\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid to_uppercase(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(to_uppercase(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.to_uppercase(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    to_uppercase(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Money Length of string",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Money Heist] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `string_length` - Length of string.",
      "examples": "Example: hi->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hi",
          "expected": "2"
        },
        {
          "input": "hello",
          "expected": "5"
        }
      ],
      "starterCode": {
        "python": "def string_length(arg):\n    # Length of string\n    pass",
        "java": "class Solution {\n    public static String string_length(String arg) {\n        // Length of string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid string_length(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(string_length(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.string_length(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    string_length(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "8": [
    {
      "level": 1,
      "title": "Level 1: Wizarding Return first char",
      "difficulty": "Easy",
      "timeLimit": 1140,
      "story": "[Wizarding Academy] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `first_char` - Return first char.",
      "examples": "Example: cat->c",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "cat",
          "expected": "c"
        },
        {
          "input": "dog",
          "expected": "d"
        }
      ],
      "starterCode": {
        "python": "def first_char(arg):\n    # Return first char\n    pass",
        "java": "class Solution {\n    public static String first_char(String arg) {\n        // Return first char\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid first_char(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(first_char(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.first_char(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    first_char(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Wizarding Return last char",
      "difficulty": "Easy",
      "timeLimit": 1080,
      "story": "[Wizarding Academy] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `last_char` - Return last char.",
      "examples": "Example: cat->t",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "cat",
          "expected": "t"
        },
        {
          "input": "dog",
          "expected": "g"
        }
      ],
      "starterCode": {
        "python": "def last_char(arg):\n    # Return last char\n    pass",
        "java": "class Solution {\n    public static String last_char(String arg) {\n        // Return last char\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid last_char(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(last_char(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.last_char(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    last_char(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Wizarding Nth Fibonacci",
      "difficulty": "Easy",
      "timeLimit": 1020,
      "story": "[Wizarding Academy] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `fibonacci` - Nth Fibonacci.",
      "examples": "Example: 5->3",
      "hint": "Read the test cases carefully.",
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
        "python": "def fibonacci(arg):\n    # Nth Fibonacci\n    pass",
        "java": "class Solution {\n    public static String fibonacci(String arg) {\n        // Nth Fibonacci\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid fibonacci(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(fibonacci(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.fibonacci(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    fibonacci(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Wizarding Prime (YES/NO)",
      "difficulty": "Medium",
      "timeLimit": 960,
      "story": "[Wizarding Academy] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_prime` - Prime (YES/NO).",
      "examples": "Example: 7->YES",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "7",
          "expected": "YES"
        },
        {
          "input": "10",
          "expected": "NO"
        }
      ],
      "starterCode": {
        "python": "def is_prime(arg):\n    # Prime (YES/NO)\n    pass",
        "java": "class Solution {\n    public static String is_prime(String arg) {\n        // Prime (YES/NO)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_prime(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_prime(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_prime(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_prime(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Wizarding Factorial",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Wizarding Academy] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `factorial` - Factorial.",
      "examples": "Example: 5->120",
      "hint": "Read the test cases carefully.",
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
        "python": "def factorial(arg):\n    # Factorial\n    pass",
        "java": "class Solution {\n    public static String factorial(String arg) {\n        // Factorial\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid factorial(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(factorial(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.factorial(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    factorial(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Wizarding Count consonants",
      "difficulty": "Medium",
      "timeLimit": 840,
      "story": "[Wizarding Academy] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `count_consonants` - Count consonants.",
      "examples": "Example: cat->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "cat",
          "expected": "2"
        },
        {
          "input": "e",
          "expected": "0"
        }
      ],
      "starterCode": {
        "python": "def count_consonants(arg):\n    # Count consonants\n    pass",
        "java": "class Solution {\n    public static String count_consonants(String arg) {\n        // Count consonants\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid count_consonants(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_consonants(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.count_consonants(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    count_consonants(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Wizarding Min in comma array",
      "difficulty": "Medium",
      "timeLimit": 780,
      "story": "[Wizarding Academy] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `find_min` - Min in comma array.",
      "examples": "Example: 1,9,4->1",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,9,4",
          "expected": "1"
        },
        {
          "input": "-1,-5",
          "expected": "-5"
        }
      ],
      "starterCode": {
        "python": "def find_min(arg):\n    # Min in comma array\n    pass",
        "java": "class Solution {\n    public static String find_min(String arg) {\n        // Min in comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid find_min(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_min(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.find_min(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    find_min(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Wizarding Reverse words separated by space",
      "difficulty": "Hard",
      "timeLimit": 720,
      "story": "[Wizarding Academy] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `reverse_words` - Reverse words separated by space.",
      "examples": "Example: hello world->world hello",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hello world",
          "expected": "world hello"
        },
        {
          "input": "a b",
          "expected": "b a"
        }
      ],
      "starterCode": {
        "python": "def reverse_words(arg):\n    # Reverse words separated by space\n    pass",
        "java": "class Solution {\n    public static String reverse_words(String arg) {\n        // Reverse words separated by space\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid reverse_words(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_words(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverse_words(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverse_words(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Wizarding Square the number",
      "difficulty": "Hard",
      "timeLimit": 660,
      "story": "[Wizarding Academy] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `square_number` - Square the number.",
      "examples": "Example: 5->25",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "5",
          "expected": "25"
        },
        {
          "input": "-3",
          "expected": "9"
        }
      ],
      "starterCode": {
        "python": "def square_number(arg):\n    # Square the number\n    pass",
        "java": "class Solution {\n    public static String square_number(String arg) {\n        // Square the number\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid square_number(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(square_number(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.square_number(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    square_number(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Wizarding Cube the number",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Wizarding Academy] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `cube_number` - Cube the number.",
      "examples": "Example: 3->27",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "3",
          "expected": "27"
        },
        {
          "input": "-2",
          "expected": "-8"
        }
      ],
      "starterCode": {
        "python": "def cube_number(arg):\n    # Cube the number\n    pass",
        "java": "class Solution {\n    public static String cube_number(String arg) {\n        // Cube the number\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid cube_number(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(cube_number(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.cube_number(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    cube_number(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "9": [
    {
      "level": 1,
      "title": "Level 1: The Sum of digits",
      "difficulty": "Easy",
      "timeLimit": 1140,
      "story": "[The Matrix] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `sum_digits` - Sum of digits.",
      "examples": "Example: 123->6",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "123",
          "expected": "6"
        },
        {
          "input": "901",
          "expected": "10"
        }
      ],
      "starterCode": {
        "python": "def sum_digits(arg):\n    # Sum of digits\n    pass",
        "java": "class Solution {\n    public static String sum_digits(String arg) {\n        // Sum of digits\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid sum_digits(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_digits(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sum_digits(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sum_digits(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: The Anagrams separated by comma (TRUE/FALSE)",
      "difficulty": "Easy",
      "timeLimit": 1080,
      "story": "[The Matrix] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_anagram` - Anagrams separated by comma (TRUE/FALSE).",
      "examples": "Example: listen,silent->TRUE",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "listen,silent",
          "expected": "TRUE"
        },
        {
          "input": "cat,dog",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_anagram(arg):\n    # Anagrams separated by comma (TRUE/FALSE)\n    pass",
        "java": "class Solution {\n    public static String is_anagram(String arg) {\n        // Anagrams separated by comma (TRUE/FALSE)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_anagram(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_anagram(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_anagram(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_anagram(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: The Missing num in 1..N comma array",
      "difficulty": "Easy",
      "timeLimit": 1020,
      "story": "[The Matrix] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `missing_number` - Missing num in 1..N comma array.",
      "examples": "Example: 1,2,4->3",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,2,4",
          "expected": "3"
        },
        {
          "input": "1,3,4,5",
          "expected": "2"
        }
      ],
      "starterCode": {
        "python": "def missing_number(arg):\n    # Missing num in 1..N comma array\n    pass",
        "java": "class Solution {\n    public static String missing_number(String arg) {\n        // Missing num in 1..N comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid missing_number(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(missing_number(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.missing_number(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    missing_number(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: The Longest word in space-separated string",
      "difficulty": "Medium",
      "timeLimit": 960,
      "story": "[The Matrix] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `longest_word` - Longest word in space-separated string.",
      "examples": "Example: a bb ccc->ccc",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "a bb ccc",
          "expected": "ccc"
        },
        {
          "input": "hello hi",
          "expected": "hello"
        }
      ],
      "starterCode": {
        "python": "def longest_word(arg):\n    # Longest word in space-separated string\n    pass",
        "java": "class Solution {\n    public static String longest_word(String arg) {\n        // Longest word in space-separated string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid longest_word(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(longest_word(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.longest_word(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    longest_word(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: The Remove duplicate chars",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[The Matrix] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `remove_duplicates` - Remove duplicate chars.",
      "examples": "Example: apple->aple",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "apple",
          "expected": "aple"
        },
        {
          "input": "aabbcc",
          "expected": "abc"
        }
      ],
      "starterCode": {
        "python": "def remove_duplicates(arg):\n    # Remove duplicate chars\n    pass",
        "java": "class Solution {\n    public static String remove_duplicates(String arg) {\n        // Remove duplicate chars\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid remove_duplicates(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(remove_duplicates(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.remove_duplicates(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    remove_duplicates(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: The Count specific char (string,char)",
      "difficulty": "Medium",
      "timeLimit": 840,
      "story": "[The Matrix] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `count_char` - Count specific char (string,char).",
      "examples": "Example: aba,a->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "aba,a",
          "expected": "2"
        },
        {
          "input": "cat,z",
          "expected": "0"
        }
      ],
      "starterCode": {
        "python": "def count_char(arg):\n    # Count specific char (string,char)\n    pass",
        "java": "class Solution {\n    public static String count_char(String arg) {\n        // Count specific char (string,char)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid count_char(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_char(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.count_char(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    count_char(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: The Is power of 2 (TRUE/FALSE)",
      "difficulty": "Medium",
      "timeLimit": 780,
      "story": "[The Matrix] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_power_of_two` - Is power of 2 (TRUE/FALSE).",
      "examples": "Example: 8->TRUE",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "8",
          "expected": "TRUE"
        },
        {
          "input": "10",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_power_of_two(arg):\n    # Is power of 2 (TRUE/FALSE)\n    pass",
        "java": "class Solution {\n    public static String is_power_of_two(String arg) {\n        // Is power of 2 (TRUE/FALSE)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_power_of_two(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_power_of_two(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_power_of_two(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_power_of_two(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: The Repeat string N times (string,n)",
      "difficulty": "Hard",
      "timeLimit": 720,
      "story": "[The Matrix] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `repeat_string` - Repeat string N times (string,n).",
      "examples": "Example: a,3->aaa",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "a,3",
          "expected": "aaa"
        },
        {
          "input": "hi,2",
          "expected": "hihi"
        }
      ],
      "starterCode": {
        "python": "def repeat_string(arg):\n    # Repeat string N times (string,n)\n    pass",
        "java": "class Solution {\n    public static String repeat_string(String arg) {\n        // Repeat string N times (string,n)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid repeat_string(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(repeat_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.repeat_string(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    repeat_string(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: The Count words separated by space",
      "difficulty": "Hard",
      "timeLimit": 660,
      "story": "[The Matrix] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `word_count` - Count words separated by space.",
      "examples": "Example: hello world->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hello world",
          "expected": "2"
        },
        {
          "input": "one",
          "expected": "1"
        }
      ],
      "starterCode": {
        "python": "def word_count(arg):\n    # Count words separated by space\n    pass",
        "java": "class Solution {\n    public static String word_count(String arg) {\n        // Count words separated by space\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid word_count(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(word_count(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.word_count(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    word_count(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: The Sort comma array",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[The Matrix] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `sort_array` - Sort comma array.",
      "examples": "Example: 3,1,2->1,2,3",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "3,1,2",
          "expected": "1,2,3"
        },
        {
          "input": "9,4",
          "expected": "4,9"
        }
      ],
      "starterCode": {
        "python": "def sort_array(arg):\n    # Sort comma array\n    pass",
        "java": "class Solution {\n    public static String sort_array(String arg) {\n        // Sort comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid sort_array(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sort_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sort_array(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sort_array(argv[1]);\n    return 0;\n}"
      }
    }
  ],
  "10": [
    {
      "level": 1,
      "title": "Level 1: Jurassic Even/Odd (ACCESS/DENIED)",
      "difficulty": "Easy",
      "timeLimit": 1140,
      "story": "[Jurassic Escape] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `validate` - Even/Odd (ACCESS/DENIED).",
      "examples": "Example: 4->ACCESS",
      "hint": "Read the test cases carefully.",
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
          "input": "0",
          "expected": "ACCESS"
        }
      ],
      "starterCode": {
        "python": "def validate(arg):\n    # Even/Odd (ACCESS/DENIED)\n    pass",
        "java": "class Solution {\n    public static String validate(String arg) {\n        // Even/Odd (ACCESS/DENIED)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid validate(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(validate(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.validate(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    validate(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 2,
      "title": "Level 2: Jurassic Reverse string",
      "difficulty": "Easy",
      "timeLimit": 1080,
      "story": "[Jurassic Escape] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `reverse_string` - Reverse string.",
      "examples": "Example: abc->cba",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "abc",
          "expected": "cba"
        },
        {
          "input": "hacker",
          "expected": "rekcah"
        }
      ],
      "starterCode": {
        "python": "def reverse_string(arg):\n    # Reverse string\n    pass",
        "java": "class Solution {\n    public static String reverse_string(String arg) {\n        // Reverse string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid reverse_string(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(reverse_string(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.reverse_string(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    reverse_string(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 3,
      "title": "Level 3: Jurassic FizzBuzz",
      "difficulty": "Easy",
      "timeLimit": 1020,
      "story": "[Jurassic Escape] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `protocol` - FizzBuzz.",
      "examples": "Example: 5->1 2 Ping 4 Pong",
      "hint": "Read the test cases carefully.",
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
        "python": "def protocol(arg):\n    # FizzBuzz\n    pass",
        "java": "class Solution {\n    public static String protocol(String arg) {\n        // FizzBuzz\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid protocol(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(protocol(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.protocol(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    protocol(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 4,
      "title": "Level 4: Jurassic Palindrome (TRUE/FALSE)",
      "difficulty": "Medium",
      "timeLimit": 960,
      "story": "[Jurassic Escape] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `is_palindrome` - Palindrome (TRUE/FALSE).",
      "examples": "Example: aba->TRUE",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "aba",
          "expected": "TRUE"
        },
        {
          "input": "abc",
          "expected": "FALSE"
        }
      ],
      "starterCode": {
        "python": "def is_palindrome(arg):\n    # Palindrome (TRUE/FALSE)\n    pass",
        "java": "class Solution {\n    public static String is_palindrome(String arg) {\n        // Palindrome (TRUE/FALSE)\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid is_palindrome(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(is_palindrome(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.is_palindrome(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    is_palindrome(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 5,
      "title": "Level 5: Jurassic Sum comma int array",
      "difficulty": "Medium",
      "timeLimit": 900,
      "story": "[Jurassic Escape] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `sum_array` - Sum comma int array.",
      "examples": "Example: 1,2->3",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,2",
          "expected": "3"
        },
        {
          "input": "5,-1,4",
          "expected": "8"
        }
      ],
      "starterCode": {
        "python": "def sum_array(arg):\n    # Sum comma int array\n    pass",
        "java": "class Solution {\n    public static String sum_array(String arg) {\n        // Sum comma int array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid sum_array(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(sum_array(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.sum_array(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    sum_array(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 6,
      "title": "Level 6: Jurassic Count vowels",
      "difficulty": "Medium",
      "timeLimit": 840,
      "story": "[Jurassic Escape] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `count_vowels` - Count vowels.",
      "examples": "Example: apple->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "apple",
          "expected": "2"
        },
        {
          "input": "sky",
          "expected": "0"
        }
      ],
      "starterCode": {
        "python": "def count_vowels(arg):\n    # Count vowels\n    pass",
        "java": "class Solution {\n    public static String count_vowels(String arg) {\n        // Count vowels\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid count_vowels(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(count_vowels(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.count_vowels(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    count_vowels(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 7,
      "title": "Level 7: Jurassic Max in comma array",
      "difficulty": "Medium",
      "timeLimit": 780,
      "story": "[Jurassic Escape] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `find_max` - Max in comma array.",
      "examples": "Example: 1,9,4->9",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "1,9,4",
          "expected": "9"
        },
        {
          "input": "-1,-5",
          "expected": "-1"
        }
      ],
      "starterCode": {
        "python": "def find_max(arg):\n    # Max in comma array\n    pass",
        "java": "class Solution {\n    public static String find_max(String arg) {\n        // Max in comma array\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid find_max(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(find_max(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.find_max(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    find_max(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 8,
      "title": "Level 8: Jurassic Remove all spaces",
      "difficulty": "Hard",
      "timeLimit": 720,
      "story": "[Jurassic Escape] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `remove_spaces` - Remove all spaces.",
      "examples": "Example: a b c->abc",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "a b c",
          "expected": "abc"
        },
        {
          "input": " hello ",
          "expected": "hello"
        }
      ],
      "starterCode": {
        "python": "def remove_spaces(arg):\n    # Remove all spaces\n    pass",
        "java": "class Solution {\n    public static String remove_spaces(String arg) {\n        // Remove all spaces\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid remove_spaces(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(remove_spaces(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.remove_spaces(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    remove_spaces(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 9,
      "title": "Level 9: Jurassic Convert to uppercase",
      "difficulty": "Hard",
      "timeLimit": 660,
      "story": "[Jurassic Escape] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `to_uppercase` - Convert to uppercase.",
      "examples": "Example: hi->HI",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hi",
          "expected": "HI"
        },
        {
          "input": "abC",
          "expected": "ABC"
        }
      ],
      "starterCode": {
        "python": "def to_uppercase(arg):\n    # Convert to uppercase\n    pass",
        "java": "class Solution {\n    public static String to_uppercase(String arg) {\n        // Convert to uppercase\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid to_uppercase(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(to_uppercase(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.to_uppercase(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    to_uppercase(argv[1]);\n    return 0;\n}"
      }
    },
    {
      "level": 10,
      "title": "Level 10: Jurassic Length of string",
      "difficulty": "Hard",
      "timeLimit": 600,
      "story": "[Jurassic Escape] Challenge sequence initiated. Solve this logic gate to advance!",
      "task": "Write function `string_length` - Length of string.",
      "examples": "Example: hi->2",
      "hint": "Read the test cases carefully.",
      "testCases": [
        {
          "input": "hi",
          "expected": "2"
        },
        {
          "input": "hello",
          "expected": "5"
        }
      ],
      "starterCode": {
        "python": "def string_length(arg):\n    # Length of string\n    pass",
        "java": "class Solution {\n    public static String string_length(String arg) {\n        // Length of string\n        return \"\";\n    }\n}",
        "c": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid string_length(char* arg) {\n    // Print output\n}"
      },
      "driverCode": {
        "python": "\nimport sys\nprint(string_length(sys.argv[1]))",
        "java": "\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.string_length(args[0]));\n    }\n}",
        "c": "\nint main(int argc, char *argv[]) {\n    string_length(argv[1]);\n    return 0;\n}"
      }
    }
  ]
};
