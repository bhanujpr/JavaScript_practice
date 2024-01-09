/*
JAVASCRIPT EXECUTION CONTEXT:
        1)GLOBAL EXECUTION CONTEXT
        2)FUNCTION EXECUTION CONTEXT
        3)EVAL EXECUTION CONTEXT


JAVA SCRIPT EXECUTES IN TWO PHASES:
        1)MEMORY CREATION PHASE/CREATION PHASE:-IN THIS ONLY MEMORY ALLOCATED TO THE VARIABLES

        2)EXECUTION PHASE:EXECUTION TAKES PLACE IS THIS PHASE
*/



    CODE:
        let val1=10;
        let val2=5;

        function addNum(num1,num2){
            let total = num1+num2
            return total
        }

        let result1=addNum(val1,val2)
        let result2=addNum(10,2)

/*
EXECUTION OF CODE:
        1)GLOBAL EXECUTION 
            i) allocated to this pointer
        2)MEMORY PHASE: COLLECT ALL VARIABLES AND KEEP
            i) val1->undefined
            ii)val2->undefined
            iii)addNum->defination of function
            iv)result1->undefined
            v)result2->undefined
        //This is called first cycle

        3)EXECUTION PHASE
            i)val1->10
            ii)val2->5
            iii)addNUM->ye apna alag execution context banayga(new variables environment+execution thread)now dono phase vps hongy for this
                a)Memory phase
                    i)num1->undefined
                    ii)num2->undefined
                    iii)total->undefined
                b)Execution:
                    num1->10
                    num2->5
                    total->15//return to global execution context
                c)DELETE this 
            iv)result1->15
            v)result2->same two phase get output 12



CALL STACKS:LIFO CONCEPT
        1)global execution
        2)method to execute
        3)remove the completed
        4)we can also create this for method in method


WE CAN CHECK THIS ON INSPECT->SOURCES->CREATESNIPPESTS 

*/