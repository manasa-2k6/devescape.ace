import fs from 'fs';
import path from 'path';

const themes = [
    { id: 1, name: "Cyber Heist" }, { id: 2, name: "Mad Scientist's Lab" }, { id: 3, name: "Ancient Algorithm Temple" }, { id: 4, name: "Space Station Meltdown" }, { id: 5, name: "Zombie Apocalypse" }, { id: 6, name: "Stranger Things" }, { id: 7, name: "Money Heist" }, { id: 8, name: "Wizarding Academy" }, { id: 9, name: "The Matrix" }, { id: 10, name: "Jurassic Escape" }
];

const A = [
    { n: "validate", t: "Even/Odd (ACCESS/DENIED)", e:"4->ACCESS", tc:[["4","ACCESS"],["5","DENIED"],["0","ACCESS"]] },
    { n: "reverse_string", t: "Reverse string", e:"abc->cba", tc:[["abc","cba"],["hacker","rekcah"]] },
    { n: "protocol", t: "FizzBuzz", e:"5->1 2 Ping 4 Pong", tc:[["5","1 2 Ping 4 Pong"],["15","1 2 Ping 4 Pong Ping 7 8 Ping Pong 11 Ping 13 14 PingPong"]] },
    { n: "is_palindrome", t: "Palindrome (TRUE/FALSE)", e:"aba->TRUE", tc:[["aba","TRUE"],["abc","FALSE"]] },
    { n: "sum_array", t: "Sum comma int array", e:"1,2->3", tc:[["1,2","3"],["5,-1,4","8"]] },
    { n: "count_vowels", t: "Count vowels", e:"apple->2", tc:[["apple","2"],["sky","0"]] },
    { n: "find_max", t: "Max in comma array", e:"1,9,4->9", tc:[["1,9,4","9"],["-1,-5"," -1"]] },
    { n: "remove_spaces", t: "Remove all spaces", e:"a b c->abc", tc:[["a b c","abc"],[" hello ","hello"]] },
    { n: "to_uppercase", t: "Convert to uppercase", e:"hi->HI", tc:[["hi","HI"],["abC","ABC"]] },
    { n: "string_length", t: "Length of string", e:"hi->2", tc:[["hi","2"],["hello","5"]] },
    
    { n: "first_char", t: "Return first char", e:"cat->c", tc:[["cat","c"],["dog","d"]] },
    { n: "last_char", t: "Return last char", e:"cat->t", tc:[["cat","t"],["dog","g"]] },
    { n: "fibonacci", t: "Nth Fibonacci", e:"5->3", tc:[["5","3"],["8","13"]] },
    { n: "is_prime", t: "Prime (YES/NO)", e:"7->YES", tc:[["7","YES"],["10","NO"]] },
    { n: "factorial", t: "Factorial", e:"5->120", tc:[["5","120"],["4","24"]] },
    { n: "count_consonants", t: "Count consonants", e:"cat->2", tc:[["cat","2"],["e","0"]] },
    { n: "find_min", t: "Min in comma array", e:"1,9,4->1", tc:[["1,9,4","1"],["-1,-5","-5"]] },
    { n: "reverse_words", t: "Reverse words separated by space", e:"hello world->world hello", tc:[["hello world","world hello"],["a b","b a"]] },
    { n: "square_number", t: "Square the number", e:"5->25", tc:[["5","25"],["-3","9"]] },
    { n: "cube_number", t: "Cube the number", e:"3->27", tc:[["3","27"],["-2","-8"]] },

    { n: "sum_digits", t: "Sum of digits", e:"123->6", tc:[["123","6"],["901","10"]] },
    { n: "is_anagram", t: "Anagrams separated by comma (TRUE/FALSE)", e:"listen,silent->TRUE", tc:[["listen,silent","TRUE"],["cat,dog","FALSE"]] },
    { n: "missing_number", t: "Missing num in 1..N comma array", e:"1,2,4->3", tc:[["1,2,4","3"],["1,3,4,5","2"]] },
    { n: "longest_word", t: "Longest word in space-separated string", e:"a bb ccc->ccc", tc:[["a bb ccc","ccc"],["hello hi","hello"]] },
    { n: "remove_duplicates", t: "Remove duplicate chars", e:"apple->aple", tc:[["apple","aple"],["aabbcc","abc"]] },
    { n: "count_char", t: "Count specific char (string,char)", e:"aba,a->2", tc:[["aba,a","2"],["cat,z","0"]] },
    { n: "is_power_of_two", t: "Is power of 2 (TRUE/FALSE)", e:"8->TRUE", tc:[["8","TRUE"],["10","FALSE"]] },
    { n: "repeat_string", t: "Repeat string N times (string,n)", e:"a,3->aaa", tc:[["a,3","aaa"],["hi,2","hihi"]] },
    { n: "word_count", t: "Count words separated by space", e:"hello world->2", tc:[["hello world","2"],["one","1"]] },
    { n: "sort_array", t: "Sort comma array", e:"3,1,2->1,2,3", tc:[["3,1,2","1,2,3"],["9,4","4,9"]] }
];

const genTemplate = (lang, func, desc) => {
    if(lang === 'python') return `def ${func}(arg):\n    # ${desc}\n    pass`;
    if(lang === 'java') return `class Solution {\n    public static String ${func}(String arg) {\n        // ${desc}\n        return \"\";\n    }\n}`;
    if(lang === 'c') return `#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid ${func}(char* arg) {\n    // Print output\n}`;
};

const genDriver = (lang, func) => {
    if(lang === 'python') return `\nimport sys\nprint(${func}(sys.argv[1]))`;
    if(lang === 'java') return `\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(Solution.${func}(args[0]));\n    }\n}`;
    if(lang === 'c') return `\nint main(int argc, char *argv[]) {\n    ${func}(argv[1]);\n    return 0;\n}`;
};

const levelsObject = {};
themes.forEach(theme => {
    levelsObject[theme.id] = [];
    for(let i=1; i<=10; i++) {
        // Pick archetype systematically
        // Theme 1 uses archetypes 0..9, Theme 2 uses 10..19, Theme 3 uses 20..29, Theme 4 uses 0..9 again... 
        let a_idx = ((theme.id - 1) * 10 + (i - 1)) % 30;
        let diff = "Easy";
        if (i >= 4) diff = "Medium";
        if (i >= 8) diff = "Hard";

        let arch = A[a_idx];

        levelsObject[theme.id].push({
            level: i,
            title: `Level ${i}: ${theme.name.split(' ')[0]} ${arch.t}`,
            difficulty: diff,
            timeLimit: 1200 - (i*60),
            story: `[${theme.name}] Challenge sequence initiated. Solve this logic gate to advance!`,
            task: `Write function \`${arch.n}\` - ${arch.t}.`,
            examples: `Example: ${arch.e}`,
            hint: "Read the test cases carefully.",
            testCases: arch.tc.map(t => ({ input: t[0], expected: t[1].trim() })),
            starterCode: {
                python: genTemplate('python', arch.n, arch.t),
                java: genTemplate('java', arch.n, arch.t),
                c: genTemplate('c', arch.n, arch.t)
            },
            driverCode: {
                python: genDriver('python', arch.n),
                java: genDriver('java', arch.n),
                c: genDriver('c', arch.n)
            }
        });
    }
});

const outputRaw = `export const getLevelData = (themeId, levelNum) => {
  return levels[themeId]?.[levelNum - 1] || null;
};

export const levels = ${JSON.stringify(levelsObject, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'src/data/levels.js'), outputRaw);
console.log("Generated 100 levels successfully!");
