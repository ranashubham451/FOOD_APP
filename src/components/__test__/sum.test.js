import { Result } from "postcss"
import { sum } from "../sum"
test("Sum function should calculate the sum of two number",()=>{
     const result=  sum(5,7)

     //Assersion
     expect(result).toBe(12)
})