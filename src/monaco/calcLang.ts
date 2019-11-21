import * as monaco from "monaco-editor";

export default {
  // Set defaultToken to invalid to see what isn't tokenized yet
  // defaultToken: "invalid",

  keywords: [
    "bignumber", "boolean", "chain", "complex", "fraction", "index", "matrix", "number", "sparse", "string", "unit", "compile", "evaluate", "parse",
    "derivative", "lsolve", "lup", "lusolve", "qr", "rationalize", "simplify", "slu", "usolve",

    "abs", "add", "cbrt", "ceil", "cube", "divide", "dotDivide", "dotMultiply", "dotPow", "exp", "expm1", "fix", "floor", "gcd", "hypot", "lcm", "log", "log10", "log1p", "log2", "mod", "multiply", "norm", "nthRoot", "nthRoots", "pow", "round", "sign", "sqrt", "square", "subtract", "unaryMinus", "unaryPlus", "xgcd",

    "bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift",

    "bellNumbers", "catalan", "composition", "stirlingS2",

    "arg", "conj", "im", "re",

    "distance", "intersect",

    "and", "not", "or", "xor",

    "apply", "column", "concat", "cross", "ctranspose", "det", "diag", "dot", "expm", "filter", "flatten", "forEach", "getMatrixDataType", "identity", "inv", "kron", "map", "ones", "partitionSelect", "range", "reshape", "resize", "row", "size", "sort", "sqrtm", "squeeze", "subset", "trace", "transpose", "zeros",

    "combinations", "combinationsWithRep", "factorial", "gamma", "kldivergence", "multinomial", "permutations", "pickRandom", "random", "randomInt",

    "compare", "compareNatural", "compareText", "deepEqual", "equal", "equalText", "larger", "largerEq", "smaller", "smallerEq", "unequal",

    "setCartesian", "setDifference", "setDistinct", "setIntersect", "setIsSubset", "setMultiplicity", "setPowerset", "setSize", "setSymDifference", "setUnion",

    "erf",

    "mad", "max", "mean", "median", "min", "mode", "prod", "quantileSeq", "std", "sum", "variance",

    "format",

    "acos", "acosh", "acot", "acoth", "acsc", "acsch", "asec", "asech", "asin", "asinh", "atan", "atan2", "atanh", "cos", "cosh", "cot", "coth", "csc", "csch", "sec", "sech", "sin", "sinh", "tan", "tanh",

    "in"
  ],

  typeKeywords: [
    "true", "false", "deg", "i",
    "mm", "cm", "m", "km", "inch", "inches", "feet", "miles"
  ],

  operators: [
    "=", ">", "<", "!", "?", ":", "==", "<=", ">=", "!=",
    "++", "--", "+", "-", "*", "/", "&", "~", "|", "^", "^|", "%",
    "<<", ">>", ">>>"
  ],

  // include common regular expressions
  symbols: /[=><!~?:&|+\-*\/\^%]+/,

  // The main tokenizer for the language
  tokenizer: {
    root: [
      [/[a-z]+[ ]*\(/, "keyword"], // custom functions
      [/[A-Za-z]+[ ]*=[^=]+/, "keyword"], // custom variables

      // identifiers and keywords
      [/[a-z_$][\w$]*/, {
        cases: {
          "@typeKeywords": "type",
          "@keywords": "keyword",
          "@default": "type"
        }
      }],

      // whitespace
      { include: "@whitespace" },

      // delimiters and operators
      [/[{}()\[\]]/, "@brackets"],
      [/[<>](?!@symbols)/, "@brackets"],
      [/@symbols/, {
        cases: {
          "@operators": "operator",
          "@default": ""
        }
      }],

      // numbers
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/\d+/, "number"],

      // delimiter: after number because of .\d floats
      [/[;,.]/, "delimiter"],
    ],

    whitespace: [
      [/[ \t\r\n]+/, "white"],
    ],
  },
} as monaco.languages.IMonarchLanguage;