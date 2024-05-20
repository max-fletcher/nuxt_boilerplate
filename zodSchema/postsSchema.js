import * as zod from 'zod';

const StorePostSchema = zod.object({
  email2: zod.string({ required_error: "email2 is required" }).min(1, { message: "email2 is required" }).email({ message: 'Must be a valid email' }),
  password: zod.string({ required_error: "password is required" }).min(1, { message: 'password is required' }).min(8, { message: 'Too short' }),
  datetime:zod.any()
    .refine((val)=>{
        console.log('1st refine', val);
          return val !== undefined
      },
      { message: "datetime is required"}
    )
    .refine((val)=>{
        console.log('2nd refine', val);
        if(val !== undefined){
          const regEx = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
          const dateString = val.year + "-" + val.month + "-" + val.day
          console.log("2nd refine inside", dateString, dateString.match(regEx), !!dateString.match(regEx))
          return !!dateString.match(regEx)
        }
      },
      { message: "Incorrect date format. Please enter date as yyyy-mm-dd."}
    ),
    checkboxVal: zod.boolean({ required_error: "CheckboxVal is required" }),
})

export { StorePostSchema }