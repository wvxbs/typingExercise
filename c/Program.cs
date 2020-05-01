using System;
using c.src;

namespace c
{
    class Program
    {
        static void Main(string[] args)
        {
            int [] Ex1 = {1232, 121, 96235, 72627, 801108, 523925, 9, 865568};
            string [] Ex2 = {"a", "ama", "ralar", "aprovado", "rodador", "reter", "aprenda", "selecionado", "mussum"};
    
            int [] Ex3 = {4, 7, 17, 9, 79, 95, 4, 66, 36, 17, 70, 51, 24, 35, 65, 64, 60, 19, 27, 1};
            string [] Ex4 = {"V","Q","P","U","S","E","B","I","J","C","N","Z","X","T","F","A","K","W","L","Y"};

            Palindromes p = new Palindromes();
            p.getPalindromes(Ex1);
            Console.WriteLine("\n");
            p.getPalindromes(Ex2);
        }
    }
}