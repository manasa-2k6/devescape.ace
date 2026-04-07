export const getLevelData = (themeId, levelNum) => {
  return levels[themeId]?.[levelNum - 1] || null;
};

// levels is a nested structure where key is themeId, value is array of 10 levels.
export const levels = {
  // Theme 1: Cyber Heist
  1: [
    {
      level: 1,
      title: "Level 1: The Firewall Bypass",
      difficulty: "Easy",
      timeLimit: 1200, // 20 minutes
      story: "You confront MegaCorp's outer firewall. It expects a simple validation sequence to let you through.",
      task: "Write a function `validate` that takes an integer `n`. If `n` is even, return the string 'ACCESS'. If `n` is odd, return 'DENIED'.",
      examples: "Input: 4 -> Output: 'ACCESS'\nInput: 5 -> Output: 'DENIED'",
      hint: "Use the modulo operator (%) to check if a number is even.",
      testCases: [
        { input: "4", expected: "ACCESS" },
        { input: "5", expected: "DENIED" },
        { input: "0", expected: "ACCESS" },
        { input: "-3", expected: "DENIED" }
      ],
      starterCode: {
        python: "def validate(n):\n    # Write your code here\n    pass\n\nimport sys\nn = int(sys.argv[1])\nprint(validate(n))",
        java: "public class Main {\n    public static String validate(int n) {\n        // Write your code here\n        return \"\";\n    }\n    public static void main(String[] args) {\n        int n = Integer.parseInt(args[0]);\n        System.out.println(validate(n));\n    }\n}",
        c: "#include <stdio.h>\n#include <stdlib.h>\n\nvoid validate(int n) {\n    // Print 'ACCESS' or 'DENIED' based on n\n}\n\nint main(int argc, char *argv[]) {\n    int n = atoi(argv[1]);\n    validate(n);\n    return 0;\n}"
      }
    },
    // We will populate 9 more levels for Cyber Heist. For now, we simulate full completeness by adding just enough levels to test flow. Let's add up to Level 3.
    {
      level: 2,
      title: "Level 2: Data Extraction",
      difficulty: "Easy",
      timeLimit: 1200,
      story: "You are inside. The data fragments are scrambled text. You need to reverse them to read the contents.",
      task: "Write a function that takes a string `s` and returns it reversed.",
      examples: "Input: 'hacker' -> Output: 'rekcah'",
      hint: "Strings can be sliced backward in Python, or loop backwards through the characters in other languages.",
      testCases: [
        { input: "\"hacker\"", expected: "rekcah" },
        { input: "\"MegaCorp\"", expected: "proCageM" }
      ],
      starterCode: {
        python: "def reverse_string(s):\n    # Write your code here\n    pass\n\nimport sys\nprint(reverse_string(sys.argv[1]))",
        java: "public class Main {\n    public static String reverseString(String s) {\n        // Write your code here\n        return \"\";\n    }\n    public static void main(String[] args) {\n        System.out.println(reverseString(args[0]));\n    }\n}",
        c: "#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* s) {\n    // Print reversed string\n}\n\nint main(int argc, char *argv[]) {\n    reverseString(argv[1]);\n    return 0;\n}"
      }
    },
    {
        level: 3,
        title: "Level 3: Protocol Ping",
        difficulty: "Easy-Medium",
        timeLimit: 900,
        story: "The system is demanding a specific sequence to establish a secure handshake. It looks like a variant of FizzBuzz.",
        task: "Given an integer `n`, output the numbers from 1 to `n` joined by a space, but replace multiples of 3 with 'Ping' and multiples of 5 with 'Pong'. Multiples of both are 'PingPong'.",
        examples: "Input: 5 -> Output: '1 2 Ping 4 Pong'",
        hint: "Check for the condition consisting of both (mod 15) first before checking mod 3 or mod 5 individually.",
        testCases: [
          { input: "5", expected: "1 2 Ping 4 Pong" },
          { input: "15", expected: "1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong" }
        ],
        starterCode: {
          python: "def protocol(n):\n    # Return a space separated string\n    pass\n\nimport sys\nprint(protocol(int(sys.argv[1])))",
          java: "public class Main {\n    public static String protocol(int n) {\n        // Return a space separated string\n        return \"\";\n    }\n    public static void main(String[] args) {\n        System.out.println(protocol(Integer.parseInt(args[0])));\n    }\n}",
          c: "#include <stdio.h>\n#include <stdlib.h>\n\nvoid protocol(int n) {\n    // Print space separated string\n}\n\nint main(int argc, char *argv[]) {\n    protocol(atoi(argv[1]));\n    return 0;\n}"
        }
      }
  ]
};
