using System;
using System.Collections.Generic;

namespace c.src
{
    class Palindromes 
    {
        public Palindromes(){}

        public string[] getPalindromes(string[] Arr)
        {
            List<string> Palindromes = new List<string>();
            string Compare;

            foreach(string i in Arr)
            {
                Console.WriteLine(i);
            }

            return Palindromes.ToArray();
        }

        public int[] getPalindromes(int[] Arr)
        {
            List<int> Palindromes = new List<int>();
            int Compare;

            foreach(int i in Arr)
            {
                Compare = reverseString(i);
            }

            return Palindromes.ToArray();
        }

        public string reverseString(String str) 
        {     
            
            string ReversedString = Array.Reverse(str.ToCharArray());

            return new string (ReversedString);
        }

        public int reverseString(int num) 
        {  
            int ReversedString;

            return num;
        }
    }
}